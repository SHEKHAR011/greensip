import { MetadataRoute } from 'next';
import { getPages } from '@/app/source';
import { blog } from '@/utils/source';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.url}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: `${siteConfig.url}/pricing`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8
    },
    {
      url: `${siteConfig.url}/journal`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7
    },
    {
      url: `${siteConfig.url}/how-to-make`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8
    }
  ];

  const docsRoutes: MetadataRoute.Sitemap = getPages().map((page) => ({
    url: `${siteConfig.url}${page.url}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6
  }));

  const blogRoutes: MetadataRoute.Sitemap = blog.getPages().map((page) => ({
    url: `${siteConfig.url}${page.url}`,
    lastModified: new Date(page.data.date ?? now),
    changeFrequency: 'monthly',
    priority: 0.6
  }));

  return [...staticRoutes, ...docsRoutes, ...blogRoutes];
}
