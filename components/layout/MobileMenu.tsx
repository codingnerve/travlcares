"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { CallButton } from "@/components/ui/CallButton";

type NavItem = { label: string; href: string; hasMenu?: boolean };
type ProductLink = { name: string; href: string };

export function MobileMenu({
  nav,
  products,
}: {
  nav: NavItem[];
  products: ProductLink[];
}) {
  // Open state is tied to the path it was opened on, so navigating closes it.
  const [openPath, setOpenPath] = useState<string | null>(null);
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  const open = openPath === pathname;
  const setOpen = (next: boolean) => setOpenPath(next ? pathname : null);

  // Escape closes and returns focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className="inline-flex size-11 items-center justify-center rounded-md border border-line text-navy-900 hover:bg-brand-50"
      >
        {open ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <Menu className="size-5" aria-hidden="true" />
        )}
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-white shadow-lift"
      >
        <nav aria-label="Mobile" className="container-page py-4">
          <ul className="divide-y divide-line">
            {nav.map((item) => (
              <li key={item.href} className="py-1">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-lg font-bold text-navy-900"
                >
                  {item.label}
                </Link>
                {item.hasMenu && products.length > 0 && (
                  <ul className="mb-2 ml-1 border-l-2 border-brand-100 pl-4">
                    {products.map((p) => (
                      <li key={p.href}>
                        <Link
                          href={p.href}
                          onClick={() => setOpen(false)}
                          className="block py-2 text-[0.9375rem] font-medium text-ink"
                        >
                          {p.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-4 pb-2">
            <CallButton
              location="mobile-menu"
              label="Call an Agent"
              showNumber
              className="w-full"
            />
          </div>
        </nav>
      </div>
    </div>
  );
}
