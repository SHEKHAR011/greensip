import pricingPlans from '@/config/pricing';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card-header';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function PricingPage() {
  return (
    <section className="container mx-auto" id="pricing">
      <div className="flex flex-col items-center justify-center w-full min-h-screen py-10">
        <h1 className="text-3xl font-bold text-center">Simple pricing for every matcha routine.</h1>
        <p className="mt-2 text-center text-muted-foreground">
          Choose a can plan that fits your week, from casual sipping to daily stocking.
        </p>

        <div className="grid gap-6 mt-10 md:grid-cols-3">
          {pricingPlans.map((plan) => {
            const monthly = new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: 'INR',
              minimumFractionDigits: 0
            }).format(plan.monthlyPrice);

            return (
              <Card key={plan.name} className="w-full max-w-sm rounded-3xl border-2 bg-white text-black">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold">{monthly}</div>
                  <p className="mt-2 text-muted-foreground">{plan.description}</p>
                  <Link
                    href="/how-to-make"
                    className={cn(buttonVariants(), 'mt-4 w-full rounded-full')}
                  >
                    View brewing tips
                  </Link>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((feature) => (
                      <li key={`${plan.name}-${feature}`} className="text-sm">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
