import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL || "https://setaside-tax.vercel.app";
  const paths = [
    "",
    "/guides",
    "/guides/how-much-to-set-aside-for-1099-taxes",
    "/guides/quarterly-estimated-taxes-gig-workers",
    "/guides/self-employment-tax-vs-income-tax",
  ];
  return paths.map((path, i) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: i === 0 ? "weekly" : "monthly",
    priority: i === 0 ? 1 : 0.8,
  }));
}
