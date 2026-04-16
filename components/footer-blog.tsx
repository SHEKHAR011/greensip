import { Icons } from '@/components/icons';
import { Separator } from '@/components/ui/separator';

export default function FooterBlog() {
  return (
    <footer className="w-full py-10">
      <Separator className="w-4/5 mx-auto mb-8" />
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center space-x-2">
            <Icons.leaf className="w-6 h-6" />
            <span className="text-xl font-bold">GreenSip.</span>
          </div>
          <div className="flex flex-col items-center space-y-2 md:items-end md:space-y-0">
            <div className="flex items-center space-x-4">
              <p className="text-sm text-muted-foreground">
                Brewed with care by{' '}
                <a
                  href="/"
                  className="underline"
                >
                  GreenSip
                </a>
              </p>
            </div>
            <p className="text-xs text-center text-muted-foreground md:text-right">
              Note: GreenSip journal posts may include AI-assisted drafting.
              Please verify important information before making health-related
              decisions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
