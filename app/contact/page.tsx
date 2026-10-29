import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CallButton } from "@/components/ui/CallButton";
import { Placeholder } from "@/components/ui/Placeholder";
import { business, phone } from "@/config/site";
import { generalFaqs } from "@/content/faqs";
import { FaqList } from "@/components/ui/FaqList";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact Travlcares",
  description:
    "Call Travlcares to speak with an insurance agent about your coverage questions and options.",
  path: "/contact",
});

const prepare = [
  "What you want to protect, such as a vehicle, home, trip, or business",
  "Any current policy and its renewal date",
  "Requirements from a lender, landlord, or contract, if any",
  "The questions you would most like answered",
];

export default function ContactPage() {
  return (
    <>
      <section className="on-dark bg-navy-900 text-white">
        <div className="container-page py-14 lg:py-20">
          <Breadcrumbs tone="dark" items={[{ label: "Contact", href: "/contact" }]} />
          <div className="mt-8 grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h1 className="h-display !text-white !text-[clamp(2.25rem,1.5rem+3.4vw,3.75rem)]">
                The best way to reach us is by phone.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200">
                Call to speak with an agent about your coverage questions. We
                will listen, explain your options, and outline the next steps.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white p-7 text-ink">
                <p className="eyebrow">Call Travlcares</p>
                <a
                  href={phone.href}
                  data-cta="call"
                  data-cta-location="contact-number"
                  className="mt-2 block font-display text-4xl font-extrabold tracking-tight text-navy-900 hover:text-brand-600 sm:text-5xl"
                >
                  {phone.display}
                </a>
                <CallButton
                  location="contact-hero"
                  label="Call Travlcares"
                  size="lg"
                  className="mt-6 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <h2 className="h-section">How we can help</h2>
            <div className="prose-copy mt-6 text-lg">
              <p>
                An agent can talk through the types of coverage you are
                considering, explain unfamiliar terms, and help you understand
                what to ask before choosing a policy.
              </p>
              <p>
                Calling to ask questions is not an application, and coverage does not
                begin because you called. Please avoid sharing sensitive
                details, such as Social Security or payment card numbers, unless
                you have confirmed how they will be handled.
              </p>
            </div>

            <h3 className="mt-10 font-display text-xl font-bold text-navy-900">
              It helps to have ready
            </h3>
            <ul className="mt-4 space-y-2.5 text-ink">
              {prepare.map((p) => (
                <li key={p} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 size-1.5 shrink-0 rounded-full bg-aqua-600"
                  />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mb-6 overflow-hidden rounded-2xl shadow-card ring-1 ring-line">
              <Image
                src="/images/contact.jpg"
                alt="Travlcares customer care team ready to assist with your insurance questions"
                width={800}
                height={450}
                className="aspect-[16/9] w-full object-cover"
              />
            </div>
            <dl className="divide-y divide-line border-y border-line">
              <div className="flex gap-4 py-6">
                <Phone className="mt-1 size-5 shrink-0 text-brand-600" aria-hidden="true" />
                <div>
                  <dt className="font-display font-bold text-navy-900">Phone</dt>
                  <dd className="mt-1">
                    <a
                      href={phone.href}
                      data-cta="call"
                      data-cta-location="contact-details"
                      className="font-semibold text-brand-600 underline underline-offset-4"
                    >
                      {phone.display}
                    </a>
                  </dd>
                </div>
              </div>
              <div className="flex gap-4 py-6">
                <Clock className="mt-1 size-5 shrink-0 text-brand-600" aria-hidden="true" />
                <div>
                  <dt className="font-display font-bold text-navy-900">Hours</dt>
                  <dd className="mt-1">
                    {business.hours ?? <Placeholder>Business hours to be confirmed</Placeholder>}
                  </dd>
                </div>
              </div>
              <div className="flex gap-4 py-6">
                <MapPin className="mt-1 size-5 shrink-0 text-brand-600" aria-hidden="true" />
                <div>
                  <dt className="font-display font-bold text-navy-900">Office</dt>
                  <dd className="mt-1">
                    {business.address ?? <Placeholder>Address to be confirmed</Placeholder>}
                  </dd>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section-y bg-paper">
        <div className="container-page">
          <h2 className="h-section max-w-xl">Before you call</h2>
          <div className="mt-10 max-w-4xl">
            <FaqList faqs={generalFaqs.slice(0, 3)} />
          </div>
          <div className="mt-10">
            <CallButton location="contact-bottom" label="Call Travlcares" size="lg" showNumber />
          </div>
        </div>
      </section>
    </>
  );
}
