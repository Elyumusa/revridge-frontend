import learnInvesting from '@/assets/images/learn-investing-device.webp';
import practiceInvesting from '@/assets/images/practice-investing-device.webp';
import practiceInvestingCutout from '@/assets/images/practice-investing-cutout.webp';
import planFuture from '@/assets/images/plan-future-device.webp';
import analyzePortfolio from '@/assets/images/analyze-portfolio-device.webp';
import learnCutout from '@/assets/images/learn-investing-cutout.webp';
import planCutout from '@/assets/images/plan-future-cutout.webp';
import portfolioCutout from '@/assets/images/analyze-portfolio-cutout.webp';

/**
 * Device shots of the Revridge app, cropped from the App Store marketing frames
 * in src/assets/images/. The crops drop each frame's baked-in caption — it would
 * compete with the page's own headings — and are normalised to one device-to-frame
 * ratio so several can sit side by side without looking different sizes.
 *
 * Give every <img> the ratio below rather than these exact numbers.
 */
export const APP_SCREEN_WIDTH = 1242;
export const APP_SCREEN_HEIGHT = 2280;
export const APP_SCREEN_ASPECT = 'aspect-[1242/2280]';

/**
 * Transparent cutouts of the same four handsets (grey ground and shadow removed,
 * trimmed to the phone). They sit straight on a coloured field — the deep-teal
 * bands — where the flat #E9E9E9 plate of the device shots would read as a grey
 * rectangle. Cropped to the phone, so their aspect differs from the one above;
 * give the <img> only a width and let the height follow.
 */
export const appCutouts = {
  learn: { src: learnCutout, width: 792, height: 1427 },
  invest: { src: practiceInvestingCutout, width: 926, height: 1699 },
  grow: { src: planCutout, width: 792, height: 1426 },
  portfolio: { src: portfolioCutout, width: 788, height: 1427 },
} as const;

export const appScreens = {
  learn: {
    src: learnInvesting,
    alt: 'The Revridge Learn screen, showing lessons, a jargon buster, and financial calculators',
  },
  invest: {
    src: practiceInvesting,
    alt: 'Illustrative Revridge U.S. stock detail screen showing Apple. Prices are examples; paper trading uses virtual money.',
  },
  grow: {
    src: planFuture,
    alt: 'The Revridge future value calculator, projecting a kwacha investment over ten years',
  },
  portfolio: {
    src: analyzePortfolio,
    alt: 'Illustrative Revridge paper portfolio screen showing virtual cash and balances; these are separate from real net worth',
  },
  /** Illustrative U.S. stock screen; pair with visible paper trading context. */
  practice: {
    src: practiceInvesting,
    alt: 'A company page in the Revridge app, showing the price chart and the option to place an order',
  },
} as const;
