// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },

    // single entry point — every stylesheet is chained via @import from here
    css: ["~/css/_main.css"],

    // viewport-fit=cover lets content render edge-to-edge so env(safe-area-inset-*) resolves to real values
    // color-scheme tells the browser to paint its default canvas dark before any CSS loads, avoiding a white flash
    app: {
        head: {
            viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
            meta: [
                {
                    name: "color-scheme",
                    content: "dark",
                },
            ],
        },
    },

    // Runtime config for environment variables
    runtimeConfig: {
        // Server-side only (private)
        directusUrl: process.env.DIRECTUS_URL,
        serverUserApiKey: process.env.SERVER_USER_API_KEY,

        // Exposed to client (public)
        public: {
            directusUrl: process.env.DIRECTUS_URL,
        },
    },
});
