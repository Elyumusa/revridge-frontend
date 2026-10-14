/** Converts backend and network errors into user-friendly messages. */

type UnknownRecord = Record<string, unknown>;

function isRecord(value: unknown): value is UnknownRecord {
    return typeof value === 'object' && value !== null;
}

function stringField(value: unknown, field: string): string | null {
    if (!isRecord(value)) return null;
    return typeof value[field] === 'string' ? value[field] : null;
}

const FIELD_LABELS: Record<string, string> = { name: 'Name', email: 'Email', message: 'Message', category: 'Topic' };

/** First DRF field error, e.g. {"message": ["Message must be at least 10 characters long."]}. */
function firstFieldError(data: UnknownRecord): string | null {
    for (const [field, value] of Object.entries(data)) {
        const text = Array.isArray(value) ? value.find((item) => typeof item === 'string') : value;
        if (typeof text === 'string') {
            const label = FIELD_LABELS[field];
            return label && !text.toLowerCase().startsWith(label.toLowerCase()) ? `${label}: ${text}` : text;
        }
    }
    return null;
}

export const parseApiError = (error: unknown): string => {
    const candidate = isRecord(error) ? error : {};
    const response = isRecord(candidate.response) ? candidate.response : null;

    if (response) {
        const status = typeof response.status === 'number' ? response.status : 0;
        const data = response.data;

        switch (status) {
            case 400: {
                if (typeof data === 'string') return data;

                if (isRecord(data)) {
                    return stringField(data, 'detail')
                        || stringField(data, 'message')
                        || firstFieldError(data)
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
    `Almost done! Check ${email} and click the link to confirm your subscription.`;

export const isValidEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export const getEmailValidationError = (email: string): string | null => {
    if (!email) return 'Email address is required.';
    if (!isValidEmail(email)) return 'Please enter a valid email address.';
    return null;
};
