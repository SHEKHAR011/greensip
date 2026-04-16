'use client';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Leaf } from 'lucide-react';
import Particles from '@/components/magicui/particles';
import Ripple from '@/components/magicui/ripple';
import { useTheme } from 'next-themes';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const { theme } = useTheme();
  const quotes = [
    { text: 'Smooth, grassy, and super easy to drink on the go.', author: 'Ari', title: 'Cafe Owner', avatarFallback: 'AR', avatarImg: '/images/dcodes.png' },
    { text: 'The yuzu can is my 3pm reset every single day.', author: 'Noa', title: 'Fitness Coach', avatarFallback: 'NO', avatarImg: '/images/SuhailKakar.jpg' },
    { text: 'Finally, canned matcha that tastes like real whisked tea.', author: 'Mika', title: 'Matcha Enthusiast', avatarFallback: 'MI', avatarImg: '/images/said.jpg' },
  ];

  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length)
    }, 5000) // Change quote every 5 seconds

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Particles
          className="absolute inset-0"
          quantity={300}
          ease={80}
          color={theme === 'dark' ? '#FFFFFF' : '#000000'}
          refresh
        />
        <Ripple />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="relative h-[300px] w-[160px] rotate-[-12deg] opacity-90 md:h-[430px] md:w-[220px]">
            <svg
              viewBox="0 0 220 430"
              className="h-full w-full drop-shadow-[0_26px_60px_rgba(45,78,38,0.32)]"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="canBody" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#e5f2d8" />
                  <stop offset="48%" stopColor="#b8d89e" />
                  <stop offset="100%" stopColor="#87b76f" />
                </linearGradient>
                <linearGradient id="canMetal" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#cfd5cf" />
                  <stop offset="50%" stopColor="#f2f4f2" />
                  <stop offset="100%" stopColor="#bec5be" />
                </linearGradient>
                <linearGradient id="labelBand" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.75)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.35)" />
                </linearGradient>
              </defs>

              <rect x="46" y="42" width="128" height="334" rx="60" fill="url(#canBody)" stroke="rgba(41,73,34,0.28)" strokeWidth="2" />
              <ellipse cx="110" cy="42" rx="64" ry="16" fill="url(#canMetal)" stroke="rgba(80,90,80,0.35)" strokeWidth="2" />
              <ellipse cx="110" cy="376" rx="64" ry="14" fill="rgba(68,110,55,0.45)" />

              <ellipse cx="110" cy="40" rx="18" ry="10" fill="rgba(175,180,175,0.95)" />
              <ellipse cx="110" cy="40" rx="11" ry="6" fill="rgba(240,242,240,0.95)" />
              <rect x="103" y="25" width="14" height="8" rx="4" fill="rgba(188,194,188,0.95)" />

              <rect x="62" y="116" width="96" height="166" rx="24" fill="url(#labelBand)" stroke="rgba(41,73,34,0.22)" strokeWidth="1.5" />
              <circle cx="110" cy="162" r="22" fill="rgba(42,78,37,0.16)" stroke="rgba(42,78,37,0.35)" strokeWidth="1.5" />
              <path d="M110 150c8 0 13 6 13 13-8 0-13-6-13-13zm0 0c-8 0-13 6-13 13 8 0 13-6 13-13z" fill="rgba(34,92,30,0.8)" />

              <text x="110" y="204" textAnchor="middle" fontSize="13" fontWeight="700" fill="rgba(30,67,28,0.9)" letterSpacing="2">
                GREENSIP
              </text>
              <text x="110" y="223" textAnchor="middle" fontSize="9" fontWeight="600" fill="rgba(30,67,28,0.78)" letterSpacing="1.2">
                CEREMONIAL MATCHA
              </text>
              <text x="110" y="322" textAnchor="middle" fontSize="10" fontWeight="700" fill="rgba(30,67,28,0.85)">
                250 ML
              </text>
            </svg>
          </div>
        </div>
      </div>
      <div className="container px-4 py-12 mx-auto md:py-16 lg:py-32">
        <div className="relative z-10 flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto">
          <h1 className="text-2xl font-bold tracking-tight font-heading sm:text-4xl md:text-5xl lg:text-6xl">
            Premium Canned Matcha Crafted For Everyday Energy
          </h1>
          <div className="max-w-[42rem] font-bold tracking-tight text-primary sm:text-xl sm:leading-8 rounded-full p-2">
            Discover ceremonial-grade matcha in ready-to-drink cans. Balanced flavor,
            clean ingredients, and vibrant focus in every sip.
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/how-to-make" className={cn(buttonVariants({ size: 'xl' }), 'rounded-full border-2 border-primary dark:border-white text-bold text-white')}>
              Brewing Guide
            </Link>
            <Link
              href="/journal"
              className={cn(buttonVariants({ variant: 'outline', size: 'xl' }), 'rounded-full border-2 border-primary dark:border-white text-semibold')}
            >
              Matcha Journal <Leaf className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
