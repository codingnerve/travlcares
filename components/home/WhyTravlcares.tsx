import { SectionHeading } from "@/components/ui/SectionHeading";

const themes = [
  {
    title: "Personal guidance",
    body: "Insurance questions are rarely generic. We aim to start with your situation and work from there.",
  },
  {
    title: "Help understanding your options",
    body: "Deductibles, limits, exclusions: we aim to explain the terms in everyday language.",
  },
  {
    title: "Convenient access to an agent",
    body: "One phone call connects you with a person, without having to work through a maze of forms.",
  },
  {
    title: "Clear explanations",
    body: "We want you to understand what you are considering, including what a policy may not cover.",
  },
  {
    title: "Support while you explore",
    body: "Take the time you need to compare choices and ask follow-up questions.",
  },
];

export function WhyTravlcares() {
  return (
    <section aria-labelledby="why-heading" className="section-y bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading id="why-heading" eyebrow="Why Travlcares" title="Insurance is easier with a person on the line.">
              <p>
                This is how we aim to work with the people who call us. It is
                our approach, not a guarantee of any particular outcome.
              </p>
            </SectionHeading>
          </div>
        </div>

        <ul className="divide-y divide-line border-y border-line lg:col-span-7">
          {themes.map((t, i) => (
            <li key={t.title} className="flex gap-6 py-7">
              <span
                aria-hidden="true"
                className="w-14 shrink-0 font-display text-4xl font-extrabold leading-none text-brand-100"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl font-bold text-navy-900">
                  {t.title}
                </h3>
                <p className="mt-2 text-muted">{t.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
