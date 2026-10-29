"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CallButton } from "@/components/ui/CallButton";
import { ProductIcon } from "@/components/ui/ProductIcon";
import type { ProductIconKey } from "@/content/products";

export type FinderItem = {
  slug: string;
  name: string;
  icon: ProductIconKey;
  image?: string;
  protectLabel: string;
  summary: string;
  /** A starter question to ask an agent. */
  ask: string;
};

export function InsuranceFinder({ items }: { items: FinderItem[] }) {
  const [selected, setSelected] = useState(items[0]?.slug);
  const active = items.find((i) => i.slug === selected) ?? items[0];

  if (!active) return null;

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-12">
      <fieldset className="lg:col-span-5">
        <legend className="sr-only">Choose what you would like to protect</legend>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-1">
          {items.map((item) => {
            const checked = item.slug === active.slug;
            return (
              <label
                key={item.slug}
                className={`group flex cursor-pointer items-center gap-3 rounded-md border px-4 py-3.5 transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-[3px] has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand-600 ${
                  checked
                    ? "border-navy-900 bg-navy-900 text-white"
                    : "border-line bg-white text-navy-900 hover:border-brand-500 hover:bg-brand-50"
                }`}
              >
                <input
                  type="radio"
                  name="protect"
                  value={item.slug}
                  checked={checked}
                  onChange={() => setSelected(item.slug)}
                  className="sr-only"
                />
                <span
                  className={`flex size-9 shrink-0 items-center justify-center rounded-md ${
                    checked ? "bg-white/15 text-sun-300" : "bg-brand-50 text-brand-600"
                  }`}
                >
                  <ProductIcon name={item.icon} className="size-5" />
                </span>
                <span className="font-display text-[0.9375rem] font-bold leading-tight sm:text-base">
                  {item.name}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div
        aria-live="polite"
        className="relative overflow-hidden border border-line bg-paper p-7 sm:p-10 lg:col-span-7"
      >
        <div
          key={active.slug}
          className="animate-rise"
        >
          <div className="grid gap-6 sm:grid-cols-12 sm:items-start">
            <div className="sm:col-span-8">
              <span className="flex size-14 items-center justify-center rounded-md bg-navy-900 text-sun-300">
                <ProductIcon name={active.icon} className="size-7" />
              </span>
              <p className="eyebrow mt-6">I want to protect</p>
              <h3 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
                {active.protectLabel}
              </h3>
              <p className="mt-4 text-lg text-muted">{active.summary}</p>
            </div>
            <div className="sm:col-span-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl shadow-card ring-1 ring-line">
                <Image
                  src={active.image ?? `/images/products/${active.slug}.jpg`}
                  alt={active.name}
                  fill
                  sizes="(min-width: 640px) 200px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-line pt-6">
            <p className="text-xs font-bold uppercase tracking-widest text-navy-700">
              A good question to start with
            </p>
            <p className="mt-2 max-w-lg font-display text-lg font-semibold text-navy-900">
              &ldquo;{active.ask}&rdquo;
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CallButton
              location={`finder-${active.slug}`}
              label={`Call About ${active.name.replace(" Insurance", "")}`}
            />
            <Link
              href={`/insurance/${active.slug}`}
              className="group inline-flex min-h-11 items-center gap-2 px-1 font-bold text-brand-600 hover:text-brand-700"
            >
              Learn about {active.name.toLowerCase()}
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
