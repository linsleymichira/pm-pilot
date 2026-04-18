'use client';

import { DemoCard } from './demo-card';

const HERO_STEPS = [
  { type: 'cmd' as const, text: 'prep for my 1:1 with Sarah' },
  { type: 'out' as const, text: 'Checking Jira, Slack, Calendar...' },
  { type: 'out' as const, text: 'Found: 3 open tickets assigned to Sarah' },
  { type: 'out' as const, text: 'Found: 2 unresolved threads in #product' },
  { type: 'out' as const, text: 'Found: Last 1:1 was March 28 — 2 action items still open' },
  { type: 'success' as const, text: '── Meeting Brief ──' },
  { type: 'out' as const, text: "Sarah's focus: migrating auth service (blocked on DevOps)" },
  { type: 'out' as const, text: 'You owe her: API spec review (promised Mar 28)' },
  { type: 'out' as const, text: 'She owes you: Updated timeline for Q2 roadmap' },
  { type: 'success' as const, text: 'Suggested talking points:' },
  { type: 'out' as const, text: '1. Unblock auth migration — offer to escalate with DevOps' },
  { type: 'out' as const, text: '2. API spec review — share status or ask for extension' },
  { type: 'out' as const, text: '3. Q2 roadmap timeline — get her latest estimate' },
];

export function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-400">
        <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
        Free & open source — works with Claude Code
      </div>

      <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl">
        Your AI co-pilot for<br />
        <span className="text-green-600 dark:text-green-400">product management</span>
      </h1>

      <p className="mt-6 text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
        PM Pilot turns Claude Code into your daily PM operating system. Meeting prep, PRDs, weekly status, market sizing — all out of the box. No coding required.
      </p>

      <p className="mt-2 text-sm text-gray-400 dark:text-gray-500">
        Built for PMs moving from ChatGPT to Claude, and founders building their first product.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <a
          href="https://github.com/mshadmanrahman/pm-pilot"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg bg-gray-900 dark:bg-white px-5 py-2.5 text-sm font-medium text-white dark:text-gray-900 shadow-sm hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
          </svg>
          Star on GitHub
        </a>
        <a
          href="https://github.com/mshadmanrahman/pm-pilot#quick-start"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700 px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          Quick start →
        </a>
      </div>

      <div className="mt-12 text-left">
        <DemoCard title="pm-pilot — meeting prep" steps={HERO_STEPS} loop loopDelay={4000} />
      </div>
    </section>
  );
}
