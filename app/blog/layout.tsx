import { marketingConfig } from '@/config/marketing';

import CircularNavigation from '@/components/navigation';
import FooterPrimary from '@/components/footer-blog';
import React from 'react';

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default async function MarketingLayout({
  children
}: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col items-center w-full">
      <CircularNavigation items={marketingConfig.mainNav} />
      <main className="flex-1">{children}</main>
      <FooterPrimary />
    </div>
  );
}
