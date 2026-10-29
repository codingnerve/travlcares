import Link from "next/link";
import { ChevronDown, Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { CallButton } from "@/components/ui/CallButton";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { mainNav, phone } from "@/config/site";
import { getPublishedProducts } from "@/lib/products";

export function Header() {
  const products = getPublishedProducts().map((p) => ({
    name: p.name,
    href: `/insurance/${p.slug}`,
  }));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      <div className="container-page flex h-16 items-center justify-between gap-4 lg:h-20">
        <Logo />

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) => (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 rounded-md px-3.5 py-2 text-[0.9375rem] font-semibold text-navy-900 transition-colors hover:bg-brand-50 hover:text-brand-700"
                >
                  {item.label}
                  {"hasMenu" in item && (
                    <ChevronDown
                      className="size-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                      aria-hidden="true"
                    />
                  )}
                </Link>
                {"hasMenu" in item && products.length > 0 && (
                  <div className="invisible absolute left-0 top-full w-72 translate-y-1 border border-line bg-white p-2 opacity-0 shadow-lift transition-all group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    <ul>
                      {products.map((p) => (
                        <li key={p.href}>
                          <Link
                            href={p.href}
                            className="block rounded-sm px-3 py-2.5 text-[0.9375rem] font-medium text-ink hover:bg-brand-50 hover:text-brand-700"
                          >
                            {p.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/insurance"
                      className="mt-1 block border-t border-line px-3 pb-1.5 pt-3 text-sm font-bold text-brand-600 hover:text-brand-700"
                    >
                      View all insurance products →
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={phone.href}
            data-cta="call"
            data-cta-location="header-number"
            className="hidden text-right leading-tight xl:block"
          >
            <span className="block text-xs font-medium text-muted">
              Speak with an agent
            </span>
            <span className="block font-display text-lg font-extrabold text-navy-900">
              {phone.display}
            </span>
          </a>
          <div className="hidden lg:block">
            <CallButton location="header" label="Call an Agent" />
          </div>
          {/* Mobile: compact call icon + menu */}
          <a
            href={phone.href}
            data-cta="call"
            data-cta-location="header-mobile"
            aria-label={`Call an agent: ${phone.display}`}
            className="inline-flex size-11 items-center justify-center rounded-md bg-sun-400 text-navy-900 hover:bg-sun-300 lg:hidden"
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
          <MobileMenu nav={mainNav.map((n) => ({ ...n }))} products={products} />
        </div>
      </div>
    </header>
  );
}
