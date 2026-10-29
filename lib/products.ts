import { insuranceCategories, type ProductSlug } from "@/config/site";
import { productContent, type ProductContent } from "@/content/products";

/** Products the business has confirmed, in configured display order. */
export function getPublishedProducts(): ProductContent[] {
  return insuranceCategories
    .filter((c) => c.confirmed)
    .map((c) => productContent[c.slug]);
}

export function getPublishedProduct(slug: string): ProductContent | undefined {
  const confirmed = insuranceCategories.find(
    (c) => c.slug === slug && c.confirmed,
  );
  return confirmed ? productContent[confirmed.slug as ProductSlug] : undefined;
}

/** All configured slugs, used by generateStaticParams (must be non-empty). */
export function getAllProductSlugs(): ProductSlug[] {
  return insuranceCategories.map((c) => c.slug);
}
