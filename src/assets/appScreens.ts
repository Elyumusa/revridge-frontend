import learnInvesting from '@/assets/images/learn-investing-device.webp';
import exploreLuse from '@/assets/images/explore-luse-device.webp';
import practiceInvesting from '@/assets/images/practice-investing-device.webp';
import planFuture from '@/assets/images/plan-future-device.webp';
import analyzePortfolio from '@/assets/images/analyze-portfolio-device.webp';

/**
 * Device shots of the Revridge app, cropped from the App Store marketing frames
 * in src/assets/images/. The crops drop each frame's baked-in caption — it would
 * compete with the page's own headings — and are normalised to one device-to-frame
 * ratio so several can sit side by side without looking different sizes.
 *
 * They share one aspect ratio rather than one pixel size: the LuSE explorer was
 * supplied at a smaller resolution, and upscaling it to match would only soften
 * it. Give every <img> the ratio below rather than these exact numbers.
 */
export const APP_SCREEN_WIDTH = 1242;
export const APP_SCREEN_HEIGHT = 2280;
export const APP_SCREEN_ASPECT = 'aspect-[1242/2280]';

export const appScreens = {
  learn: {
    src: learnInvesting,
    alt: 'The Revridge Learn screen, showing lessons, a jargon buster, and financial calculators',
  },
  invest: {
    src: exploreLuse,
    alt: 'The Explore LuSE screen in the Revridge app, listing companies such as AECI, Airtel Networks Zambia, and BAT Zambia with their kwacha prices',
  },
  grow: {
    src: planFuture,
    alt: 'The Revridge future value calculator, projecting a kwacha investment over ten years',
  },
  portfolio: {
    src: analyzePortfolio,
    alt: 'The Revridge portfolio screen, showing total value, cash, and invested balances',
  },
  /**
   * Unused on the site. This frame shows a US-listed company with a Buy button,
   * which reads as a claim that US equities are available today. Do not put it
   * on a marketing surface until that is actually true.
   */
  practice: {
    src: practiceInvesting,
    alt: 'A company page in the Revridge app, showing the price chart and the option to place an order',
  },
} as const;
