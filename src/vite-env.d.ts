/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_REVRIDGE_BACKEND_URL: string;
    /** Cloudflare Turnstile site key (public). Without it the bot check widget is not rendered. */
    readonly VITE_TURNSTILE_SITE_KEY?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
