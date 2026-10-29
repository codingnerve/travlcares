import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { InsuranceFinder } from "@/components/home/InsuranceFinder";
import { FeaturedCoverage } from "@/components/home/FeaturedCoverage";
import { WhyTravlcares } from "@/components/home/WhyTravlcares";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CoverageEducation } from "@/components/home/CoverageEducation";
import { HomeFaq } from "@/components/home/HomeFaq";
import { FinalCta } from "@/components/home/FinalCta";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { brand, phone, SITE_URL } from "@/config/site";
import { getPublishedProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: { absolute: `${brand.name} | Insurance Guidance — Call an Agent` },
  description:
    "Explore insurance options and call Travlcares to talk with an agent about your coverage questions. Guidance on auto, home, renters, life, travel, business and pet coverage.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: brand.name,
    locale: "en_US",
    title: `${brand.name} | Insurance Guidance — Call an Agent`,
    description:
      "Explore insurance options and call Travlcares to talk with an agent about your coverage questions.",
    url: SITE_URL,
  },
};

export default function HomePage() {
  const products = getPublishedProducts();

  return (
    <>
      <Hero />

      {products.length > 0 && (
        <section aria-labelledby="finder-heading" className="section-y bg-white">
          <div className="container-page">
            <SectionHeading
              id="finder-heading"
              eyebrow="Find your starting point"
              title="What would you like to protect?"
            >
              <p>
                Choose a category to see how it generally works and how to talk
                with an agent about it.
              </p>
            </SectionHeading>
            <InsuranceFinder
              items={products.map((p) => ({
                slug: p.slug,
                name: p.name,
                icon: p.icon,
                image: p.image,
                protectLabel: p.protectLabel,
                summary: p.summary,
                ask: p.questionsForAgent[0],
              }))}
            />
          </div>
        </section>
      )}

      {products.length > 0 && <FeaturedCoverage products={products} />}
      <WhyTravlcares />
      <HowItWorks />
      <CoverageEducation />
      <HomeFaq />
      <FinalCta />

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: brand.name,
          url: SITE_URL,
          logo: `${SITE_URL}/icon.svg`,
          description: brand.description,
          ...(phone.isPlaceholder
            ? {}
            : {
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: phone.e164,
                  contactType: "customer service",
                  areaServed: "US",
                  availableLanguage: "English",
                },
              }),
        }}
      />
    </>
  );
}
