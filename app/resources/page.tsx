import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FinalCta } from "@/components/home/FinalCta";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { articles } from "@/content/articles";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Insurance Resources and Guides",
  description:
    "Plain-language guides to deductibles, premiums, coverage limits, exclusions, and the questions to ask before choosing an insurance policy.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <section className="on-dark bg-navy-900 text-white">
        <div className="container-page py-14 lg:py-20">
          <Breadcrumbs tone="dark" items={[{ label: "Resources", href: "/resources" }]} />
          <h1 className="h-display mt-8 max-w-3xl !text-white !text-[clamp(2.25rem,1.5rem+3.4vw,3.75rem)]">
            Insurance, explained plainly.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-200">
            General educational guides to help you understand common insurance
            ideas. They are not a substitute for reading your policy or talking
            with an agent.
          </p>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page">
          <ul className="border-t border-navy-900">
            {articles.map((a, i) => (
              <li key={a.slug} className="border-b border-line">
                <Link
                  href={`/resources/${a.slug}`}
                  className="group grid items-center gap-6 py-8 md:grid-cols-12"
                >
                  <div className="flex items-center gap-4 md:col-span-8">
                    <span className="font-display text-sm font-extrabold tabular-nums text-aqua-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="relative size-20 shrink-0 overflow-hidden rounded-xl shadow-xs ring-1 ring-line">
                      <Image
                        src={a.image}
                        alt={a.title}
                        fill
                        sizes="80px"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <span className="block font-display text-2xl font-extrabold text-navy-900 group-hover:text-brand-600">
                        {a.title}
                      </span>
                      <span className="mt-2 block text-muted">{a.description}</span>
                    </div>
                  </div>
                  <span className="flex items-center gap-3 text-sm font-semibold text-aqua-700 md:col-span-4 md:justify-end">
                    {a.readingMinutes} min read
                    <ArrowUpRight
                      className="size-5 text-brand-600 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta
        heading="Prefer to talk it through?"
        copy="Call Travlcares to ask your questions and explore your options with an agent."
        location="resources-final"
      />
    </>
  );
}
