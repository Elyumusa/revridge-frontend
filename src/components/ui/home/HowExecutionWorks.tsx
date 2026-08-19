import { Check, FileCheck2, Landmark, Route } from 'lucide-react';

const steps = [
  { title: 'Choose a LuSE company', copy: 'Review the available company information and decide what fits your own plan.', icon: Landmark },
  { title: 'Complete onboarding', copy: 'Eligible investors complete the identity and broker requirements before ordering.', icon: FileCheck2 },
  { title: 'Revridge routes the order', copy: 'Your order is sent to an operational licensed broker partner for review.', icon: Route },
  { title: 'The broker confirms execution', copy: 'The broker handles execution, settlement, and custody; Revridge reflects the confirmed status.', icon: Check },
];

export default function HowExecutionWorks() {
  return (
    <section className="site-section border-y border-border bg-[#F5F7F6]" aria-labelledby="execution-title">
      <div className="site-container grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
        <div><h2 id="execution-title" className="section-title">What happens when you invest.</h2><p className="section-copy mt-6">Revridge supports the journey. Licensed broker partners remain responsible for the regulated execution and custody work assigned to them.</p></div>
        <ol className="border-t border-primary/25">
          {steps.map(({ title, copy, icon: Icon }, index) => (
            <li key={title} className="grid gap-4 border-b border-primary/20 py-5 sm:grid-cols-[auto_1fr_auto] sm:items-center">
              <span className="tabular text-sm font-[760] text-primary">{String(index + 1).padStart(2, '0')}</span>
              <div><h3 className="text-lg tracking-[-.02em]">{title}</h3><p className="mt-1 text-sm leading-6 text-[#66706D]">{copy}</p></div>
              <Icon className="hidden text-primary sm:block" size={20} />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
