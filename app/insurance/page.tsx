import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FinalCta } from "@/components/home/FinalCta";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CallButton } from "@/components/ui/CallButton";
import { getPublishedProducts } from "@/lib/products";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Insurance Products",
  description:
    "Browse the insurance coverage categories Travlcares can talk with you about, and call to speak with an agent about your options.",
  path: "/insurance",
});

export default function InsuranceIndexPage() {
  const products = getPublishedProducts();

  return (
    <>
      <section className="on-dark bg-navy-900 text-white">
        <div className="container-page py-14 lg:py-20">
          <Breadcrumbs
            tone="dark"
            items={[{ label: "Insurance Products", href: "/insurance" }]}
          />
          <h1 className="h-display mt-8 max-w-3xl !text-white !text-[clamp(2.25rem,1.5rem+3.4vw,3.75rem)]">
            Insurance products
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-200">
            Choose a category to learn how the coverage generally works, then
            call Travlcares to talk it through with an agent. Availability may
            vary by state.
          </p>
          <div className="mt-8">
            <CallButton location="products-index-hero" size="lg" />
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page">
          {products.length === 0 ? (
            <p className="max-w-xl text-lg text-muted">
              Call Travlcares to ask which insurance products are available.
            </p>
          ) : (
            <ul className="border-t border-navy-900">
              {products.map((p) => (
                <li
                  key={p.slug}
                  className="grid items-center gap-6 border-b border-line py-8 md:grid-cols-12"
                >
                  <div className="flex items-center gap-4 md:col-span-4">
                    <div className="relative size-16 shrink-0 overflow-hidden rounded-xl shadow-sm ring-1 ring-line">
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-extrabold text-navy-900">
                        <Link
                          href={`/insurance/${p.slug}`}
                          className="hover:text-brand-600"
                        >
                          {p.name}
                        </Link>
                      </h2>
                    </div>
                  </div>
                  <p className="text-muted md:col-span-5">{p.summary}</p>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-2 md:col-span-3 md:justify-end">
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
            </ul>
          )}
        </div>
      </section>

      <FinalCta
        heading="Not sure where to start?"
        copy="Call Travlcares and talk through what you want to protect. An agent can point you to the right next step."
        label="Get Help Choosing Coverage"
        location="products-index-final"
      />
    </>
  );
}
