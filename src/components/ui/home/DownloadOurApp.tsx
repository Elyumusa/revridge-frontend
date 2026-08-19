import { Play } from "lucide-react";
import { AppleMark } from "@/components/ui/StoreMarks";
import {
  APP_SCREEN_HEIGHT,
  APP_SCREEN_WIDTH,
  appScreens,
} from "@/assets/appScreens";
import { PLAY_STORE_URL, TESTFLIGHT_URL } from "@/lib/storeLinks";

export default function DownloadOurApp() {
  return (
    <section className="overflow-hidden bg-[#00322D] text-white">
      <div className="site-container grid items-center gap-10 py-16 lg:grid-cols-[1fr_.85fr] lg:py-20">
        <div className="max-w-2xl">
          <h2 className="text-[clamp(2.4rem,5.2vw,4.4rem)] leading-[.98] tracking-[-.04em] text-white">
            Your wealth journey, ready when you are.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
            Android is available on Google Play. Join the iOS beta to learn, set
            goals, track your net worth, and invest on the LuSE.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="store-action border-white bg-white text-primary hover:border-[#CAF300] hover:bg-[#CAF300] hover:text-primary"
            >
              <Play size={18} fill="currentColor" /> Get Android
            </a>
            {/* Was a NavLink to /download that opened a waitlist modal; the
                beta is public now, so this goes straight to TestFlight. */}
            <a
              href={TESTFLIGHT_URL}
              target="_blank"
              rel="noreferrer"
              className="store-action border-white bg-white text-primary hover:border-[#CAF300] hover:bg-[#CAF300] hover:text-primary"
            >
              <AppleMark size={19} /> Get iOS Beta
            </a>
          </div>
        </div>
        {/* The device shot is already on its own plate, so it sits directly on
            the dark band with a hairline rather than inside a second frame. */}
        <figure className="mx-auto w-full max-w-[380px] overflow-hidden rounded-[20px] border border-white/15">
          <img
            src={appScreens.learn.src}
            alt={appScreens.learn.alt}
            width={APP_SCREEN_WIDTH}
            height={APP_SCREEN_HEIGHT}
            className="block w-full"
            loading="lazy"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  );
}
