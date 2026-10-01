import { useEffect, useState } from "react";
import { Menu, Play, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "@/assets/images/logo_no_background.png";
import { AppleMark } from "@/components/ui/StoreMarks";
import { PLAY_STORE_URL, TESTFLIGHT_URL } from "@/lib/storeLinks";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Learn", to: "/#learn" },
  { label: "Invest", to: "/#invest" },
  { label: "Grow", to: "/#grow" },
  { label: "About", to: "/about" },
  { label: "Help", to: "/support" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Every route opens on a deep-teal hero, so the rail starts teal to read as
  // one field with it, then turns white once the page moves.
  const onHero = !scrolled && !open;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        onHero
          ? "border-transparent bg-[#00322D]"
          : "border-border bg-white/95 backdrop-blur",
      )}
    >
      <div className="site-container flex h-[72px] items-center justify-between gap-6">
        <NavLink
          to="/"
          className="flex items-center gap-2.5"
          aria-label="Revridge home"
          onClick={() => setOpen(false)}
        >
          <img
            src={Logo}
            alt=""
            width={40}
            height={40}
            className={cn(
              "h-10 w-10 object-contain transition-[filter]",
              onHero && "brightness-0 invert",
            )}
          />
          <span
            className={cn(
              "text-xl font-[780] tracking-[-0.03em] transition-colors",
              onHero ? "text-white" : "text-[#17201E]",
            )}
          >
            Revridge
          </span>
        </NavLink>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  // -my-3/py-3 grows the hit area without changing the rail height.
                  "-my-3 rounded-[8px] py-3 text-sm font-semibold transition-colors",
                  onHero
                    ? "text-white/85 hover:text-[#CAF300]"
                    : "text-[#17201E] hover:text-primary",
                  isActive && !item.to.startsWith("/#") && !onHero && "text-primary",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noreferrer"
            className={cn("pill-btn pill-btn--sm", onHero ? "pill-btn--white" : "pill-btn--teal")}
          >
            <Play size={15} fill="currentColor" />
            Android
          </a>
          {/* Was a NavLink to /download that opened a waitlist modal; the beta
              is public now, so this goes straight to TestFlight. */}
          <a
            href={TESTFLIGHT_URL}
            target="_blank"
            rel="noreferrer"
            className={cn("pill-btn pill-btn--sm", onHero ? "pill-btn--white" : "pill-btn--teal")}
          >
            <AppleMark size={16} />
            iOS Beta
          </a>
        </div>

        <button
          type="button"
          className={cn(
            "grid h-11 w-11 place-items-center rounded-full border lg:hidden",
            onHero ? "border-white/30 text-white" : "border-border text-primary",
          )}
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-border bg-white px-4 py-5 lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-md flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-[10px] px-4 py-3 font-semibold text-[#17201E] hover:bg-secondary"
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noreferrer"
                className="pill-btn pill-btn--teal"
              >
                <Play size={16} fill="currentColor" />
                Android
              </a>
              <a
                href={TESTFLIGHT_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="pill-btn pill-btn--teal"
              >
                <AppleMark size={17} />
                iOS Beta
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
