'use client';
import { Leaf } from 'lucide-react';

export default function LogoCloud() {
  const marks = [
    'Ceremonial Grade',
    'Kyoto Blend',
    'No Added Sugar',
    'Small Batch',
    'Vegan Friendly',
    'Cold Brew Ready'
  ];

  return (
    <div>
      <p className="mt-12 text-xs uppercase text-primary text-center font-bold tracking-[0.3em]">
        GreenSip Quality Marks
      </p>
      <div className="grid grid-cols-1 place-items-center justify-center my-12 space-y-4 sm:mt-8 sm:space-y-0 md:mx-auto md:max-w-2xl sm:grid sm:gap-10 sm:grid-cols-6">
        {marks.map((mark) => (
          <div
            key={mark}
            className="flex items-center justify-center gap-2 rounded-full border border-primary/25 bg-card px-4 py-2 text-xs font-medium text-primary"
          >
            <Leaf className="h-3.5 w-3.5" />
            <span>{mark}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
