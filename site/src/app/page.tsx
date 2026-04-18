import { Hero } from '@/components/hero';
import { BeforeAfter } from '@/components/before-after';
import { JourneyMap } from '@/components/journey-map';
import { TopSkills } from '@/components/top-skills';
import { StarCta } from '@/components/star-cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main>
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-6 h-14 flex items-center justify-between">
          <span className="font-mono text-sm font-semibold text-gray-900 dark:text-gray-100">
            PM Pilot
          </span>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mshadmanrahman/pm-pilot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://github.com/mshadmanrahman/pm-pilot#quick-start"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-gray-900 dark:bg-white px-4 py-1.5 text-sm font-medium text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
            >
              Get started
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <BeforeAfter />
      <JourneyMap />
      <TopSkills />
      <StarCta />
      <Footer />
    </main>
  );
}
