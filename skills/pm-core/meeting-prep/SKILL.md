---
name: meeting-prep
description: |
  Pre-meeting context gathering across all connected systems. Pulls recent interactions, open items, and suggested talking points for any person or topic. Triggers on: "meeting prep", "prep for my meeting", "meeting with X", "prep for 1:1".
origin: pm-pilot
version: 1.0.0
---
## Execution

1. Resolve target (simple, single decision)

- If the user supplies a **person name**, use that as the search target.
- If the user supplies a **topic or meeting name**, use that as the query.
- If **no input**, fetch the next calendar event and use its attendees/title.
 - If the user provides none of the three input types (person name, topic, or calendar event), fetch the next calendar event and use its attendees/title.
 - If the fetched calendar event lacks a title or attendee list, prompt the user to provide additional context (person name or topic) before proceeding.

2. Quick local context (person-only)

- For a person target, attempt only two local reads: `memory/org-survival.md` and `memory/people/{name}.md`.
- Extract a 1–3 line "Political Context" from `org-survival.md` if present and recent commitments/preferences from the `people` file.
- Skip silently if files are missing.

3. Parallel data-gathering (independent tasks)

- Fire independent searches and record success/failure for each:
  - Calendar (person events in last 14 days / event by title for topic)
  - Jira (assignee/reporter or text search; 14d for people, 30d for topics)
  - Slack (messages mentioning person/topic)
  - Confluence (pages edited or mentioning topic)
  - GitHub (PRs/issues by person or mentioning topic)
  - Gmail (threads involving person/topic)

4. Synthesize

- Deterministically merge results: deduplicate, prioritize recent items, and populate the Prep Doc template below. Cite sources for each item. Do not include speculation.

- If all sources return no results, inform the user and suggest they either provide additional input or review their personal notes; do not create an empty prep doc.

5. Save and surface

- Save the full prep doc to the vault using the filename/frontmatter rules and routing rule described below.
- Immediately display the prep doc inline and confirm the saved path with one line: `Saved: {path}`.

- If the chosen/default vault location is inaccessible or the user declines to choose a location, save the file temporarily to a fallback directory (for example `/tmp/Meetings/`) and notify the user with the temporary path.

6. Time-sensitive shortcut

- If meeting starts in <10 minutes, output the top 3 time-sensitive talking points first, then the full doc.

Rules: prefer recent data, cite sources, respect privacy, and keep the output scannable (2-minute read).

**Filename convention:** `YYYY-MM-DD {Short Title}.md`  matches existing notes like `2026-05-04 Seve 1:1.md`, `2026-05-08 Weekly Data Workshop.md`. Use the meeting summary from Calendar for `{Short Title}` (drop redundant phrases like "TB" only if the calendar event itself doesn't use them). Replace `/` with ` ` (e.g., `Linsley / William TB` → `Linsley William TB`).

**Frontmatter:** Match the vault convention from `.claude/CLAUDE.md`:

```yaml
---
title: YYYY-MM-DD {Short Title} (Pre-meeting Prep)
type: reference
tags: [JDFinishLine, Meetings, {PersonOrTopic}, ...]
status: active
created: YYYY-MM-DD
updated: YYYY-MM-DD
---
```

**Path resolution / routing rule:**

Route by attendee email domain: if any attendee has an email address ending with `@jdna.com` (JD North America), save to `3 Work & Wealth/Career/0 JD Finish Line/Meetings/`. Otherwise, prompt the user to choose a save location from their vault. If the user doesn't choose, save to a default `Meetings` folder in the root of the vault. If that default is inaccessible, use the fallback directory described above.

**After saving:**
1. Confirm the absolute path in the conversation (one line: `Saved: {path}`).
2. Display the full prep doc inline in the terminal — the user needs to scan it without opening the file.
3. If the meeting is <10 minutes away, lead the response with the time-sensitive talking points, not the metadata.

## Output Format

The vault file uses the structure below verbatim. The terminal display can compress sections that are empty or boilerplate, but the saved file should be the full structured artifact.

```markdown
# Meeting Prep: {Person or Topic}
**For:** {Meeting name if known} | **When:** {Time if known}

## Political Context _(person-based, if found in org-survival.md)_
- {What they want from this interaction}
- {Any risk or tension to navigate}
- {Recommended framing or approach}

## Last 3 Interactions
1. **{Date}** ({source}): {1-2 sentence summary}
2. **{Date}** ({source}): {1-2 sentence summary}
3. **{Date}** ({source}): {1-2 sentence summary}

## They're Waiting On You
- {Action item you owe them, with source}
(If none found: "Nothing outstanding found.")

## You're Waiting On Them
- {Action item they owe you, with source}
(If none found: "Nothing outstanding found.")

## Their Current Focus
- {What they're working on based on Jira/GitHub/Slack}

## Open Threads
- {Unresolved Slack threads or email chains}
- {Blocked Jira issues}

## Suggested Talking Points
1. {Based on open items and recent activity}
2. {Based on unresolved threads}
3. {Based on upcoming deadlines or decisions}
```

## Rules

**Priority rules** (apply first)

- **Respect privacy**: Only include conversations where the user is a participant.
- **No speculation**: Only include items found in actual sources; omit empty sections.
- **Cite sources**: Always note where information came from.

**Operational rules**

- **Recency bias**: Prefer last 14 days for people, last 30 days for topics.
- **Keep it scannable**: Structure content for a 2-minute read before a meeting.

## Fallback

If MCP tools are unavailable:
1. Note which sources were unreachable.
2. Produce the prep doc with whatever was found.
3. Suggest the user check those sources manually.
