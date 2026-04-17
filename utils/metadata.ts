import type { Metadata } from 'next/types';
import { siteConfig } from '@/config/site';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url:
        typeof override.alternates?.canonical === 'string'
          ? override.alternates.canonical
          : siteConfig.url,
      images: [siteConfig.ogImage],
      siteName: siteConfig.name,
      ...override.openGraph
    },
    twitter: {
      card: 'summary_large_image',
      creator: siteConfig.links.twitter.split('/').pop(),
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: [siteConfig.ogImage],
      ...override.twitter
    }
  };
}

export const baseUrl =
  process.env.NODE_ENV === 'development'
    ? new URL('http://localhost:3000')
    : new URL(`https://${process.env.VERCEL_URL!}`);
