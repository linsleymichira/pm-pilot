# Judgment Log

_Brier score calibration. Log a prediction before the outcome. Score it after. Track whether your PM intuition sharpens over time._

---

## Why This Exists

PMs make dozens of judgment calls a week. Most go untracked. The ones you get right feel obvious in hindsight. The ones you get wrong get rationalised. This log breaks that loop.

**Brier score:** Measures prediction accuracy. Lower = better calibrated.
- `0.0` = perfect prediction
- `0.25` = random guessing  
- `1.0` = confidently wrong

**Formula:** `(confidence − actual)²` where actual = 1 if correct, 0 if wrong.
**Example:** 80% confident, prediction was correct → (0.8 − 1)² = 0.04

---

## How to Log

**New prediction** — add a row, leave Outcome/Score/Notes blank:

| Date | Prediction | Confidence | Domain | Outcome | Score | Notes |
|:-----|:-----------|:-----------|:-------|:--------|:------|:------|
| YYYY-MM-DD | {What you predict will happen} | {50–95%} | {domain} | | | |

**Scoring** — when outcome is knowable, fill in:
- **Outcome:** What actually happened (1 sentence)
- **Score:** `(confidence − actual)²`
- **Notes:** What you missed, what you got right

**Confidence scale:** 50% = total uncertainty. 95% = near certain. Never use 100%.

---

## Active Predictions

| Date | Prediction | Confidence | Domain | Outcome | Score | Notes |
|:-----|:-----------|:-----------|:-------|:--------|:------|:------|
| | | | | | | |

---

## Resolved Predictions

_Move here when outcome is known._

| Date | Prediction | Confidence | Domain | Outcome | Score | Notes |
|:-----|:-----------|:-----------|:-------|:--------|:------|:------|
| | | | | | | |

---

## Running Calibration

| Quarter | Predictions | Avg Score | Trend |
|:--------|:-----------|:----------|:------|
| | | | |

---

## Domains to Track

- **Product bets** — Will feature X move metric Y?
- **Stakeholder reactions** — Will {person} push back on this?
- **Technical estimates** — Will this take longer than estimated?
- **Org dynamics** — Will this initiative get approved / killed / deprioritised?
- **Growth** — Will this channel / experiment hit the target?
