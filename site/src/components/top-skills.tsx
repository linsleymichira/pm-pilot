'use client';

import { DemoCard } from './demo-card';

const skills = [
  {
    name: '/meeting-prep',
    description: 'Aggregates Jira tickets, Slack threads, and calendar context into a structured brief before any meeting.',
  },
  {
    name: '/prd',
    description: 'Guides you through a braindump-first process before opening any template. No more blank-page panic.',
  },
  {
    name: '/weekly-status',
    description: 'Pulls real sprint data and generates a shareable status update for stakeholders. Formatted and ready.',
  },
  {
    name: '/market-sizing',
    description: 'Structures your TAM / SAM / SOM analysis with explicit assumptions. Works from a quick description.',
  },
  {
    name: '/stakeholder-intel',
    description: 'Builds a context profile on any person before a high-stakes conversation — role, priorities, likely objections.',
  },
];

const WEEKLY_STATUS_STEPS = [
  { type: 'cmd' as const, text: 'weekly-status' },
  { type: 'out' as const, text: 'Fetching sprint data from Jira...' },
  { type: 'out' as const, text: 'Sprint 42 — 18 issues, 14 closed, 4 in progress' },
  { type: 'out' as const, text: 'Checking for blockers...' },
  { type: 'warn' as const, text: '⚠ 2 issues blocked: INS-1204, INS-1311' },
  { type: 'success' as const, text: '── Weekly Status Draft ──' },
  { type: 'out' as const, text: 'This week: Shipped auth refactor, closed 14 issues in Sprint 42.' },
  { type: 'out' as const, text: 'Blocked: DevOps dependency on INS-1204 (auth migration).' },
  { type: 'out' as const, text: 'Next week: INS-1311 resolution, Q2 planning kickoff Thursday.' },
  { type: 'success' as const, text: 'Ready to copy into Slack / Confluence.' },
];

export function TopSkills() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          The skills that save the most time
        </h2>
        <p className="mt-3 text-gray-500 dark:text-gray-400">
          Every skill is a markdown file you can read, edit, or fork. No black boxes.
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        {skills.map((s) => (
          <div
            key={s.name}
            className="rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 shadow-sm"
          >
            <p className="font-mono text-sm font-semibold text-green-600 dark:text-green-400">{s.name}</p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Example: <span className="font-mono text-green-600 dark:text-green-400">/weekly-status</span> in action
        </p>
        <DemoCard title="pm-pilot — weekly status" steps={WEEKLY_STATUS_STEPS} loop loopDelay={4000} />
      </div>
    </section>
  );
}
