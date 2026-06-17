import type { Metadata } from 'next';
import Link from 'next/link';
import { blog } from '@/utils/source';
import { createMetadata } from '@/utils/metadata';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = createMetadata({
  title: 'Matcha Journal',
  description:
    'Brewing notes, flavor guides, and cafe-inspired ideas for everyday matcha rituals.',
  alternates: {
    canonical: '/journal'
  },
  openGraph: {
    url: '/journal',
    type: 'website'
  }
});

function getPostDate(post: { data: Record<string, unknown>; file: { name: string } }): Date {
  const rawDate = post.data.date;
  if (typeof rawDate === 'string' && rawDate.length > 0) {
    return new Date(rawDate);
  }
  if (rawDate instanceof Date) {
    return rawDate;
  }
  return new Date(post.file.name);
}

export default function Page(): React.ReactElement {
  const posts = [...blog.getPages()].sort(
    (a, b) =>
      getPostDate(b as unknown as { data: Record<string, unknown>; file: { name: string } }).getTime() -
      getPostDate(a as unknown as { data: Record<string, unknown>; file: { name: string } }).getTime()
  );

  const svg = `<svg viewBox='0 0 500 500' xmlns='http://www.w3.org/2000/svg'>
  <filter id='noiseFilter'>
    <feTurbulence 
      type='fractalNoise' 
      baseFrequency='0.65' 
      numOctaves='3' 
      stitchTiles='stitch'/>
  </filter>
  
  <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
</svg>`;

  return (
    <main className="container max-sm:px-0 md:py-12">
      <div className="overflow-hidden rounded-lg">
        <div
          className="h-[300px] p-8 md:h-[400px] md:p-12"
          style={{
            backgroundImage: [
              `linear-gradient(to right, 
                hsl(var(--primary) / 0.12),
                hsl(var(--background) / 0.9) 40%,
                hsl(var(--background)) 50%,
                hsl(var(--background) / 0.9) 60%,
                hsl(var(--primary) / 0.12)
              ),
              radial-gradient(
                circle at center,
                hsl(var(--background)) 80%,
                hsl(var(--primary) / 0.1) 100%
              )`,
              `url("data:image/svg+xml,${encodeURIComponent(svg)}")`
            ].join(', ')
          }}
        >
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-primary/80">
            House Journal
          </p>
          <h1 className="pb-2 mb-4 text-4xl font-bold border-b-4 border-foreground md:text-5xl">
            Matcha Journal
          </h1>
          <p className="max-w-2xl text-sm md:text-base text-muted-foreground">
            Brewing notes, flavor guides, and cafe-inspired ideas for everyday
            matcha rituals.
          </p>
        </div>
        <div className="grid grid-cols-1 mt-2 border rounded-b-lg md:grid-cols-3 lg:grid-cols-4">
          {posts.map((post) => (
            <Link
              key={post.url}
              href={post.url}
              className="flex flex-col p-4 transition-colors bg-card hover:bg-accent/70 hover:text-accent-foreground"
            >
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-primary/70">
                Matcha Notes
              </p>
              <p className="font-medium">{post.data.title}</p>
              <p className="text-sm text-muted-foreground">
                {post.data.description}
              </p>

              <p className="pt-4 mt-auto text-xs text-muted-foreground">
                {getPostDate(
                  post as unknown as { data: Record<string, unknown>; file: { name: string } }
                ).toDateString()}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
