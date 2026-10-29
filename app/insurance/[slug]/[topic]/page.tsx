import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FinalCta } from "@/components/home/FinalCta";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CallButton } from "@/components/ui/CallButton";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  productDetails,
  productSubpages,
  type ProductTopic,
} from "@/content/product-details";
import { getAllProductSlugs, getPublishedProduct } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllProductSlugs().flatMap((slug) =>
    productSubpages.map((s) => ({ slug, topic: s.topic })),
  );
}

function resolve(slug: string, topic: string) {
  const product = getPublishedProduct(slug);
  const subpage = productSubpages.find((s) => s.topic === topic);
  if (!product || !subpage) return null;
  return { product, subpage };
}

export async function generateMetadata({
  params,
}: PageProps<"/insurance/[slug]/[topic]">): Promise<Metadata> {
  const { slug, topic } = await params;
  const found = resolve(slug, topic);
  if (!found) return {};
  const { product, subpage } = found;
  const name = product.name.toLowerCase();
  const isTypes = subpage.topic === "coverage-types";
  return pageMetadata({
    title: `${product.name}: ${subpage.label}`,
    description: isTypes
      ? `A plain-language look at the main parts of ${name} and what to ask about each, then call Travlcares to talk it through with an agent.`
      : `Plain-language definitions of common ${name} terms, so you can follow the conversation when you speak with an agent.`,
    path: `/insurance/${product.slug}/${subpage.topic}`,
  });
}

export default async function ProductSubpage({
  params,
}: PageProps<"/insurance/[slug]/[topic]">) {
  const { slug, topic } = await params;
  const found = resolve(slug, topic);
  if (!found) notFound();
  const { product, subpage } = found;

  const detail = productDetails[product.slug];
  const shortName = product.name.replace(" Insurance", "").toLowerCase();
  const isTypes = (subpage.topic satisfies ProductTopic) === "coverage-types";
  const other = productSubpages.find((s) => s.topic !== subpage.topic);
  const base = `/insurance/${product.slug}`;

  return (
    <>
      <section className="on-dark bg-navy-900 text-white">
        <div className="container-page py-12 lg:py-16">
          <Breadcrumbs
            tone="dark"
            items={[
              { label: "Insurance Products", href: "/insurance" },
              { label: product.name, href: base },
              { label: subpage.label, href: `${base}/${subpage.topic}` },
            ]}
          />
          <p className="eyebrow mt-8 !text-sun-300">{product.name}</p>
          <h1 className="mt-3 max-w-3xl font-display text-[clamp(2rem,1.4rem+2.8vw,3.25rem)] font-extrabold leading-[1.08] tracking-tight !text-white">
            {isTypes
              ? `Types of ${shortName} coverage, in plain language`
              : `${product.name} terms, explained`}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-200">
            {isTypes ? detail.coverageIntro : detail.glossaryIntro}
          </p>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            {isTypes ? (
              <ol className="border-t border-navy-900">
                {detail.coverageTypes.map((c, i) => (
                  <li key={c.name} className="border-b border-line py-9">
                    <span className="font-display text-sm font-extrabold tabular-nums text-aqua-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="mt-2 font-display text-2xl font-extrabold text-navy-900">
                      {c.name}
                    </h2>
                    <div className="mt-5 grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-navy-700">
                          What it generally does
                        </h3>
                        <p className="mt-2">{c.body}</p>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-navy-700">
                          Worth asking
                        </h3>
                        <p className="mt-2">{c.consider}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            ) : (
              <dl className="border-t border-navy-900">
                {detail.glossary.map((g) => (
                  <div
                    key={g.term}
                    id={g.term.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                    className="grid gap-2 border-b border-line py-7 md:grid-cols-12 md:gap-8"
                  >
                    <dt className="font-display text-xl font-extrabold text-navy-900 md:col-span-4">
                      {g.term}
                    </dt>
                    <dd className="md:col-span-8">{g.definition}</dd>
                  </div>
                ))}
              </dl>
            )}

            <p className="mt-8 text-sm text-muted">
              This page is general and educational. What any policy actually
              covers, and how these terms apply, depends on its specific wording
              and the insurer. Availability may vary by state.
            </p>
          </div>

          <aside className="space-y-8 lg:col-span-4">
            <div className="rounded-xl bg-paper p-6 ring-1 ring-line lg:sticky lg:top-28">
              <div className="relative mb-5 aspect-[16/9] w-full overflow-hidden rounded-lg shadow-xs ring-1 ring-line">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
              <h2 className="font-display text-xl font-extrabold text-navy-900">
                Questions about {shortName} coverage?
              </h2>
              <p className="mt-2 text-muted">
                An agent can walk through how this applies to your situation.
              </p>
              <CallButton
                location={`product-${product.slug}-${subpage.topic}-aside`}
                label="Call an Agent"
                showNumber
                className="mt-5 w-full"
              />
              <ul className="mt-6 space-y-1 border-t border-line pt-5 text-[0.9375rem] font-semibold">
                <li>
                  <Link
                    href={base}
                    className="group flex items-center gap-2 py-2 text-navy-900 hover:text-brand-600"
                  >
                    <ArrowLeft
                      className="size-4 transition-transform group-hover:-translate-x-1"
                      aria-hidden="true"
                    />
                    {product.name} overview
                  </Link>
                </li>
                {other && (
                  <li>
                    <Link
                      href={`${base}/${other.topic}`}
                      className="group flex items-center justify-between gap-2 py-2 text-navy-900 hover:text-brand-600"
                    >
                      {other.label}
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-page">
          <SectionHeading
            title={
              isTypes
                ? "Questions to bring to the call"
                : "Want to see it in context?"
            }
          >
            <p>
              {isTypes
                ? "These come from the overview page. Pick the ones that matter most to you."
                : "The overview page walks through who may consider this coverage and what to ask."}
            </p>
          </SectionHeading>
          {isTypes ? (
            <ul className="mt-8 max-w-3xl divide-y divide-line border-y border-line">
              {product.questionsForAgent.slice(0, 4).map((q) => (
                <li key={q} className="py-4 text-lg">
                  {q}
                </li>
              ))}
            </ul>
          ) : (
            <Link
              href={base}
              className="group mt-8 inline-flex min-h-11 items-center gap-2 font-bold text-brand-600 hover:text-brand-700"
            >
              Back to {product.name.toLowerCase()} overview
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          )}
        </div>
      </section>

      <FinalCta
        heading={`Talk through ${shortName} coverage with an agent`}
        copy="Call Travlcares to ask your questions and explore your options."
        location={`product-${product.slug}-${subpage.topic}-final`}
      />
    </>
  );
}
