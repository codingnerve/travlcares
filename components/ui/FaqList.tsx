import { ChevronDown } from "lucide-react";
import type { Faq } from "@/content/faqs";

/** Accessible, JavaScript-free accordion built on native <details>. */
export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex cursor-pointer items-start justify-between gap-6 py-5 text-left font-display text-lg font-bold text-navy-900 hover:text-brand-600">
            <span>{f.q}</span>
            <ChevronDown
              className="chev mt-1 size-5 shrink-0 text-brand-600 transition-transform"
              aria-hidden="true"
            />
          </summary>
          <p className="max-w-3xl pb-6 pr-10 text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
