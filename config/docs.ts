import type { DocsConfig } from '@/types';

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'How to Make Matcha',
      href: '/how-to-make'
    },
    {
      title: 'Brewing Guides',
      href: '/guides'
    }
  ],
  sidebarNav: [
    {
      title: 'Getting Started',
      items: [
        {
          title: 'Matcha Basics',
          href: '/how-to-make'
        }
      ]
    },
    {
      title: 'Tools and Technique',
      items: [
        {
          title: 'Ingredients',
          href: '/how-to-make/documentation'
        },
        {
          title: 'In Progress',
          href: '/how-to-make/in-progress',
          disabled: true
        },
        {
          title: 'Tools',
          href: '/how-to-make/documentation/components'
        },
        {
          title: 'Whisking Steps',
          href: '/how-to-make/documentation/code-blocks'
        },
        {
          title: 'Serving Guide',
          href: '/how-to-make/documentation/style-guide'
        },
        {
          title: 'In Progress',
          href: '/how-to-make/in-progress',
          disabled: true
        }
      ]
    },
    {
      title: 'Matcha Journal',
      items: [
        {
          title: 'Introduction',
          href: '/how-to-make/in-progress',
          disabled: true
        },
        {
          title: 'Flavor Notes',
          href: '/how-to-make/in-progress',
          disabled: true
        },
        {
          title: 'Pairing Ideas',
          href: '/how-to-make/in-progress',
          disabled: true
        }
      ]
    },
    {
      title: 'Dashboard',
      items: [
        {
          title: 'Introduction',
          href: '/how-to-make/in-progress',
          disabled: true
        },
        {
          title: 'Layouts',
          href: '/how-to-make/in-progress',
          disabled: true
        },
        {
          title: 'Server Components',
          href: '/how-to-make/in-progress',
          disabled: true
        },
        {
          title: 'Authentication',
          href: '/how-to-make/in-progress',
          disabled: true
        },
        {
          title: 'Database with Prisma',
          href: '/how-to-make/in-progress',
          disabled: true
        },
        {
          title: 'API Routes',
          href: '/how-to-make/in-progress',
          disabled: true
        }
      ]
    },
    {
      title: 'Marketing Site',
      items: [
        {
          title: 'Introduction',
          href: '/how-to-make/in-progress',
          disabled: true
        },
        {
          title: 'File Structure',
          href: '/how-to-make/in-progress',
          disabled: true
        },
        {
          title: 'Tailwind CSS',
          href: '/how-to-make/in-progress',
          disabled: true
        },
        {
          title: 'Typography',
          href: '/how-to-make/in-progress',
          disabled: true
        }
      ]
    }
  ]
};

