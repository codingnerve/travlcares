import { CallButton } from "@/components/ui/CallButton";
import { phone } from "@/config/site";

export function FinalCta({
  heading = "Have questions about your coverage?",
  copy = "Speak with Travlcares to discuss your insurance needs and explore your options.",
  label = "Talk to an Agent",
  location = "final-cta",
}: {
  heading?: string;
  copy?: string;
  label?: string;
  location?: string;
}) {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="on-dark relative overflow-hidden bg-brand-700 text-white"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 600 600"
        className="pointer-events-none absolute -right-24 -top-24 size-[34rem] opacity-[0.12]"
      >
        <g fill="none" stroke="#fff" strokeWidth="2">
          <circle cx="300" cy="300" r="280" />
          <circle cx="300" cy="300" r="220" />
          <circle cx="300" cy="300" r="160" />
          <circle cx="300" cy="300" r="100" />
        </g>
      </svg>
      <div className="container-page relative section-y">
        <div className="max-w-2xl">
          <h2
            id="final-cta-heading"
            className="h-section !text-white"
          >
            {heading}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/85">{copy}</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CallButton location={location} label={label} size="lg" />
            <a
              href={phone.href}
              data-cta="call"
              data-cta-location={`${location}-number`}
              className="font-display text-2xl font-extrabold text-white underline decoration-sun-400 decoration-2 underline-offset-4"
            >
              {phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
