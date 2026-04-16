'use client'
import React from 'react'

import { Leaf } from 'lucide-react';

const AnimatedUnderline = ({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) => (
  <a 
    href={href} 
    className={`${className} relative overflow-hidden group`}
  >
    {children}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
  </a>
);

export default function FooterPrimary() {
  return (
    <footer className="py-10">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-lg font-bold">Flavors</h3>
            <ul className="space-y-2">
              <li>
                <AnimatedUnderline href="/#features" className="text-primary">
                  Classic Can
                </AnimatedUnderline>
              </li>
              <li>
                <AnimatedUnderline href="/#features" className="text-primary">
                  Yuzu Spark
                </AnimatedUnderline>
              </li>
              <li>
                <AnimatedUnderline href="/#features" className="text-primary">
                  Zero Sugar
                </AnimatedUnderline>
              </li>
              <li>
                <AnimatedUnderline href="/#features" className="text-primary">
                  View all cans →
                </AnimatedUnderline>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Company</h3>
            <ul className="space-y-2">
              <li>
                <AnimatedUnderline href="/" className="text-primary">
                  About GreenSip
                </AnimatedUnderline>
              </li>
              <li>
                <AnimatedUnderline href="/how-to-make" className="text-primary">
                  How to make matcha
                </AnimatedUnderline>
              </li>
              <li>
                <AnimatedUnderline href="/journal" className="text-primary">
                  Journal
                </AnimatedUnderline>
              </li>
              <li>
                <AnimatedUnderline href="mailto:hello@greensip.com" className="text-primary">
                  Contact us
                </AnimatedUnderline>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between pt-6 mt-10 border-t md:flex-row">
          <div className="flex items-center space-x-2">
            <Leaf className="w-6 h-6" />
            <span className="text-xl font-bold">GreenSip.</span>
          </div>
          <p className="mt-4 text-gray-500 md:mt-0">© GreenSip Co. 2026</p>
        </div>
      </div>
    </footer>
  );
}

