import { NavLink } from 'react-router-dom';
import Logo from '@/assets/images/logo_no_background.png';
import SocialLinks from '@/components/ui/SocialLinks';

const links = [
  ['About', '/about'], ['FAQ', '/faq'], ['Support', '/support'], ['Compliance', '/compliance'],
  ['Privacy', '/privacy'], ['Terms', '/terms'], ['Blog', '/blog'], ['Get the app', '/download'],
];

export default function Footer() {
  return (
    <footer className="bg-[#00322D] text-white">
      <div className="site-container py-14 md:py-20">
        <div className="grid gap-12 border-b border-white/15 pb-12 lg:grid-cols-[1.25fr_1fr]">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-[12px] bg-white"><img src={Logo} alt="" width={32} height={32} className="h-8 w-8" /></span>
              <span className="text-2xl font-[760] tracking-[-0.03em]">Revridge</span>
            </div>
            <p className="mt-6 max-w-lg text-base leading-7 text-white/75">Learn clearly, plan your goals, and follow your whole financial progress in one place — with investing available today on the LuSE.</p>
            <SocialLinks className="mt-7" />
          </div>
          {/* -mx-3 keeps the links flush with the column edge while each one
              still carries a full 44px tap target. */}
          <nav className="-mx-3 grid grid-cols-2 gap-x-5 sm:grid-cols-4 lg:grid-cols-2" aria-label="Footer navigation">
            {links.map(([label, to]) => <NavLink key={to} to={to} className="flex min-h-11 items-center rounded-[8px] px-3 text-sm font-semibold text-white/75 transition-colors hover:text-[#CAF300]">{label}</NavLink>)}
          </nav>
        </div>
        <div className="grid gap-5 pt-8 text-sm leading-6 text-white/70 lg:grid-cols-[1fr_auto]">
          <p className="max-w-[72ch]">Revridge is an investing technology and order-routing platform. Licensed broker partners execute, settle, and custody eligible LuSE trades. Revridge does not provide personalised investment advice.</p>
          <p className="lg:text-right">© {new Date().getFullYear()} Revridge. Investing involves risk.</p>
        </div>
      </div>
    </footer>
  );
}
