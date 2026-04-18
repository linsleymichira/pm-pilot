export function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-mono text-sm font-semibold text-gray-900 dark:text-gray-100">PM Pilot</span>
          <span className="text-gray-300 dark:text-gray-700">·</span>
          <span className="text-xs text-gray-400">MIT License</span>
        </div>

        <nav className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
          <a
            href="https://github.com/mshadmanrahman/pm-pilot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://github.com/mshadmanrahman/pm-pilot/blob/main/CONTRIBUTING.md"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            Contributing
          </a>
          <a
            href="https://claudecodeguide.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            Claude Code Guide
          </a>
        </nav>
      </div>
    </footer>
  );
}
