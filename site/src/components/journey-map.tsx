const levels = [
  {
    level: '01',
    title: 'Paste into claude.ai',
    time: 'Zero install',
    description:
      'Copy any PM Pilot skill from GitHub and paste it straight into claude.ai. No terminal, no setup. Works today, right now.',
    badge: 'No install needed',
    badgeColor: 'bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border-blue-100 dark:border-blue-800',
  },
  {
    level: '02',
    title: 'Claude Desktop + PM Pilot',
    time: '5 minutes',
    description:
      'Install Claude Desktop, clone PM Pilot, and point it at your skills folder. Now your skills persist across every conversation — no more copy-pasting.',
    badge: '5 min setup',
    badgeColor: 'bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-800',
  },
  {
    level: '03',
    title: 'Full CLI with integrations',
    time: 'When you\'re ready',
    description:
      'Install Claude Code CLI, connect your Jira, Slack, and Calendar. PM Pilot reads live data: real tickets, real threads, real deadlines. This is the full setup.',
    badge: 'Connects to Jira, Slack, Calendar',
    badgeColor: 'bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400 border-green-100 dark:border-green-800',
  },
];

export function JourneyMap() {
  return (
    <section className="bg-gray-50 dark:bg-gray-900/50 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Start where you are
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            Never used a terminal? No problem. PM Pilot meets you at your current comfort level. There's a path for everyone.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {levels.map((l) => (
            <div
              key={l.level}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm flex flex-col gap-4"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-3xl font-bold text-gray-200 dark:text-gray-700">{l.level}</span>
                <span className={`text-[10px] font-semibold uppercase tracking-wide border rounded-full px-2.5 py-0.5 ${l.badgeColor}`}>
                  {l.badge}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{l.title}</h3>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{l.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
