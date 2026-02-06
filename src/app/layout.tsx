import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';
import { getAllDocs } from '@/lib/docs';

export const metadata: Metadata = {
  title: 'PF2e Lite',
  description:
    'A streamlined Pathfinder 2e variant for levels 1-10. Mana-based casting, simplified conditions, redesigned crafting.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const docs = getAllDocs();

  return (
    <html lang="en">
      <body className="min-h-screen">
        <div className="flex min-h-screen">
          <Sidebar docs={docs} />
          <div className="flex min-w-0 flex-1 flex-col">
            <main className="flex-1 px-6 py-8 md:px-10">{children}</main>
            <footer className="border-t border-stone-200 px-6 py-4 text-sm text-stone-500 md:px-10">
              Game content licensed under the{' '}
              <a
                href="https://paizo.com/orclicense"
                className="underline hover:text-stone-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                ORC License
              </a>
              {' '}(TX 9-307-067). Based on Paizo Inc. Licensed Material. Code under{' '}
              <a
                href="https://opensource.org/licenses/MIT"
                className="underline hover:text-stone-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                MIT
              </a>
              .
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}
