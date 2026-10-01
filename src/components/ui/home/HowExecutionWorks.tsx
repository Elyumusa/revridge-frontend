import { Check, FileCheck2, Landmark, Route } from 'lucide-react';
import Reveal from '@/components/ui/home/Reveal';

const steps = [
  { title: 'Choose a LuSE company', copy: 'Review the available company information and decide what fits your own plan.', icon: Landmark },
  { title: 'Complete onboarding', copy: 'Eligible investors complete the identity and broker requirements before ordering.', icon: FileCheck2 },
  { title: 'Revridge routes the order', copy: 'Your order is sent to an operational licensed broker partner for review.', icon: Route },
  { title: 'The broker confirms execution', copy: 'The broker handles execution, settlement, and custody; Revridge reflects the confirmed status.', icon: Check },
];

export default function HowExecutionWorks() {
  return (
    <section className="bg-[#F5F7F6] py-20 md:py-28" aria-labelledby="execution-title">
      <div className="site-container">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 id="execution-title" className="display-lg mx-auto max-w-[14ch]">What happens when you invest.</h2>
          <p className="lead-copy mx-auto mt-6 max-w-[48ch] text-[color:var(--muted-ink)]">Revridge supports the journey. Licensed broker partners remain responsible for the regulated execution and custody work assigned to them.</p>
        </Reveal>
        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, copy, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <li className="flex h-full flex-col rounded-[28px] bg-white p-7">
                <span className="lime-marker grid h-12 w-12 place-items-center rounded-full"><Icon size={20} /></span>
                <span className="tabular mt-8 text-sm font-[700] text-[color:var(--meta-ink)]">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-1 text-xl font-[680] tracking-[-.025em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--meta-ink)]">{copy}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
