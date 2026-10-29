import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { articles } from "@/content/articles";

/** Illustrative deductible split. Numbers are an example, not a quote. */
function DeductibleIllustration() {
  return (
    <figure className="border border-line bg-paper p-6 sm:p-8">
      <figcaption className="eyebrow">A simple example</figcaption>
      <p className="mt-3 font-display text-xl font-bold text-navy-900">
        A $2,000 covered repair with a $500 deductible
      </p>
      <div
        className="mt-6 flex h-12 overflow-hidden rounded-sm text-sm font-bold"
        role="img"
        aria-label="A bar showing $500 paid by you and $1,500 considered by the insurer"
      >
        <div className="flex w-1/4 items-center justify-center bg-sun-400 text-navy-900">
          $500
        </div>
        <div className="flex flex-1 items-center justify-center bg-navy-900 text-white">
          $1,500
        </div>
      </div>
      <div className="mt-3 flex text-sm">
        <p className="w-1/4 pr-2 font-semibold text-navy-900">You pay first</p>
        <p className="flex-1 text-muted">Insurer may pay the rest</p>
      </div>
      <p className="mt-6 text-xs text-muted">
        Illustration only. How any claim is handled depends on your policy&rsquo;s
        terms, limits, and conditions.
      </p>
    </figure>
  );
}

export function CoverageEducation() {
  return (
    <section aria-labelledby="learn-heading" className="section-y bg-white">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading id="learn-heading" eyebrow="Coverage education" title="Learn the terms before you need them.">
            <p>
              A few plain-language guides to the ideas that come up most when
              people compare insurance.
            </p>
          </SectionHeading>
          <div className="mt-10">
            <DeductibleIllustration />
          </div>
        </div>

        <ul className="divide-y divide-line border-y border-line lg:col-span-7 lg:self-start">
          {articles.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/resources/${a.slug}`}
                className="group flex items-start gap-5 py-6"
              >
                <div className="relative size-20 shrink-0 overflow-hidden rounded-lg shadow-sm ring-1 ring-line">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="block font-display text-xl font-bold text-navy-900 group-hover:text-brand-600">
                    {a.short}
                  </span>
                  <span className="mt-1 block max-w-lg text-sm text-muted">
                    {a.description}
                  </span>
                  <span className="mt-2 block text-xs font-semibold text-aqua-700">
                    {a.readingMinutes} min read
                  </span>
                </div>
                <ArrowUpRight
                  className="mt-1 size-5 shrink-0 text-brand-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
