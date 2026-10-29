import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { CallButton } from "@/components/ui/CallButton";
import { Placeholder } from "@/components/ui/Placeholder";
import { brand, business, legalNav, mainNav, phone } from "@/config/site";
import { getPublishedProducts } from "@/lib/products";

export function Footer() {
  const products = getPublishedProducts();

  return (
    <footer className="on-dark bg-navy-950 text-navy-200 pb-24 md:pb-0">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Logo tone="dark" />
          <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed">
            {brand.description} Call to talk through your coverage options with
            an agent.
          </p>
          <div className="mt-6">
            <CallButton location="footer" label="Speak With an Agent" />
          </div>
          <p className="mt-4 text-sm">
            <a
              href={phone.href}
              data-cta="call"
              data-cta-location="footer-number"
              className="font-display text-2xl font-extrabold text-white hover:text-sun-300"
            >
              {phone.display}
            </a>
          </p>
        </div>

        <nav aria-label="Insurance products" className="md:col-span-3">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-white">
            Insurance
          </h2>
          <ul className="mt-5 space-y-3 text-[0.9375rem]">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/insurance/${p.slug}`}
                  className="hover:text-white hover:underline underline-offset-4"
                >
                  {p.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/insurance"
                className="font-semibold text-sun-300 hover:underline underline-offset-4"
              >
                All products
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Company" className="md:col-span-4">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-white">
            Company
          </h2>
          <ul className="mt-5 space-y-3 text-[0.9375rem]">
            {mainNav
              .filter((n) => n.href !== "/insurance")
              .map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="hover:text-white hover:underline underline-offset-4"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
          </ul>
          <div className="mt-8 space-y-1.5 text-sm">
            <p>
              <span className="font-semibold text-white">Hours: </span>
              {business.hours ?? <Placeholder>Business hours</Placeholder>}
            </p>
            {business.address && (
              <p>
                <span className="font-semibold text-white">Address: </span>
                {business.address}
              </p>
            )}
          </div>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page space-y-5 py-8 text-[0.8125rem] leading-relaxed">
          <p>
            <strong className="text-white">Important information.</strong>{" "}
            {brand.name} provides general information about insurance for
            educational purposes. Nothing on this website is an offer of
            coverage, a quote, or legal, tax, or financial advice. Coverage,
            eligibility, and pricing depend on the terms of the specific policy
            and the insurer&rsquo;s underwriting, and product availability may
            vary by state.
          </p>
          <p>
            <span className="font-semibold text-white">Business: </span>
            {business.legalName ?? <Placeholder>Legal business name</Placeholder>}
            {" · "}
            <span className="font-semibold text-white">Licensing: </span>
            {business.licensing ?? (
              <Placeholder>Agency license details</Placeholder>
            )}
            {" · "}
            <span className="font-semibold text-white">Licensed in: </span>
            {business.licensedStates ?? <Placeholder>Licensed states</Placeholder>}
          </p>
          <div className="flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p>
              &copy; {brand.copyrightYear} {brand.name}. All rights reserved.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalNav.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-white hover:underline underline-offset-4"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
