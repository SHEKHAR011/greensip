import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { InlineTOC } from 'fumadocs-ui/components/inline-toc';
import { blog } from '@/utils/source';
import { createMetadata } from '@/utils/metadata';
import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';
import { Control } from './page.client';

interface Param {
  slug: string;
}

export const dynamicParams = false;

export async function generateStaticParams(): Promise<Param[]> {
  return blog.getPages().map<Param>((page) => ({
    slug: page.slugs[0]
  }));
}

export default function Page({
  params
}: {
  params: Param;
}): React.ReactElement {
  const page = blog.getPage([params.slug]);

  if (!page) notFound();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: page.data.title,
    description: page.data.description,
    author: {
      '@type': 'Person',
      name: page.data.author
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/og.jpg`
      }
    },
    mainEntityOfPage: `${siteConfig.url}${page.url}`,
    datePublished: new Date(page.data.date ?? page.file.name).toISOString(),
    dateModified: new Date(page.data.date ?? page.file.name).toISOString(),
    image: `${siteConfig.url}/og.jpg`
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <div
        className="container rounded-xl border py-12 md:px-8"
        style={{
          backgroundColor: 'black',
          backgroundImage: [
            'linear-gradient(140deg, hsla(274,94%,54%,0.3), transparent 50%)',
            'linear-gradient(to left top, hsla(260,90%,50%,0.8), transparent 50%)',
            'radial-gradient(circle at 100% 100%, hsla(240,100%,82%,1), hsla(240,40%,40%,1) 17%, hsla(240,40%,40%,0.5) 20%, transparent)'
          ].join(', '),
          backgroundBlendMode: 'difference, difference, normal'
        }}
      >
        <h1 className="mb-2 text-3xl font-bold text-white">
          {page.data.title}
        </h1>
        <p className="mb-4 text-white/80">{page.data.description}</p>
        <Link
          href="/journal"
          className={buttonVariants({ size: 'sm', variant: 'secondary' })}
        >
          Back
        </Link>
      </div>
      <article className="container grid grid-cols-1 px-0 py-8 lg:grid-cols-[2fr_1fr] lg:px-4">
        <div className="prose p-4">
          <InlineTOC items={page.data.exports.toc} />
          <page.data.exports.default />
        </div>
        <div className="flex flex-col gap-4 border-l p-4 text-sm">
          <div>
            <p className="mb-1 text-muted-foreground">Written by</p>
            <p className="font-medium">{page.data.author}</p>
          </div>
          <div>
            <p className="mb-1 text-sm text-muted-foreground">At</p>
            <p className="font-medium">
              {new Date(page.data.date ?? page.file.name).toDateString()}
            </p>
          </div>
          <Control url={page.url} />
        </div>
      </article>
    </>
  );
}

export function generateMetadata({ params }: { params: Param }): Metadata {
  const page = blog.getPage([params.slug]);

  if (!page) notFound();

  const canonical = `/journal/${params.slug}`;

  return createMetadata({
    title: page.data.title,
    description:
      page.data.description ??
      'GreenSip matcha journal with brewing guides, tasting notes, and cafe-inspired recipes.',
    alternates: {
      canonical
    },
    openGraph: {
      url: canonical,
      type: 'article'
    }
  });
}
