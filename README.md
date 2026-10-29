# Travlcares.com

A call-focused marketing and information website for a US insurance agency. The
goal is simple: help visitors understand their options and **call an agent**.

Built with Next.js (App Router), TypeScript, Tailwind CSS 4, and Lucide icons.
There is deliberately **no** backend: no database, CRM, admin panel, email
service, forms, or payment gateway.

> This project uses a newer Next.js release than most documentation covers.
> Check `node_modules/next/dist/docs/` before changing framework-level code,
> as `AGENTS.md` instructs.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build    # production build
npm run start    # serve the production build
```

## Before launch checklist

Everything the business must supply lives in **`config/site.ts`** or the
environment. Until then, the site shows clearly marked placeholders.

1. **Phone number.** Set `NEXT_PUBLIC_PHONE_DISPLAY` and `NEXT_PUBLIC_PHONE_E164`
   (see `.env.example`), or edit `phone` in `config/site.ts`. Every call button,
   link, and the mobile call bar read from this one place. The placeholder is
   `(000) 000-0000`; a dev-only banner and a production build warning remind you
   while it is in use.
2. **Insurance categories.** In `insuranceCategories`, set `confirmed: false`
   for any product the business does not offer or is not licensed to discuss.
   Unconfirmed categories disappear from navigation, the homepage, the footer,
   and the sitemap, and their pages return 404. **All seven start enabled as
   drafts so the site can be reviewed; confirm them before launch.**
3. **Business details.** Fill `business` (legal name, licensing, licensed
   states, address, hours, legal effective date). Yellow `[bracketed]`
   placeholders on the site disappear as each value is supplied.
4. **Legal pages.** `/privacy`, `/terms`, and `/accessibility` are draft
   templates for a site without forms. They are not legal advice. Have an
   attorney review and complete them.
5. **Site URL.** Set `NEXT_PUBLIC_SITE_URL` to the production domain.
6. **Photography (optional).** The site ships with original vector artwork. To
   use licensed photos, add them to `public/` and set `images.hero.src` /
   `images.about.src` in `config/site.ts`.

## Where things live

| Path | Purpose |
| --- | --- |
| `config/site.ts` | Phone, categories, business details, navigation, images |
| `content/products.ts` | Original copy for each insurance product page |
| `content/articles.ts` | Educational guides under `/resources` |
| `content/faqs.ts` | General FAQs |
| `components/ui/CallButton.tsx` | The single click-to-call button |
| `components/home/*` | Homepage sections |
| `app/insurance/[slug]` | Product page template |
| `app/sitemap.ts`, `app/robots.ts` | Technical SEO |

## Content rules

The copy is written to avoid unsupported claims. Keep it that way: no invented
statistics, reviews, awards, licenses, carrier relationships, prices, or savings
claims; no guarantees of coverage or approval; and general descriptions should
always say that actual terms depend on the policy.

## Analytics

Call buttons carry `data-cta="call"` and `data-cta-location="..."` attributes
so click-to-call events can be tracked later without collecting personal data.
No analytics are installed.

## Deployment

Any Node.js host that supports Next.js works (for example Vercel or a
self-hosted Node server). Set the environment variables above in your host's
settings, run `npm run build`, then `npm run start`. See
`node_modules/next/dist/docs/01-app/01-getting-started/17-deploying.md`.
