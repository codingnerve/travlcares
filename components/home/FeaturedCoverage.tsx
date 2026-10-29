import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CallButton } from "@/components/ui/CallButton";
import { ProductIcon } from "@/components/ui/ProductIcon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ProductContent } from "@/content/products";

export function FeaturedCoverage({ products }: { products: ProductContent[] }) {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="section-y bg-paper"
    >
      <div className="container-page">
        <SectionHeading
          id="products-heading"
          eyebrow="Coverage, explained"
          title="Insurance products you can talk through with an agent"
        >
          <p>
            Each category below links to a short guide. These are general
            descriptions; what a policy actually covers depends on its terms.
          </p>
        </SectionHeading>

        <ol className="mt-14 border-t border-navy-900">
          {products.map((p, i) => (
            <li
              key={p.slug}
              className="grid gap-8 border-b border-line py-10 lg:grid-cols-12 lg:gap-10 lg:py-12"
            >
              <div className="lg:col-span-5">
                <div className="relative mb-6 aspect-[16/9] w-full max-w-md overflow-hidden rounded-xl shadow-card ring-1 ring-line">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1024px) 440px, 100vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-2 rounded-full bg-navy-900/85 px-3 py-1 text-xs font-semibold text-white shadow backdrop-blur-sm">
                    <ProductIcon name={p.icon} className="size-3.5 text-sun-300" />
                    <span>{p.name}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-display text-sm font-extrabold tabular-nums text-aqua-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-3xl font-extrabold tracking-tight text-navy-900">
                    <Link
                      href={`/insurance/${p.slug}`}
                      className="hover:text-brand-600"
                    >
                      {p.name}
                    </Link>
                  </h3>
                </div>
                <p className="mt-3 max-w-md text-muted">{p.summary}</p>
              </div>

              <dl className="space-y-5 lg:col-span-5">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-navy-700">
                    Generally helps protect
                  </dt>
                  <dd className="mt-1.5">{p.helpsProtect[0]}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-navy-700">
                    May be useful for
                  </dt>
                  <dd className="mt-1.5">{p.whoMayConsider[0]}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-widest text-navy-700">
                    Ask an agent
                  </dt>
                  <dd className="mt-1.5">{p.questionsForAgent[0]}</dd>
                </div>
              </dl>

              <div className="flex flex-col items-start gap-3 lg:col-span-2 lg:items-stretch">
                <CallButton
                  location={`featured-${p.slug}`}
                  label="Call Now"
                  className="lg:w-full"
                />
                <Link
                  href={`/insurance/${p.slug}`}
                  className="group inline-flex min-h-11 items-center gap-1.5 font-bold text-brand-600 hover:text-brand-700"
                >
                  Read the guide
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 max-w-3xl text-sm text-muted">
          Descriptions are general and educational. Coverage, eligibility,
          limits, exclusions, and pricing are determined by the specific policy
          and the insurer, and availability may vary by state.
        </p>
      </div>
    </section>
  );
}
