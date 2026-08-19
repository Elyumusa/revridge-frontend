import { useState } from "react";
import { Menu, Play, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "@/assets/images/logo_no_background.png";
import { AppleMark } from "@/components/ui/StoreMarks";
import { PLAY_STORE_URL, TESTFLIGHT_URL } from "@/lib/storeLinks";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Learn", to: "/#learn" },
  { label: "Invest", to: "/#calculator" },
  { label: "Grow", to: "/#grow" },
  { label: "About", to: "/about" },
  { label: "Help", to: "/support" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white">
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
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-[780] tracking-[-0.03em] text-[#17201E]">
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
                  "-my-3 rounded-[8px] py-3 text-sm font-semibold text-[#17201E] transition-colors hover:text-primary",
                  isActive && !item.to.startsWith("/#") && "text-primary",
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
            className="store-action store-action--filled min-h-11 px-4"
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
            className="store-action store-action--filled min-h-11 px-4"
          >
            <AppleMark size={16} />
            iOS Beta
          </a>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-[10px] border border-border text-primary lg:hidden"
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
                className="store-action store-action--filled"
              >
                <Play size={16} fill="currentColor" />
                Android
              </a>
              <a
                href={TESTFLIGHT_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="store-action store-action--filled"
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
