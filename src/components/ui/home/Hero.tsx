import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, Check, Play, Target } from 'lucide-react';
import { AppleMark } from '@/components/ui/StoreMarks';
import { appCutouts, appScreens } from '@/assets/appScreens';
import { PLAY_STORE_URL, TESTFLIGHT_URL } from '@/lib/storeLinks';
import HeroBackdrop from '@/components/ui/home/HeroBackdrop';

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
      <HeroBackdrop />
      <div className="site-container relative z-10 pb-10 pt-12 sm:pt-16 lg:pt-20">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="display-xl max-w-[12ch] text-white">
            Learn. Invest. <span className="text-[#CAF300]">Grow.</span>
          </h1>
          <p className="lead-copy mt-6 max-w-[40ch] text-white/80">
            Build wealth beyond borders. Start investing locally on the LuSE
            today, and grow toward broader opportunities.
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

      <div ref={stageRef} className="site-container relative z-10 pb-16 pt-6 lg:pb-24">
        <div className="relative mx-auto flex max-w-[1120px] items-end justify-center gap-8 lg:gap-16">
          <motion.figure
            style={reduceMotion ? { rotate: -5 } : { x: sideLeftX, y: sideY, rotate: -5 }}
            className="relative -mb-12 hidden w-[26%] md:block"
          >
            <img
              src={appCutouts.learn.src}
              alt={appScreens.learn.alt}
              width={appCutouts.learn.width}
              height={appCutouts.learn.height}
              className="block w-full drop-shadow-[0_30px_40px_rgba(0,20,18,.45)]"
              {...{ fetchpriority: 'high' }}
            />
            <div className="absolute inset-x-0 bottom-8 flex justify-center">
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
            className="relative z-10 w-full max-w-[380px] origin-bottom md:w-[34%]"
          >
            <img
              src={appCutouts.invest.src}
              alt={appScreens.invest.alt}
              width={appCutouts.invest.width}
              height={appCutouts.invest.height}
              className="block w-full drop-shadow-[0_30px_40px_rgba(0,20,18,.45)]"
              {...{ fetchpriority: 'high' }}
            />
            <div className="absolute inset-x-0 bottom-10 flex justify-center">
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
            style={reduceMotion ? { rotate: 5 } : { x: sideRightX, y: sideY, rotate: 5 }}
            className="relative -mb-12 hidden w-[26%] md:block"
          >
            <img
              src={appCutouts.grow.src}
              alt={appScreens.grow.alt}
              width={appCutouts.grow.width}
              height={appCutouts.grow.height}
              className="block w-full drop-shadow-[0_30px_40px_rgba(0,20,18,.45)]"
              {...{ fetchpriority: 'high' }}
            />
            <div className="absolute inset-x-0 bottom-8 flex justify-center">
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
