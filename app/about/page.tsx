import Image from "next/image";
import { FinalCta } from "@/components/home/FinalCta";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Placeholder } from "@/components/ui/Placeholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brand, business, images } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Travlcares",
  description:
    "Travlcares helps people in the United States understand their insurance options and connect with an agent by phone. Learn how we approach it.",
  path: "/about",
});

const principles = [
  {
    title: "Conversation first",
    body: "Insurance questions are easier to answer in conversation than on a form. Our website exists to help you get to a real person.",
  },
  {
    title: "Plain language",
    body: "We aim to explain coverage in everyday terms, including what a policy might not cover.",
  },
  {
    title: "No pressure to decide",
    body: "Exploring your options is not a commitment. Take the time you need.",
  },
  {
    title: "Honest about limits",
    body: "General guidance is not a promise of coverage, approval, or savings. Your policy terms always control.",
  },
];

export default function AboutPage() {
  const photo = images.about;

  return (
    <>
      <section className="on-dark bg-navy-900 text-white">
        <div className="container-page py-14 lg:py-20">
          <Breadcrumbs tone="dark" items={[{ label: "About Us", href: "/about" }]} />
          <h1 className="h-display mt-8 max-w-3xl !text-white !text-[clamp(2.25rem,1.5rem+3.4vw,3.75rem)]">
            Helping you understand your options, one call at a time.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-200">
            {brand.name} is built around a simple idea: insurance decisions
            go better when you can talk them through with a person.
          </p>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="prose-copy text-lg lg:col-span-7">
            <h2>What we do</h2>
            <p>
              {brand.name} is intended to help people in the United States
              learn about insurance and connect with an agent by phone. This
              website explains common types of coverage in plain language so
              you can arrive at a conversation with better questions.
            </p>
            <p>
              When you call, an agent can discuss your situation, explain how
              different kinds of coverage generally work, and outline the
              appropriate next steps. We do not issue policies through this
              website, and nothing here is an offer of coverage.
            </p>
            <h2>What we are still confirming</h2>
            <p>
              The details below are being finalized by the business and will be
              published here once verified. We would rather say nothing than
              say something that is not accurate.
            </p>
            <dl className="not-prose mt-2 divide-y divide-line border-y border-line text-base">
              {[
                ["Legal business name", business.legalName],
                ["Agency licensing", business.licensing],
                ["States where licensed", business.licensedStates],
                ["Office location", business.address],
                ["Business hours", business.hours],
              ].map(([label, value]) => (
                <div key={label} className="grid gap-1 py-4 sm:grid-cols-3">
                  <dt className="font-semibold text-navy-900">{label}</dt>
                  <dd className="sm:col-span-2">
                    {value ?? <Placeholder>To be provided</Placeholder>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-5">
            {photo.src ? (
              <div className="overflow-hidden rounded-2xl shadow-card ring-1 ring-line">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1024px) 480px, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            ) : (
              <div
                aria-hidden="true"
                className="relative flex aspect-[4/5] items-end overflow-hidden bg-brand-100 p-8"
              >
                <svg
                  viewBox="0 0 400 500"
                  className="absolute inset-0 size-full"
                  preserveAspectRatio="xMidYMid slice"
                >
                  <g fill="none" stroke="#fff" strokeWidth="2" strokeOpacity=".8">
                    <circle cx="200" cy="250" r="190" />
                    <circle cx="200" cy="250" r="140" />
                    <circle cx="200" cy="250" r="90" />
                  </g>
                  <circle cx="200" cy="250" r="52" fill="#102A43" />
                  <path
                    d="M178 246a22 22 0 0 1 44 0c-7-5-14-5-22 0-8-5-15-5-22 0Z"
                    fill="#fff"
                  />
                  <path d="M200 246v16c0 6-9 7-11 2" fill="none" stroke="#F4B942" strokeWidth="4" strokeLinecap="round" />
                </svg>
                <p className="relative max-w-[16rem] font-display text-2xl font-extrabold leading-tight text-navy-900">
                  Real conversations about real coverage.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-page">
          <SectionHeading eyebrow="How we approach it" title="Principles we hold ourselves to" />
          <ul className="mt-12 grid gap-x-16 border-t border-navy-900 md:grid-cols-2">
            {principles.map((p, i) => (
              <li key={p.title} className="border-b border-line py-8">
                <span className="font-display text-sm font-extrabold tabular-nums text-aqua-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-navy-900">
                  {p.title}
                </h3>
                <p className="mt-3 text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta
        heading="Ready to talk?"
        copy="Call Travlcares to ask your questions and explore your options with an agent."
        location="about-final"
      />
    </>
  );
}
