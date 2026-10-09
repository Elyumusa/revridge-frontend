import { Play } from "lucide-react";
import { AppleMark } from "@/components/ui/StoreMarks";
import Reveal from "@/components/ui/home/Reveal";
import { appCutouts, appScreens } from "@/assets/appScreens";
import { PLAY_STORE_URL, TESTFLIGHT_URL } from "@/lib/storeLinks";

/** Closing call to action: one rounded teal stage, text on the left, and two
 *  handsets standing directly on the teal. They are transparent cutouts — the
 *  flat grey plate of the standard device shots looked like a hole in the green. */
export default function DownloadOurApp() {
  return (
    <section className="bg-white py-16 md:py-24" aria-labelledby="download-title">
      <div className="site-container">
        <Reveal y={48}>
          <div className="hero-glow relative overflow-hidden rounded-[clamp(28px,4vw,48px)] px-6 pb-12 pt-14 text-white sm:px-10 md:px-14 lg:grid lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-6 lg:py-0">
            <div className="pb-10 lg:py-20">
              <h2
                id="download-title"
                className="display-lg max-w-[12ch] text-white"
              >
                Your wealth journey starts here.
              </h2>
              <p className="lead-copy mt-6 max-w-[40ch] text-white/75">
                Android is live on Google Play. Join the iOS beta to learn, plan
                your goals, track your net worth, and start investing locally
                on the LuSE.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={PLAY_STORE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="pill-btn pill-btn--white"
                >
                  <Play size={17} fill="currentColor" /> Get Android
                </a>
                {/* Was a NavLink to /download that opened a waitlist modal; the
                    beta is public now, so this goes straight to TestFlight. */}
                <a
                  href={TESTFLIGHT_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="pill-btn pill-btn--white"
                >
                  <AppleMark size={18} /> Get iOS Beta
                </a>
              </div>
            </div>

            {/* Both handsets are shown whole and offset in height, so they read
                as a pair standing on the teal rather than clipped by the panel. */}
            <div className="relative mx-auto flex w-full max-w-[560px] items-center justify-center lg:max-w-none lg:py-16">
              <img
                src={appCutouts.learn.src}
                alt={appScreens.learn.alt}
                width={appCutouts.learn.width}
                height={appCutouts.learn.height}
                className="relative z-10 -mt-8 w-[46%] max-w-[250px] -rotate-2 drop-shadow-[0_30px_40px_rgba(0,20,18,.45)]"
                loading="lazy"
                decoding="async"
              />
              <img
                src={appCutouts.invest.src}
                alt={appScreens.invest.alt}
                width={appCutouts.invest.width}
                height={appCutouts.invest.height}
                className="-ml-[6%] mt-10 w-[46%] max-w-[250px] rotate-2 drop-shadow-[0_30px_40px_rgba(0,20,18,.45)]"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
