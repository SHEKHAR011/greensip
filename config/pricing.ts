interface Plan {
  name: string;
  description: string;
  features: string[];
  monthlyPrice: number;
  yearlyPrice: number;
}

const pricingPlans: Plan[] = [
  {
    name: 'Starter Pack',
    description: 'A light intro for curious matcha drinkers.',
    features: [
      '12 cans per month',
      'Mix and match any 2 flavors',
      'New flavor alerts by email',
      'Brewing and pairing mini guides',
      'Free shipping on first order'
    ],
    monthlyPrice: 699,
    yearlyPrice: 6990
  },
  {
    name: 'Daily Ritual',
    description: 'Built for daily focus and smooth energy.',
    features: [
      '24 cans per month',
      'Access to all core flavors',
      'Priority shipping',
      'Monthly limited-edition sample',
      'Member-only discounts on bundles',
      'Flavor quiz with personalized picks',
      'Pause or swap anytime'
    ],
    monthlyPrice: 1499,
    yearlyPrice: 14990
  },
  {
    name: 'Studio Supply',
    description: 'For teams, cafes, and offices that stock matcha in bulk.',
    features: [
      '60 cans per month',
      'Wholesale flavor selection',
      'Dedicated account support',
      'Custom delivery schedule',
      'Early access to seasonal releases',
      'Co-branded fridge display assets',
      'Bulk reorder in one click',
      'Flexible invoicing terms',
      'Priority customer support channel',
      'Quarterly tasting session'
    ],
    monthlyPrice: 7999,
    yearlyPrice: 79990
  }
];

export default pricingPlans;
