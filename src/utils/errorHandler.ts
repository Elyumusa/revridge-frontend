/** Converts backend and network errors into user-friendly messages. */

type UnknownRecord = Record<string, unknown>;

function isRecord(value: unknown): value is UnknownRecord {
    return typeof value === 'object' && value !== null;
}

function stringField(value: unknown, field: string): string | null {
    if (!isRecord(value)) return null;
    return typeof value[field] === 'string' ? value[field] : null;
}

export const parseApiError = (error: unknown): string => {
    const candidate = isRecord(error) ? error : {};
    const response = isRecord(candidate.response) ? candidate.response : null;

    if (response) {
        const status = typeof response.status === 'number' ? response.status : 0;
        const data = response.data;

        switch (status) {
            case 400: {
                if (typeof data === 'string') {
                    if (data.includes('already exists.')) {
                        return "Great news! You're already on our list. Check your inbox for updates!";
                    }
                    return data;
                }

                if (isRecord(data)) {
                    const rawEmail = data.email;
                    const emailError = Array.isArray(rawEmail)
                        ? (typeof rawEmail[0] === 'string' ? rawEmail[0] : null)
                        : (typeof rawEmail === 'string' ? rawEmail : null);
                    if (emailError?.includes('already exists.')) {
                        return "Great news! You're already on our list. Check your inbox for updates!";
                    }
                    if (emailError) return emailError;
                    return stringField(data, 'message')
                        || stringField(data, 'detail')
                        || 'Invalid request. Please check your input and try again.';
                }

                return 'Invalid request. Please check your input and try again.';
            }
            case 401:
                return 'Authentication required. Please log in and try again.';
            case 403:
                return "Access denied. You don't have permission to perform this action.";
            case 404:
                return 'Service not found. Please try again later.';
            case 429:
                return 'Too many requests. Please wait a moment and try again.';
            case 500:
                return 'Something went wrong on our end. Please try again later.';
            case 502:
            case 503:
                return 'Service temporarily unavailable. Please try again in a few minutes.';
            case 504:
                return 'Request timeout. Please check your connection and try again.';
            default:
                return 'Something went wrong. Please try again.';
        }
    }

    if (candidate.request) {
        return 'Unable to connect to the server. Please check your internet connection and try again.';
    }

    return typeof candidate.message === 'string'
        ? candidate.message
        : 'An unexpected error occurred. Please try again.';
};

export const getEmailSignupSuccessMessage = (email: string): string =>
    `Success! Check ${email} for your confirmation.`;

export const isValidEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const getEmailValidationError = (email: string): string | null => {
    if (!email) return 'Email address is required.';
    if (!isValidEmail(email)) return 'Please enter a valid email address.';
    return null;
};
