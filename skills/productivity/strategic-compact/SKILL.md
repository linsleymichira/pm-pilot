---
name: strategic-compact
description: Monitor context usage and suggest compaction at logical milestones
origin: pm-pilot
version: 1.0.0
triggers:
  - proactive when context exceeds 60%
  - compact
  - context getting long
---

# Strategic Compact

Proactively manage context window to prevent degraded performance in long sessions.

## When to Use

Decision tree (ordered):

- If estimated context usage >= 80%: recommend immediate compaction unless a confirmed milestone exists or the user explicitly forbids it.
- Else if estimated context usage >= 60%: prepare for compaction and recommend at the next confirmed milestone; surface risks if no milestone.
- Else if a confirmed milestone just completed (see milestone definition): recommend compaction even if usage <60%.
- Else when responses feel slower or less precise, or before starting a fundamentally different task: consider compaction.

Notes:
- If the user explicitly requests compaction now despite missing preconditions, present missing preconditions, risks, and request explicit confirmation. If the user confirms, provide step-by-step persistence instructions and then proceed.
- "Confirmed milestone" is defined in Procedure step 2.

## Procedure

1. **Assess Context State**
    - Compute context usage by counting tokens with the active model's tokenizer and dividing by the model's maximum context length; report an integer percent (e.g. 65%).
       - If precise token counting is unavailable, fall back to: `estimated_tokens = message_count * avg_tokens_per_message` and mark the result as an estimate.
       - If that is unavailable, fall back to `total_characters / model_max_chars` and mark as an estimate.
    - Identify which content is load-bearing vs stale using these defaults (unless the user specifies otherwise):
       - Load-bearing: referenced in the last 10 messages, referenced by an open task, or contains an unresolved decision.
       - Stale: not referenced in the last 25 messages and older than 72 hours.

2. **Identify Compaction Point**
   Suggest compaction at confirmed milestones. A "confirmed milestone" is one of the following (ask a clarifying question if uncertain):
   - Planning milestone: plan documented with >=3 concrete steps or >=2 named decisions and explicit confirmation that decisions are final.
   - Implementation milestone: code committed and tests passing (or CI green) with explicit confirmation.
   - Handoff/triage milestone: triage results documented and owners assigned.
   - Mode switch: moving from implementation to review, or from planning to implementation, with explicit confirmation.

   If uncertain whether a milestone has been reached, ask one clarifying question such as: "Has the implementation phase been committed and tests passed?" before recommending compaction.

3. **Preserve Key State**
   Before recommending `/clear`, ensure persistence using this prioritized checklist (stop if a hard requirement fails):

   Priority checklist:
   1. Handoff doc exists containing: (a) active task title and status, (b) key decisions with rationale, (c) open todos with owners, (d) file paths and commit refs for uncommitted changes. If any field is missing, do not recommend `/clear`.
   2. Work committed or stashed. If committing/stashing is unavailable (no VCS or insufficient permissions), DO NOT recommend `/clear`; instead produce a recovery package (diffs and file list) and explicit manual persistence instructions.
   3. `tasks/todo.md` updated with current state and owners.

   Fallbacks / error handling:
   - If the system cannot write a handoff doc automatically (permissions, remote limitations), generate a clipboard-ready handoff summary and explicit instructions for manual persistence; do not recommend `/clear` until the user confirms persistence.
   - If the user explicitly requests compaction despite missing preconditions, present the missing preconditions and risks, request explicit confirmation, and if confirmed provide step-by-step persistence instructions before proceeding.

4. **Suggest Compaction**
   Output:
   ```
   Context check: ~{percent}% used
   Milestone: {what was just completed}
   Recommendation: {compact now / safe to continue / approaching limit}

   Before /clear:
   - [ ] Handoff doc exists with required fields
   - [ ] Work committed or stashed (or recovery package created)
   - [ ] Todo updated and owners assigned
   ```

5. **Post-Compaction Recovery**
   After `/clear`, use `session-init` skill to restore context.

## Output Format

```
Context check: ~65% used
Milestone: Implementation phase complete
Recommendation: Good time to compact before code review

Before /clear:
- [ ] Handoff doc written
- [ ] Work committed (3 files)
- [ ] Todo updated
```

## Rules

 - Proactively monitor and recommend compaction, but never perform destructive actions without explicit user confirmation.
 - Prefer recommending compaction when usage >= 60%. If usage reaches >= 80%, recommend immediate compaction unless a confirmed milestone exists or the user explicitly forbids it.
 - Do not recommend compacting mid-task unless the user explicitly requests it and confirms understanding of missing preconditions and risks.
 - Always ensure a structured handoff doc exists before recommending `/clear`. A valid handoff doc contains: (1) active task title and status, (2) key decisions with rationale, (3) open todos with owners, (4) file paths and commit refs for uncommitted changes.
 - If persistence actions (commit/stash/write) are impossible, produce a recovery package and clipboard-ready handoff summary; do not recommend `/clear` until the user confirms persistence.
 - The last 20% of the context window tends to produce degraded output; treat this as a heuristic, not an automatic trigger.
