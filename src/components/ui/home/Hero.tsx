import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Check, Play, Target } from 'lucide-react';
import { AppleMark } from '@/components/ui/StoreMarks';
import {
  APP_SCREEN_HEIGHT,
  APP_SCREEN_WIDTH,
  appScreens,
} from '@/assets/appScreens';
import { PLAY_STORE_URL, TESTFLIGHT_URL } from '@/lib/storeLinks';

/**
 * Showcase hero: oversized headline on a full-bleed deep-teal field, equal
 * platform pills, and a trio of product cards that open up as the page
 * scrolls. The chips over the cards describe real product states (a lesson,
 * an order handed to a broker, a goal) — never returns or customer counts.
 */
export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ['start end', 'end start'],
  });

  const centerScale = useTransform(scrollYProgress, [0.25, 0.6], [1, 1.06]);
  const sideLeftX = useTransform(scrollYProgress, [0.25, 0.6], ['0%', '-8%']);
  const sideRightX = useTransform(scrollYProgress, [0.25, 0.6], ['0%', '8%']);
  const sideY = useTransform(scrollYProgress, [0.25, 0.6], ['0%', '-6%']);

  return (
    <section className="hero-glow relative overflow-hidden text-white">
      <div className="site-container pb-10 pt-12 sm:pt-16 lg:pt-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="display-xl max-w-[12ch] text-white">
            Learn. Invest. <span className="text-[#CAF300]">Grow.</span>
          </h1>
          <p className="lead-copy mt-6 max-w-[40ch] text-white/80">
            Your wealth, built in one app. Learn the basics, plan your goals,
            and invest on the LuSE today.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="pill-btn pill-btn--white"
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
            >
              <Play size={17} fill="currentColor" /> Get Android
            </a>
            {/* Was a NavLink to /download that opened a waitlist modal; the
                beta is public now, so this goes straight to TestFlight. */}
            <a
              className="pill-btn pill-btn--white"
              href={TESTFLIGHT_URL}
              target="_blank"
              rel="noreferrer"
            >
              <AppleMark size={18} /> Get iOS Beta
            </a>
          </div>
        </motion.div>
      </div>

      <div ref={stageRef} className="site-container relative pb-16 pt-6 lg:pb-24">
        <div className="relative mx-auto flex max-w-[1080px] items-end justify-center gap-4 lg:gap-6">
          <motion.figure
            style={reduceMotion ? undefined : { x: sideLeftX, y: sideY }}
            className="media-card -mb-12 hidden w-[28%] md:block"
          >
            <img
              src={appScreens.learn.src}
              alt={appScreens.learn.alt}
              width={APP_SCREEN_WIDTH}
              height={APP_SCREEN_HEIGHT}
              className="block w-full"
              fetchPriority="high"
            />
            <div className="absolute inset-x-3 bottom-3 flex justify-center">
              <span className="float-chip">
                <span className="float-chip__icon"><BookOpen size={17} /></span>
                <span className="text-left text-sm leading-tight">
                  <span className="block font-[700]">Lesson complete</span>
                  <span className="text-[color:var(--meta-ink)]">What is a dividend?</span>
                </span>
              </span>
            </div>
          </motion.figure>

          <motion.figure
            style={reduceMotion ? undefined : { scale: centerScale }}
            className="media-card z-10 w-full max-w-[380px] origin-bottom shadow-[0_40px_90px_rgba(0,20,18,.45)] md:w-[36%]"
          >
            <img
              src={appScreens.invest.src}
              alt={appScreens.invest.alt}
              width={APP_SCREEN_WIDTH}
              height={APP_SCREEN_HEIGHT}
              className="block w-full"
              fetchPriority="high"
            />
            <div className="absolute inset-x-3 bottom-4 flex justify-center">
              <span className="float-chip">
                <span className="float-chip__icon"><Check size={18} strokeWidth={2.6} /></span>
                <span className="text-left text-sm leading-tight">
                  <span className="block font-[700]">Order sent to your broker</span>
                  <span className="text-[color:var(--meta-ink)]">LuSE · Awaiting confirmation</span>
                </span>
              </span>
            </div>
          </motion.figure>

          <motion.figure
            style={reduceMotion ? undefined : { x: sideRightX, y: sideY }}
            className="media-card -mb-12 hidden w-[28%] md:block"
          >
            <img
              src={appScreens.grow.src}
              alt={appScreens.grow.alt}
              width={APP_SCREEN_WIDTH}
              height={APP_SCREEN_HEIGHT}
              className="block w-full"
              fetchPriority="high"
            />
            <div className="absolute inset-x-3 bottom-3 flex justify-center">
              <span className="float-chip">
                <span className="float-chip__icon"><Target size={17} /></span>
                <span className="text-left text-sm leading-tight">
                  <span className="block font-[700]">House deposit</span>
                  <span className="mt-1 block h-1.5 w-28 overflow-hidden rounded-full bg-[#E2E7E5]">
                    <span className="block h-full w-[62%] rounded-full bg-[#004B44]" />
                  </span>
                </span>
              </span>
            </div>
          </motion.figure>
        </div>

        <p className="mt-14 text-center text-xs leading-5 text-white/60 md:mt-20">
          Investing involves risk. Illustrations show product features, not
          forecasts or recommendations.
        </p>
      </div>
    </section>
  );
}
