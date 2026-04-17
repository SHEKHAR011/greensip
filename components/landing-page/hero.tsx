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
  const canRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [quotes.length])

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
      </div>
      <div className="container px-4 py-8 mx-auto md:py-10 lg:py-14">
        <div className="relative z-10 flex max-w-[64rem] flex-col items-center gap-3 text-center mx-auto">
          <h1 className="text-2xl font-bold tracking-tight font-heading sm:text-4xl md:text-5xl lg:text-6xl">
            Premium Canned Matcha Crafted For Everyday Energy
          </h1>
          <div
            ref={canRef}
            className="group relative h-[220px] w-[118px] md:h-[320px] md:w-[168px] z-20 cursor-pointer floating-can"
          >
            <svg
              viewBox="0 0 220 430"
              className="h-full w-full opacity-95 transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:opacity-100 filter drop-shadow-[0_20px_45px_rgba(45,78,38,0.25)] group-hover:drop-shadow-[0_30px_60px_rgba(45,78,38,0.45)] hover-jelly-pop"
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
          <div className="-mt-6 max-w-[42rem] rounded-full p-2 font-bold tracking-tight text-primary sm:text-xl sm:leading-8 md:-mt-7">
            Discover ceremonial-grade matcha in ready-to-drink cans. Balanced flavor,
            clean ingredients, and vibrant focus in every sip.
          </div>
          <div className="flex flex-wrap justify-center gap-4 -mt-5">
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
      <style jsx>{`
        .floating-can {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-16px) rotate(-9deg); }
          100% { transform: translateY(0px) rotate(-12deg); }
        }

        .hover-jelly-pop:hover {
          animation: jelly-pop 0.8s ease-in-out both;
        }

        @keyframes jelly-pop {
          0% { transform: scale(1); }
          30% { transform: scaleX(1.15) scaleY(0.85); }
          50% { transform: scaleX(0.9) scaleY(1.1); }
          75% { transform: scaleX(1.05) scaleY(0.95); }
          90% { transform: scaleX(0.98) scaleY(1.02); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}
