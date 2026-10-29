import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { FinalCta } from "@/components/home/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CallButton } from "@/components/ui/CallButton";
import { SITE_URL, brand } from "@/config/site";
import { articles, getArticle } from "@/content/articles";
import { getPublishedProduct } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/resources/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return pageMetadata({
    title: article.title,
    description: article.description,
    path: `/resources/${article.slug}`,
  });
}

export default async function ArticlePage({
  params,
}: PageProps<"/resources/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const products = article.relatedProducts
    .map((s) => getPublishedProduct(s))
    .filter((p) => p !== undefined);
  const more = article.relatedArticles
    .map((s) => getArticle(s))
    .filter((a) => a !== undefined);

  return (
    <>
      <section className="on-dark bg-navy-900 text-white">
        <div className="container-page py-12 lg:py-16">
          <Breadcrumbs
            tone="dark"
            items={[
              { label: "Resources", href: "/resources" },
              { label: article.short, href: `/resources/${article.slug}` },
            ]}
          />
          <h1 className="mt-8 max-w-3xl font-display text-[clamp(2rem,1.4rem+2.8vw,3.25rem)] font-extrabold leading-[1.08] tracking-tight !text-white">
            {article.title}
          </h1>
          <p className="mt-5 text-sm font-semibold text-sun-300">
            {article.readingMinutes} min read · General educational information
          </p>
        </div>
      </section>

      <article className="section-y bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="prose-copy text-lg lg:col-span-8">
            <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-2xl shadow-card ring-1 ring-line">
              <Image
                src={article.image}
                alt={article.title}
                fill
                priority
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover"
              />
            </div>
            <p className="text-xl leading-relaxed text-navy-900">{article.intro}</p>
            {article.sections.map((s) => (
              <section key={s.heading}>
                <h2>{s.heading}</h2>
                {s.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {s.list && (
                  <ul>
                    {s.list.map((li) => (
                      <li key={li}>{li}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
            <aside className="!mt-10 border-l-4 border-sun-400 bg-sun-100 p-6">
              <p className="font-display text-lg font-bold text-navy-900">
                The takeaway
              </p>
              <p className="mt-2 text-base text-navy-900">{article.takeaway}</p>
            </aside>
            <p className="text-sm text-muted">
              This guide is general information, not insurance, legal, tax, or
              financial advice. Your policy&rsquo;s actual terms control what is
              covered.
            </p>
          </div>

          <aside className="space-y-10 lg:col-span-4">
            <div className="bg-paper p-6 ring-1 ring-line">
              <h2 className="font-display text-xl font-extrabold text-navy-900">
                Questions about your own coverage?
              </h2>
              <p className="mt-2 text-muted">
                Talk it through with a {brand.name} agent.
              </p>
              <CallButton
                location={`article-${article.slug}-aside`}
                label="Call an Agent"
                showNumber
                className="mt-5 w-full"
              />
            </div>

            {products.length > 0 && (
              <div>
                <h2 className="font-display text-lg font-extrabold text-navy-900">
                  Related coverage
                </h2>
                <ul className="mt-3 divide-y divide-line border-y border-line">
                  {products.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/insurance/${p.slug}`}
                        className="group flex items-center justify-between gap-3 py-3 font-semibold text-navy-900 hover:text-brand-600"
                      >
                        <span className="flex items-center gap-3">
                          <span className="relative size-8 shrink-0 overflow-hidden rounded-md shadow-xs ring-1 ring-line">
                            <Image
                              src={p.image}
                              alt={p.name}
                              fill
                              sizes="32px"
                              className="object-cover"
                            />
                          </span>
                          {p.name}
                        </span>
                        <ArrowRight
                          className="size-4 shrink-0 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h2 className="font-display text-lg font-extrabold text-navy-900">
                More guides
              </h2>
              <ul className="mt-3 divide-y divide-line border-y border-line">
                {more.map((a) => (
                  <li key={a.slug}>
                    <Link
                      href={`/resources/${a.slug}`}
                      className="group flex items-center justify-between gap-3 py-3 font-semibold text-navy-900 hover:text-brand-600"
                    >
                      <span className="flex items-center gap-3">
                        <span className="relative size-8 shrink-0 overflow-hidden rounded-md shadow-xs ring-1 ring-line">
                          <Image
                            src={a.image}
                            alt={a.short}
                            fill
                            sizes="32px"
                            className="object-cover"
                          />
                        </span>
                        {a.short}
                      </span>
                      <ArrowRight
                        className="size-4 shrink-0 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.description,
            mainEntityOfPage: `${SITE_URL}/resources/${article.slug}`,
            publisher: { "@type": "Organization", name: brand.name, url: SITE_URL },
          }}
        />
      </article>

      <FinalCta
        heading="Want to talk this through?"
        copy="Call Travlcares to ask questions and explore your coverage options with an agent."
        location={`article-${article.slug}-final`}
      />
    </>
  );
}
