const comparisons = [
  {
    task: 'Meeting prep',
    before: '45 min digging through Jira, Slack, and last week\'s notes',
    after: '30 seconds. A brief lands in your terminal.',
  },
  {
    task: 'Weekly status',
    before: '2 hours assembling updates, chasing people, guessing at progress',
    after: 'Auto-generated from real Jira data, formatted and ready to send.',
  },
  {
    task: 'PRD writing',
    before: 'Staring at a blank Confluence template for 40 minutes',
    after: 'Guided braindump-first process. Structure comes after thinking.',
  },
  {
    task: 'Market sizing',
    before: 'Days of spreadsheet hell, questionable data sources',
    after: 'Structured TAM / SAM / SOM in minutes. Cite your assumptions.',
  },
];

export function BeforeAfter() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          What changes when AI does the grunt work
        </h2>
        <p className="mt-3 text-gray-500 dark:text-gray-400">
          PM Pilot doesn't replace your judgment. It removes everything blocking it.
        </p>
      </div>

      <div className="space-y-4">
        {/* Column headers */}
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-4 px-2">
          <div className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500">Task</div>
          <div className="text-xs font-semibold uppercase tracking-wide text-red-400">Before</div>
          <div className="text-xs font-semibold uppercase tracking-wide text-green-500">After PM Pilot</div>
        </div>

        {comparisons.map((c) => (
          <div
            key={c.task}
            className="grid grid-cols-[1fr_1fr_1fr] gap-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-5 shadow-sm"
          >
            <div className="font-medium text-gray-900 dark:text-gray-100 text-sm">{c.task}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{c.before}</div>
            <div className="text-sm text-green-600 dark:text-green-400 leading-relaxed">{c.after}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
