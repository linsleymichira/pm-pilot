<p align="center">
  <img src="assets/hero.png" alt="PM Pilot — The PM toolkit for Claude Code" width="720" />
</p>

<p align="center">
  <a href="https://github.com/mshadmanrahman/pm-pilot/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="MIT License" /></a>
  <a href="https://github.com/mshadmanrahman/pm-pilot/stargazers"><img src="https://img.shields.io/github/stars/mshadmanrahman/pm-pilot?style=flat-square" alt="Stars" /></a>
  <img src="https://img.shields.io/badge/claude_code-plugin-black?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiByeD0iNCIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==" alt="Claude Code Plugin" />
  <img src="https://img.shields.io/badge/skills-25-orange?style=flat-square" alt="25 Skills" />
  <img src="https://img.shields.io/badge/agents-5-purple?style=flat-square" alt="5 Agents" />
</p>

<p align="center">
  <b>Claude Code, set up for Product Managers.</b><br/>
  Meeting prep, weekly status, PRDs, market sizing, stakeholder intelligence — out of the box.
</p>

<p align="center">
  <img src="assets/terminal-structure.png" alt="PM Pilot directory structure" width="640" />
</p>

---

> **New to Claude Code entirely?** Start at [claudecodeguide.dev](https://claudecodeguide.dev) first — it's a friendly, jargon-free guide that gets you set up in under an hour. Come back here once you're running.

---

## What is this?

You just installed Claude Code. It's powerful. But right now it's a blank slate — it doesn't know your projects, your team, your meeting rhythm, or how you write.

PM Pilot is a pre-built collection of **skills**, **memory templates**, and **rules** that turns Claude Code into a PM's daily operating system. Instead of building everything from scratch, you install PM Pilot and get:

- **"Prep for my meeting with Sarah"** → a full briefing pulled from Jira, Slack, Calendar, and your own notes about Sarah — in 30 seconds
- **"Weekly status"** → your accomplishment report written and ready to paste, pulled from actual completed work
- **"Write a PRD for X"** → guided through proper PM thinking first (braindump before template)
- **"Size the market for AI code assistants"** → TAM/SAM/SOM with methodology and sources

No coding required. These are markdown files. Claude Code reads them and knows what to do.

---

## Before you install

You need:
- **Claude Code** installed ([claudecodeguide.dev](https://claudecodeguide.dev) has a beginner-friendly setup guide)
- A terminal (macOS Terminal, iTerm2, Warp, or the terminal built into VS Code all work)
- A Claude subscription or Anthropic API key (required for Claude Code itself)

That's it. PM Pilot is pure markdown — no Node.js, no Python, no build step.

---

## Install (5 minutes)

### Step 1: Clone PM Pilot

Open your terminal and run:

```bash
git clone https://github.com/mshadmanrahman/pm-pilot.git
cd pm-pilot
```

Don't have `git`? [Download it here](https://git-scm.com/downloads) — it's a one-time install.

### Step 2: Copy everything to Claude Code

```bash
# Create the directories Claude Code looks in
mkdir -p ~/.claude/skills ~/.claude/rules ~/.claude/agents ~/.claude/commands ~/.claude/memory

# Copy PM Pilot's skills, rules, agents, and commands
cp -r skills/* ~/.claude/skills/
cp -r rules/* ~/.claude/rules/
cp -r agents/* ~/.claude/agents/
cp -r commands/* ~/.claude/commands/

# Set up your memory file (this is where Claude remembers things about you)
cp memory/MEMORY-TEMPLATE.md ~/.claude/memory/MEMORY.md
```

### Step 3: Run the setup wizard

Open Claude Code in any directory and type:

```
/configure-pm-pilot
```

This will ask you a few questions (your company name, which tools you use) and configure everything automatically.

### Step 4: Try your first command

```
prep for my meeting with [someone's name]
```

Claude will ask you which sources to check (Jira, Slack, Calendar, etc.) if it doesn't have them connected yet. It still produces a useful briefing — it just uses what it has access to.

---

## Connecting your tools (optional, but powerful)

PM Pilot works immediately. But it gets dramatically more useful when Claude Code can see your actual work tools. You connect these through **MCP servers** — think of them as plugins that let Claude read from Jira, Slack, etc.

| Tool | What it unlocks | How to add |
|------|----------------|------------|
| **Jira / Confluence** | meeting-prep, weekly-status, deep-context | [Atlassian MCP](https://github.com/sooperset/mcp-atlassian) |
| **Slack** | meeting-prep, weekly-status, deep-context | [Slack MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/slack) |
| **Google Calendar** | meeting-prep (knows your schedule) | [GCal MCP](https://github.com/nspady/google-calendar-mcp) |
| **GitHub** | weekly-status, code context | [GitHub MCP](https://github.com/modelcontextprotocol/servers/tree/main/src/github) |
| **Granola** | people-sync (updates stakeholder files from meeting transcripts) | [Granola MCP](https://granola.ai) |

**No MCP servers connected?** Skills like `market-sizing`, `prd`, `prioritize`, `critique`, `writing-style`, and `tdd-workflow` work with zero external connections. Start there and add integrations as you go.

---

## What you can do with PM Pilot

### Before a meeting

```
prep for my 1:1 with Sarah
```

Pulls recent interactions from Jira, Slack, and Calendar. Surfaces what Sarah is working on, what you owe her, what she owes you, and three suggested talking points. If you've filled in your [org survival map](#optional-power-files), it also shows political context — what Sarah actually wants from this meeting, and how to frame it.

### After a meeting

```
sync people from the product review meeting
```

Reads your Granola transcript. Updates each participant's stakeholder file with what they said, what they pushed back on, and what they committed to. Flags unresolved commitments from past meetings.

### Every week

```
weekly status
```

Generates your accomplishment report from actual completed tickets, merged PRs, and meeting outcomes. Not from memory — from connected systems.

### For any product decision

```
write a PRD for [feature]
```

PM Pilot won't open a template immediately. It asks for your messy thinking first — the contradictions, the uncertainties, the things you haven't figured out yet. Then it structures it. You get better docs because the thinking happens before the formatting.

### For strategy and research

```
size the market for AI-powered PM tools
```

```
competitive analysis of [product]
```

```
tell me everything about Project X
```

---

## How the memory system works

Claude Code forgets everything between sessions by default. PM Pilot fixes this with a structured memory system — a set of files Claude reads at the start of every session.

```
~/.claude/memory/
  MEMORY.md              ← always loaded, under 200 lines — your current projects and people
  project_*.md           ← one file per project you own
  feedback_*.md          ← corrections you've made (so Claude doesn't repeat mistakes)
  user_*.md              ← your preferences and working style
  people/                ← one file per key person (grows after every meeting)
    sarah-chen.md
    marco-vidal.md
```

**Day 1:** Memory is empty. You explain your projects once.  
**Day 5:** Memory has your projects, people, and preferences. Much less explaining.  
**Day 15:** Patterns and lessons saved. Almost zero re-explaining.  
**Day 30:** New sessions start with full context. You just say what to do.

The key insight: every correction you make gets saved. You tell Claude something once — it doesn't repeat the same mistake.

### Optional power files

Two additional files that compound over time. Copy from the templates to activate:

| File | What it does |
|------|-------------|
| `memory/org-survival-template.md` → `~/.claude/memory/org-survival.md` | Power map of key stakeholders: what they actually want, their risk patterns, how to approach them. Read automatically by `meeting-prep`. |
| `memory/judgment-log-template.md` → `~/.claude/memory/judgment-log.md` | Track PM judgment calls with Brier scores before the outcome is known. Watch your calibration improve over time. |

```bash
cp memory/org-survival-template.md ~/.claude/memory/org-survival.md
cp memory/judgment-log-template.md ~/.claude/memory/judgment-log.md
```

---

## Full skill reference

### PM Core

| Skill | How to trigger it | What it does |
|-------|------------------|--------------|
| `meeting-prep` | "prep for my meeting with X" | Briefing from Jira, Slack, Calendar + political context from your org survival map |
| `people-sync` | "sync people from meeting" | Reads Granola transcript → updates per-person stakeholder files with positions, pushbacks, commitments |
| `weekly-status` | "weekly status" | Accomplishment report from connected systems — not from memory |
| `deep-context` | "tell me everything about X" | Cross-channel research across all connected tools |
| `market-sizing` | "size the market for X" | TAM/SAM/SOM with data sources and clear assumptions |
| `ask-company` | "who owns X at my company" | Enterprise knowledge assistant (configure for your org) |
| `dogfood` | "dogfood this app" | Systematic QA with bug reports and repro steps |
| `lenny-podcast` | "what does Lenny say about X" | Search 269+ PM podcast episodes for relevant advice |
| `prd` | "write a PRD for X" | Braindump first, then structure — one-pagers, briefs, full PRDs, or RFCs |
| `prioritize` | "rank these features" | Score with RICE, ICE, WSJF, MoSCoW, Kano, or Value/Effort |
| `synthesize-interviews` | "synthesize these interviews" | Themes, pain points, and recommendations from raw interview notes |
| `critique` | "critique this doc" | Pressure-test any document for logic gaps, assumptions, and completeness |

### Productivity

| Skill | How to trigger it | What it does |
|-------|------------------|--------------|
| `session-init` | "resume" or start of day | Reads memory and handoffs to restore context — no cold starts |
| `handoff-doc` | "create a handoff" | Captures decisions, blockers, and next steps for session continuity |
| `strategic-compact` | (proactive) | Suggests context compaction at logical milestones |
| `orchestrator` | "orchestrate this" | Decomposes complex work into parallel sub-agent waves |
| `manifest-reader` | "what did agents find" | Summarizes results from sub-agent research |
| `meta-observer` | "observe my skills" | Tracks skill performance and emerging workflow patterns |

### Dev (for PMs who write code)

| Skill | How to trigger it | What it does |
|-------|------------------|--------------|
| `tdd-workflow` | when writing new code | Enforces test-first development: RED → GREEN → REFACTOR |
| `verification-loop` | "verify" or before commits | Lint, type-check, test, security scan in sequence |
| `search-first` | before implementing anything | Research existing solutions before writing new code |
| `security-review` | after writing auth or API code | OWASP checklist with severity ratings |

### Content

| Skill | How to trigger it | What it does |
|-------|------------------|--------------|
| `market-research` | "competitive analysis of X" | Source-attributed market and competitor research |
| `writing-style` | writing long-form content | Applies your voice profile to drafts |
| `writing-substack` | "write a Substack Note" | Platform-optimized short-form content |

### Slash commands

| Command | What it does |
|---------|--------------|
| `/plan` | Create implementation plan, wait for approval before coding |
| `/code-review` | Review staged changes for quality, security, maintainability |
| `/verify` | Full verification: lint + test + security |
| `/tdd` | Enforce test-driven development for a feature |

### Agents

| Agent | What it does |
|-------|--------------|
| `planner` | Phased implementation planning with risk analysis |
| `code-reviewer` | Code quality and security review |
| `build-error-resolver` | Fix build errors with minimal diffs |
| `tdd-guide` | Enforce RED-GREEN-REFACTOR cycle |
| `file-analyzer` | Summarize logs and verbose outputs |

---

## Troubleshooting

### "Skills not showing up"

Skills need to be in the right directory. Check:

```bash
ls ~/.claude/skills/pm-core/meeting-prep/SKILL.md
```

If missing, re-run the copy commands from Step 2. Restart Claude Code after.

### "meeting-prep returns nothing useful"

This skill pulls from connected tools (Jira, Slack, Calendar). If none are connected, it will tell you what's missing and do its best with what's available. Add MCP servers to unlock the full briefing.

### "Memory not loading between sessions"

MEMORY.md needs to be in a location Claude Code auto-loads:
- Works everywhere: `~/.claude/memory/MEMORY.md`
- Works in one project: `.claude/memory/MEMORY.md` in your project root

### "Context filling up too fast"

PM Pilot's rules use only ~950 tokens total — they're not the culprit. If sessions are filling up:
1. Use `strategic-compact` to compact at natural milestones
2. Use `handoff-doc` to save state, then `/clear` to start fresh
3. Use `orchestrator` to move research into sub-agents

---

## Philosophy

1. **Braindump before structure.** Never open a template before the thinking is externalised.
2. **Memory over transcripts.** A 200-line MEMORY.md beats a 50K-token session replay.
3. **Skills load on demand.** 25 skills, zero startup cost.
4. **Rules are compressed.** ~950 tokens, not 9,500.
5. **Every session compounds.** Corrections become rules. Meetings become stakeholder intelligence.

---

## Part of the PM Toolkit Family

| Tool | What it does |
|------|-------------|
| **PM Pilot** | **You are here** — Claude Code configured for PMs |
| [Bug Shepherd](https://github.com/mshadmanrahman/bug-shepherd) | Zero-code bug triage with parallel AI agents |
| [Tech-to-PM Translator](https://github.com/mshadmanrahman/tech-to-pm-translator) | Convert developer docs into PM-friendly knowledge bases |
| [Morning Digest](https://github.com/mshadmanrahman/morning-digest) | AI-powered daily briefing from calendar, email, and Slack |

---

## Contributing

PRs welcome. To add a skill:
1. Create `skills/category/your-skill/SKILL.md`
2. Follow the frontmatter format (name, description, origin, version) from any existing skill
3. Include: clear triggers, step-by-step procedure, output format
4. Keep under 200 lines

## License

MIT

---

*Built by a PM, for PMs. Pure markdown, no build step, no dependencies.*
