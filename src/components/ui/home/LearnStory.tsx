import { NavLink } from 'react-router-dom';
import { ArrowRight, BookOpen, Calculator, MessageSquareText } from 'lucide-react';
import Reveal from '@/components/ui/home/Reveal';
import {
  APP_SCREEN_HEIGHT,
  APP_SCREEN_WIDTH,
  appScreens,
} from '@/assets/appScreens';

const chips = [
  { title: 'Plain-language lessons', detail: 'Pick up where you stopped', icon: BookOpen, position: 'left-[6%] top-[22%]' },
  { title: 'Jargon buster', detail: 'Every term, explained', icon: MessageSquareText, position: 'right-[6%] top-[38%]' },
  { title: 'Planning calculators', detail: 'Try ideas before money moves', icon: Calculator, position: 'left-[9%] bottom-[18%]' },
];

/**
 * The device shots sit on a flat #E9E9E9 ground, so the panel takes that exact
 * colour and the phone reads as standing in it rather than pasted on top.
 */
export default function LearnStory() {
  return (
    <section id="learn" className="scroll-mt-20 bg-white py-16 md:py-24" aria-labelledby="learn-title">
      <div className="site-container">
        <Reveal className="mx-auto max-w-4xl text-center">
          <h2 id="learn-title" className="display-lg mx-auto max-w-[14ch]">
            Learn first. Invest when ready.
          </h2>
          <p className="lead-copy mx-auto mt-6 max-w-[46ch] text-[color:var(--muted-ink)]">
            Lessons in plain language, a jargon buster, and planning tools — so
            every decision starts with understanding, not guesswork.
          </p>
          <NavLink to="/download" className="pill-btn pill-btn--teal mt-8">
            Start learning <ArrowRight size={17} />
          </NavLink>
        </Reveal>

        <Reveal y={48} className="mt-14">
          <div className="relative overflow-hidden rounded-[clamp(24px,3vw,36px)] bg-[#E9E9E9] px-6 py-10 lg:py-14">
            <img
              src={appScreens.learn.src}
              alt={appScreens.learn.alt}
              width={APP_SCREEN_WIDTH}
              height={APP_SCREEN_HEIGHT}
              className="relative mx-auto block w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px]"
              loading="lazy"
              decoding="async"
            />
            {chips.map(({ title, detail, icon: Icon, position }, index) => (
              <Reveal key={title} delay={0.15 + index * 0.12} className={`absolute hidden lg:block ${position}`}>
                <span className="float-chip">
                  <span className="float-chip__icon"><Icon size={17} /></span>
                  <span className="text-sm leading-tight">
                    <span className="block font-[700]">{title}</span>
                    <span className="text-[color:var(--meta-ink)]">{detail}</span>
                  </span>
                </span>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
