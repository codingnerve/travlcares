import type { MetadataRoute } from "next";
import { SITE_URL, legalNav } from "@/config/site";
import { articles } from "@/content/articles";
import { productSubpages } from "@/content/product-details";
import { getPublishedProducts } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${SITE_URL}${path}`;
  return [
    { url: url("/"), changeFrequency: "monthly", priority: 1 },
    { url: url("/insurance"), changeFrequency: "monthly", priority: 0.9 },
    ...getPublishedProducts().map((p) => ({
      url: url(`/insurance/${p.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...getPublishedProducts().flatMap((p) =>
      productSubpages.map((s) => ({
        url: url(`/insurance/${p.slug}/${s.topic}`),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      })),
    ),
    { url: url("/about"), changeFrequency: "yearly", priority: 0.6 },
    { url: url("/contact"), changeFrequency: "yearly", priority: 0.7 },
    { url: url("/resources"), changeFrequency: "monthly", priority: 0.7 },
    ...articles.map((a) => ({
      url: url(`/resources/${a.slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    ...legalNav.map((l) => ({
      url: url(l.href),
      changeFrequency: "yearly" as const,
      priority: 0.2,
    })),
  ];
}
