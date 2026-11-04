import type { Metadata } from "next";
import { site } from "@/content/site";

const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Ashrafi Marine Products — dry fish wholesale, Madh Island, Mumbai",
};

/**
 * Builds page metadata with the Open Graph fields that a page-level
 * `openGraph` object replaces wholesale (Next.js merges metadata shallowly).
 * Without these, subpages lose the shared OG image, type and site name.
 */
export function pageMetadata({
  title,
  description,
  path,
  openGraphTitle = title,
  openGraphDescription = description,
}: {
  title: string;
  description: string;
  path: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: site.name,
      url: path,
      title: openGraphTitle,
      description: openGraphDescription,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: openGraphTitle,
      description: openGraphDescription,
      images: ["/og-image.png"],
    },
  };
}
