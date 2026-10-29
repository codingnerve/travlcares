import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MessageCircleQuestion } from "lucide-react";
import { FinalCta } from "@/components/home/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CallButton } from "@/components/ui/CallButton";
import { FaqList } from "@/components/ui/FaqList";
import { ProductIcon } from "@/components/ui/ProductIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { articles } from "@/content/articles";
import { productSubpages } from "@/content/product-details";
import { getAllProductSlugs, getPublishedProduct } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

// Cache Components needs at least one param. Unconfirmed products are
// rejected with notFound() below, so they are never published.
export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/insurance/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const product = getPublishedProduct(slug);
  if (!product) return {};
  return pageMetadata({
    title: product.metaTitle,
    description: product.metaDescription,
    path: `/insurance/${product.slug}`,
  });
}

export default async function ProductPage({
  params,
}: PageProps<"/insurance/[slug]">) {
  const { slug } = await params;
  const product = getPublishedProduct(slug);
  if (!product) notFound();

  const shortName = product.name.replace(" Insurance", "").toLowerCase();
  const related = product.relatedProducts
    .map((s) => getPublishedProduct(s))
    .filter((p) => p !== undefined);
  const relatedArticles = product.relatedArticles
    .map((s) => articles.find((a) => a.slug === s))
    .filter((a) => a !== undefined);

  return (
    <>
      {/* 1. Hero */}
      <section className="on-dark relative overflow-hidden bg-navy-900 text-white">
        <div className="container-page grid items-center gap-10 py-12 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-7">
            <Breadcrumbs
              tone="dark"
              items={[
                { label: "Insurance Products", href: "/insurance" },
                { label: product.name, href: `/insurance/${product.slug}` },
              ]}
            />
            <p className="eyebrow mt-8 !text-sun-300">{product.name}</p>
            <h1 className="h-display mt-4 !text-white !text-[clamp(2.25rem,1.5rem+3.4vw,3.75rem)]">
              {product.heroHeading}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200">
              {product.heroCopy}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CallButton
                location={`product-${product.slug}-hero`}
                label={`Call About ${product.name.replace(" Insurance", "")} Insurance`}
                size="lg"
              />
              <a
                href="#questions"
                className="inline-flex min-h-14 items-center justify-center rounded-md border-2 border-white/60 px-7 py-3.5 text-lg font-bold text-white hover:bg-white hover:text-navy-900"
              >
                Questions to Ask
              </a>
            </div>
          </div>
          <div className="hidden lg:col-span-5 lg:block">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/15">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 480px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/25 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-sun-300">
                    Coverage Guide
                  </span>
                  <p className="font-display text-xl font-bold text-white">
                    {product.name}
                  </p>
                </div>
                <div className="flex size-12 items-center justify-center rounded-full bg-sun-400 text-navy-900 shadow-md">
                  <ProductIcon name={product.icon} className="size-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview */}
      <section className="section-y bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">About this coverage</p>
            <h2 className="h-section mt-3">
              How {shortName} coverage generally works
            </h2>
            <div className="prose-copy mt-6 text-lg">
              {product.overview.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-5">
            <div className="bg-paper p-7 ring-1 ring-line lg:sticky lg:top-28">
              <ProductIcon
                name={product.icon}
                className="size-8 text-brand-600"
              />
              <h2 className="mt-4 font-display text-2xl font-extrabold text-navy-900">
                Talk it through with an agent
              </h2>
              <p className="mt-3 text-muted">
                Bring your questions. An agent can explain how {shortName}{" "}
                coverage generally works and what to consider.
              </p>
              <CallButton
                location={`product-${product.slug}-aside`}
                label="Call an Agent"
                showNumber
                className="mt-6 w-full"
              />
            </div>
          </aside>
        </div>
      </section>

      {/* Deeper pages */}
      <section className="border-y border-line bg-white">
        <div className="container-page py-8">
          <p className="text-xs font-bold uppercase tracking-widest text-navy-700">
            Go deeper on {shortName} insurance
          </p>
          <ul className="mt-3 grid gap-x-10 sm:grid-cols-2">
            {productSubpages.map((s) => (
              <li key={s.topic} className="border-b border-line last:border-b-0 sm:border-b-0">
                <Link
                  href={`/insurance/${product.slug}/${s.topic}`}
                  className="group flex items-center justify-between gap-4 py-3 font-display text-lg font-bold text-navy-900 hover:text-brand-600"
                >
                  {s.label}
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. What it helps protect / who may consider it */}
      <section className="section-y bg-paper">
        <div className="container-page grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-navy-900">
              What it generally helps protect
            </h2>
            <ul className="mt-6 space-y-4">
              {product.helpsProtect.map((t) => (
                <li key={t} className="flex gap-3">
                  <Check
                    className="mt-1 size-5 shrink-0 text-aqua-700"
                    aria-hidden="true"
                  />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Whether a particular event is covered depends entirely on the
              terms of the policy.
            </p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-extrabold text-navy-900">
              Who may want to consider it
            </h2>
            <ul className="mt-6 space-y-4">
              {product.whoMayConsider.map((t) => (
                <li key={t} className="flex gap-3">
                  <Check
                    className="mt-1 size-5 shrink-0 text-brand-600"
                    aria-hidden="true"
                  />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Considerations */}
      <section className="section-y bg-white">
        <div className="container-page">
          <SectionHeading
            eyebrow="Important considerations"
            title={`What to think about with ${shortName} coverage`}
          />
          <ol className="mt-12 grid gap-x-16 border-t border-navy-900 md:grid-cols-2">
            {product.considerations.map((c, i) => (
              <li key={c.title} className="border-b border-line py-8">
                <span className="font-display text-sm font-extrabold tabular-nums text-aqua-700">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl font-bold text-navy-900">
                  {c.title}
                </h3>
                <p className="mt-3 text-muted">{c.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Questions for an agent */}
      <section
        id="questions"
        className="on-dark section-y bg-navy-900 text-white"
      >
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              tone="dark"
              eyebrow="Before you call"
              title="Questions you can ask an agent"
            >
              <p>
                You do not need to know the jargon. These plain-language
                questions are a good place to start.
              </p>
            </SectionHeading>
            <div className="mt-8">
              <CallButton
                location={`product-${product.slug}-questions`}
                label="Get Help Choosing Coverage"
              />
            </div>
          </div>
          <ul className="divide-y divide-white/15 border-y border-white/15 lg:col-span-7">
            {product.questionsForAgent.map((q) => (
              <li key={q} className="flex gap-4 py-5">
                <MessageCircleQuestion
                  className="mt-0.5 size-6 shrink-0 text-sun-400"
                  aria-hidden="true"
                />
                <span className="text-lg">{q}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Policy-terms notice */}
      <section className="bg-sun-100">
        <div className="container-page py-8">
          <p className="max-w-4xl text-[0.9375rem] text-navy-900">
            <strong>General information only.</strong> This page describes{" "}
            {shortName} coverage in general terms. Actual coverage, exclusions,
            limits, eligibility, and pricing depend on the terms of the specific
            policy and the insurer. Always review the full policy before you
            decide. Availability may vary by state.
          </p>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="section-y bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="FAQ"
              title={`${product.name}: common questions`}
            />
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={product.faqs} />
          </div>
        </div>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: product.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }}
        />
      </section>

      {/* 8. Related resources */}
      <section className="section-y bg-paper">
        <div className="container-page grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="font-display text-2xl font-extrabold text-navy-900">
              Related guides
            </h2>
            <ul className="mt-6 divide-y divide-line border-y border-line">
              {relatedArticles.map((a) => (
                <li key={a.slug}>
                  <Link
                    href={`/resources/${a.slug}`}
                    className="group flex items-center justify-between gap-4 py-4 font-semibold text-navy-900 hover:text-brand-600"
                  >
                    {a.short}
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {related.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-extrabold text-navy-900">
                Other coverage to explore
              </h2>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {related.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/insurance/${p.slug}`}
                      className="group flex items-center justify-between gap-4 py-4 font-semibold text-navy-900 hover:text-brand-600"
                    >
                      <span className="flex items-center gap-3">
                        <span className="relative size-10 shrink-0 overflow-hidden rounded-md shadow-xs ring-1 ring-line">
                          <Image
                            src={p.image}
                            alt={p.name}
                            fill
                            sizes="40px"
                            className="object-cover"
                          />
                        </span>
                        {p.name}
                      </span>
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <FinalCta
        heading={`Questions about ${shortName} coverage?`}
        copy="Call Travlcares to talk through your options with an agent."
        location={`product-${product.slug}-final`}
      />
    </>
  );
}
