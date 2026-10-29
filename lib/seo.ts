import type { Metadata } from "next";
import { brand, SITE_URL } from "@/config/site";

type PageMeta = {
  /** Page title without the brand suffix (the layout template adds it). */
  title: string;
  description: string;
  /** Path beginning with "/". */
  path: string;
};

export function pageMetadata({ title, description, path }: PageMeta): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: brand.name,
      locale: "en_US",
      title: `${title} | ${brand.name}`,
      description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${brand.name}`,
      description,
    },
  };
}
