/** Cloudflare Turnstile site key (public). Without it the bot check widget is not rendered. */
export const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY;
export const TURNSTILE_ENABLED = Boolean(TURNSTILE_SITE_KEY);
export const TURNSTILE_PENDING_MESSAGE = 'Just a moment, we’re checking your browser. Please try again in a few seconds.';
