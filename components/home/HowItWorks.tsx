import { CallButton } from "@/components/ui/CallButton";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Explore Your Options",
    body: "Learn about the types of coverage that may fit your needs.",
  },
  {
    title: "Talk to an Agent",
    body: "Call Travlcares to discuss your situation and questions.",
  },
  {
    title: "Understand Your Next Steps",
    body: "Receive guidance about available options and the appropriate next steps.",
  },
];

export function HowItWorks() {
  return (
    <section
      aria-labelledby="how-heading"
      className="on-dark section-y bg-navy-900 text-white"
    >
      <div className="container-page">
        <SectionHeading id="how-heading" eyebrow="How it works" title="Three simple steps." tone="dark">
        </SectionHeading>

        <ol className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden border-t border-dashed border-white/25 md:block"
          />
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <span className="relative flex size-12 items-center justify-center rounded-full bg-sun-400 font-display text-xl font-extrabold text-navy-900">
                {i + 1}
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold !text-white">
                {s.title}
              </h3>
              <p className="mt-3 max-w-xs text-navy-200">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-col gap-5 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm text-navy-200">
            Calling is a conversation, not an application. A policy is not
            issued and coverage does not begin simply because you called.
          </p>
          <CallButton location="how-it-works" label="Talk to an Agent" />
        </div>
      </div>
    </section>
  );
}
