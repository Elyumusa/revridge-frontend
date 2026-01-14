/**
 * Centralized API Error Handler
 * Converts backend errors into user-friendly messages
 */

interface ApiError {
    response?: {
        status: number;
        data: any;
    };
    request?: any;
    message?: string;
}

/**
 * Parse API errors and return user-friendly messages
 */
export const parseApiError = (error: ApiError): string => {
    // Check if it's an Axios error with a response
    if (error.response) {
        const { status, data } = error.response;

        // Handle specific status codes
        switch (status) {
            case 400: {
                // Bad Request - validation errors
                if (typeof data === 'string') {
                    // Backend sends error as plain string
                    if (data.includes('already exists.')) {
                        return "Great news! You're already on our list. Check your inbox for updates!";
                    }
                    return data;
                }

                // Backend sends error as object
                if (data.email) {
                    const emailError = Array.isArray(data.email) ? data.email[0] : data.email;
                    if (emailError.includes('already exists.')) {
                        return "Great news! You're already on our list. Check your inbox for updates!";
                    }
                    return emailError;
                }

                if (data.message) {
                    return data.message;
                }

                if (data.detail) {
                    return data.detail;
                }

                return 'Invalid request. Please check your input and try again.';
            }

            case 401:
                return 'Authentication required. Please log in and try again.';

            case 403:
                return 'Access denied. You don\'t have permission to perform this action.';

            case 404:
                return 'Service not found. Please try again later.';

            case 429:
                return 'Too many requests. Please wait a moment and try again.';

            case 500:
                return 'Oops! Something went wrong on our end. Our team has been notified.';

            case 502:
            case 503:
                return 'Service temporarily unavailable. Please try again in a few minutes.';

            case 504:
                return 'Request timeout. Please check your connection and try again.';

            default:
                return 'Something went wrong. Please try again.';
        }
    }

    // Network error (no response received)
    if (error.request) {
        return 'Unable to connect to the server. Please check your internet connection and try again.';
    }

    // Unknown error
    return error.message || 'An unexpected error occurred. Please try again.';
};

/**
 * Get a success message for email signup
 */
export const getEmailSignupSuccessMessage = (email: string): string => {
    return `Success! Check ${email} for your confirmation.`;
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Get validation error message for email
 */
export const getEmailValidationError = (email: string): string | null => {
    if (!email) {
        return 'Email address is required.';
    }

    if (!isValidEmail(email)) {
        return 'Please enter a valid email address.';
    }

    return null;
};
