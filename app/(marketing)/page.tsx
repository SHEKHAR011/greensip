import type { Metadata } from 'next';
import Testimonials from '@/components/landing-page/testimonials-default';
import Hero from '@/components/landing-page/hero';
import LogoCloud from '@/components/landing-page/logo-cloud-svg';
import FeaturesHover from '@/components/landing-page/features-hover';
import Pricing from '@/components/pricing/pricing-primary';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'Home',
  description: siteConfig.description,
  alternates: {
    canonical: '/'
  },
  openGraph: {
    url: '/'
  },
  twitter: {
    images: [siteConfig.ogImage]
  }
};

export default async function IndexPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/og.jpg`
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <div className="flex-col gap-10 mb-5">
        <Hero />
        <LogoCloud />
        <FeaturesHover />
        <Pricing />
        <Testimonials />
      </div>
    </>
  );
}
