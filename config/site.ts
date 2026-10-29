/**
 * Central site configuration for Travlcares.
 *
 * Everything the business needs to confirm before launch lives in this file
 * (or in the environment variables documented in `.env.example`):
 *
 *   1. PHONE            – replace the placeholder number.
 *   2. INSURANCE CATEGORIES – set `confirmed: true` only for products the
 *      business actually offers and is licensed to discuss or arrange.
 *   3. BUSINESS DETAILS – legal name, licensing, states, address and hours.
 *   4. IMAGES           – optional photography for the hero and About page.
 *
 * Nothing in here is verified business data unless noted otherwise.
 */

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://travlcares.com"
).replace(/\/$/, "");

/* -------------------------------------------------------------------------- */
/* 1. PHONE                                                                   */
/* -------------------------------------------------------------------------- */

/** Placeholder only. It is not a real Travlcares number. */
const PLACEHOLDER_E164 = "+10000000000";
const PLACEHOLDER_DISPLAY = "(000) 000-0000";

const phoneE164 = process.env.NEXT_PUBLIC_PHONE_E164 ?? PLACEHOLDER_E164;
const phoneDisplay =
  process.env.NEXT_PUBLIC_PHONE_DISPLAY ?? PLACEHOLDER_DISPLAY;

export const phone = {
  /** Shown to visitors, e.g. "(800) 555-0123". */
  display: phoneDisplay,
  /** E.164 format used in tel: links, e.g. "+18005550123". */
  e164: phoneE164,
  href: `tel:${phoneE164}`,
  /** True until a real number is supplied. Surfaced during development. */
  isPlaceholder: phoneE164 === PLACEHOLDER_E164,
} as const;

const warned = globalThis as { __travlcaresPhoneWarned?: boolean };
if (
  typeof window === "undefined" &&
  phone.isPlaceholder &&
  process.env.NODE_ENV === "production" &&
  !warned.__travlcaresPhoneWarned
) {
  warned.__travlcaresPhoneWarned = true;
  console.warn(
    "[travlcares] Using the PLACEHOLDER phone number. Set NEXT_PUBLIC_PHONE_E164 and NEXT_PUBLIC_PHONE_DISPLAY (or edit config/site.ts) before launch.",
  );
}

/* -------------------------------------------------------------------------- */
/* 2. INSURANCE CATEGORIES                                                    */
/* -------------------------------------------------------------------------- */

export type ProductSlug =
  | "auto"
  | "home"
  | "renters"
  | "life"
  | "travel"
  | "business"
  | "pet";

/**
 * Order here is the display order across the site.
 *
 * `confirmed: false` removes the category everywhere: navigation, homepage,
 * footer, sitemap, and its page returns 404.
 *
 * TODO(business): all categories are enabled as DRAFT placeholders so the site
 * can be reviewed end to end. Set any category the business does not offer (or
 * is not licensed to discuss) to `false` before launch.
 */
export const insuranceCategories: { slug: ProductSlug; confirmed: boolean }[] =
  [
    { slug: "auto", confirmed: true },
    { slug: "home", confirmed: true },
    { slug: "renters", confirmed: true },
    { slug: "life", confirmed: true },
    { slug: "travel", confirmed: true },
    { slug: "business", confirmed: true },
    { slug: "pet", confirmed: true },
  ];

/* -------------------------------------------------------------------------- */
/* 3. BUSINESS DETAILS (leave null until verified)                            */
/* -------------------------------------------------------------------------- */

export const business = {
  /** Registered legal entity name, e.g. "Travlcares LLC". */
  legalName: null as string | null,
  /** Street address – only if verified and meant to be public. */
  address: null as string | null,
  /** Confirmed business hours, e.g. "Monday–Friday, 9 a.m.–6 p.m. ET". */
  hours: null as string | null,
  /** Agency license / NPN details, exactly as they should be published. */
  licensing: null as string | null,
  /** States in which Travlcares is licensed to operate. */
  licensedStates: null as string | null,
  /** Public email – only if the business later provides one. */
  email: null as string | null,
  /** Effective date shown on legal pages, e.g. "October 29, 2026". */
  legalEffectiveDate: null as string | null,
};

export const socialLinks: { label: string; href: string }[] = [];

/* -------------------------------------------------------------------------- */
/* 4. BRAND, IMAGES, NAVIGATION                                               */
/* -------------------------------------------------------------------------- */

export const brand = {
  name: "Travlcares",
  domain: "travlcares.com",
  tagline: "Insurance for what matters.",
  description:
    "Travlcares helps people in the United States understand their insurance options and connect with an agent by phone.",
  copyrightYear: 2026,
} as const;

/**
 * Optional photography. Leave `src` as null to use the built-in original
 * vector artwork. Supply a licensed photo in /public and set the path, size
 * and alt text to switch a slot over.
 */
export const images: Record<
  "hero" | "about",
  { src: string | null; alt: string; width: number; height: number }
> = {
  hero: {
    src: "/images/hero.jpg",
    alt: "A family at home reviewing their insurance options together",
    width: 1200,
    height: 1400,
  },
  about: {
    src: "/images/about.jpg",
    alt: "A Travlcares agent on a call with a customer",
    width: 1200,
    height: 900,
  },
};

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Insurance Products", href: "/insurance", hasMenu: true },
  { label: "About Us", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
] as const;

export const legalNav = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
] as const;
