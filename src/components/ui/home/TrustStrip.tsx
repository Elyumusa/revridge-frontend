import { MapPin, Play, ShieldCheck } from 'lucide-react';
import { AppleMark } from '@/components/ui/StoreMarks';
import Reveal from '@/components/ui/home/Reveal';

/**
 * The proof row under the hero. Every item is a verifiable product fact —
 * PRODUCT.md rules out customer counts, ratings, awards, and partner names
 * until they are confirmed, so this row must not grow any.
 */
const facts = [
  { title: 'Live on Google Play', detail: 'Android, available now', icon: <Play size={22} fill="currentColor" /> },
  { title: 'iOS public beta', detail: 'Join through TestFlight', icon: <AppleMark size={23} /> },
  { title: 'Licensed brokers', detail: 'Execute and custody every order', icon: <ShieldCheck size={23} /> },
  { title: 'Starting in Zambia', detail: 'Local investing today, wider over time', icon: <MapPin size={23} /> },
];

export default function TrustStrip() {
  return (
    <section className="bg-white py-16 md:py-20" aria-label="Revridge at a glance">
      <div className="site-container">
        <Reveal>
          <p className="text-center text-base text-[color:var(--meta-ink)]">
            One app for learning, planning, investing, and tracking what you build
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
          {facts.map(({ title, detail, icon }, index) => (
            <Reveal key={title} delay={index * 0.08} className="flex flex-col items-center text-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-[#F5F7F6] text-[#004B44]">
                {icon}
              </span>
              <h3 className="mt-4 text-lg font-[680] tracking-[-.02em]">{title}</h3>
              <p className="mt-1 text-sm text-[color:var(--meta-ink)]">{detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
