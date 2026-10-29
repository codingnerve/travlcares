import { CallButton } from "@/components/ui/CallButton";
import { FaqList } from "@/components/ui/FaqList";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd } from "@/components/seo/JsonLd";
import { generalFaqs } from "@/content/faqs";

export function HomeFaq() {
  return (
    <section aria-labelledby="faq-heading" className="section-y bg-paper">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading id="faq-heading" eyebrow="FAQ" title="Common questions">
            <p>Straight answers, without the jargon.</p>
          </SectionHeading>
          <div className="mt-8 hidden lg:block">
            <p className="mb-4 font-semibold text-navy-900">
              Not seeing your question?
            </p>
            <CallButton location="faq-side" label="Get Help Choosing Coverage" />
          </div>
        </div>

        <div className="lg:col-span-8">
          <FaqList faqs={generalFaqs} />
          <div className="mt-8 flex flex-col gap-4 bg-white p-6 ring-1 ring-line sm:flex-row sm:items-center sm:justify-between lg:hidden">
            <p className="font-semibold text-navy-900">
              Still have questions? Talk to a person.
            </p>
            <CallButton location="faq" label="Get Help Choosing Coverage" />
          </div>
        </div>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: generalFaqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />
    </section>
  );
}
