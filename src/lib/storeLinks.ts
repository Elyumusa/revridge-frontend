/**
 * Store destinations for the two platform actions used across the site (nav,
 * hero, download sections, and the dedicated download page).
 */
export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.revridge.app";

/**
 * Public TestFlight beta. The iOS action used to route to /download and open
 * a "join the waitlist" email-collection modal; now that the beta itself is
 * public, it links straight to TestFlight instead. DownloadAppPage.tsx keeps
 * the waitlist modal's code commented out rather than deleted, in case a
 * future closed-beta phase needs it again.
 */
export const TESTFLIGHT_URL = "https://testflight.apple.com/join/eYeyCPQU";
