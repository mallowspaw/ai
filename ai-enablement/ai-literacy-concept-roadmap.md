# Enterprise AI Literacy Program — Concept & 12-Month Roadmap

**Prepared for:** Center of Excellence for AI
**Context:** 2,000–10,000 employees, Germany · Enterprise AI licenses deployed to all · CoE capacity: 1 lead + 1–2 people · Budget: internal resources only · Works council informed and supportive · CEO expects hard numbers in 6–12 months

---

## 1. The Strategy in One Paragraph

Run a **tiered, federated literacy program**: your 3-person CoE trains and operates a network of ~1 champion per 50 employees, who deliver role-specific enablement inside their own functions, on top of a mandatory 2–3 hour foundational module that every employee completes (which simultaneously discharges your EU AI Act Article 4 obligation). Success is measured by three hard numbers the CEO signs off on in Week 2 — **weekly active usage (aggregate telemetry), foundational training completion, and measured cycle-time reduction on 5–10 instrumented workflows** — not by self-reported "hours saved," which does not survive scrutiny. Realistic 12-month targets: **≥90% training completion, 60–75% weekly active users (from a casual-use baseline), and 20–30% cycle-time reduction on the instrumented workflows.**

The federated model is not a preference; it is arithmetic. Three people cannot classroom-train thousands in a year. They *can* run a curriculum factory, a champion network, and a measurement system.

---

## 2. Scope Decision (Made, Not Deferred)

The CEO's mandate contains five goals. Trying to hit all five equally with 3 people guarantees hitting none. The program covers, in priority order:

| Priority | Goal | Treatment in Year 1 |
|---|---|---|
| 1 | Compliance / safe use (EU AI Act Art. 4) | Fully covered — mandatory foundational module |
| 2 | Critical thinking (bias, hallucinations) | Fully covered — embedded in foundational + practice formats |
| 3 | Everyone uses AI daily | Fully covered — champion network + use-case library |
| 4 | Measurable productivity gains | Covered on **instrumented workflows only** (see §5) |
| 5 | Building AI-driven products/processes | **Descoped to a pilot**: one "Builder" cohort of 15–25 people in Q4. Full builder enablement is a Year 2 program. |

**Action item:** Get the CEO to sign this scope table in your Week 2 alignment meeting. If goal 5 must be Year 1 at full scale, the CEO must fund it — it cannot come out of a 3-person team.

Note: Article 4 of the EU AI Act (AI literacy obligation for providers and deployers) has applied since 2 February 2025. Your foundational module is the auditable evidence of compliance — this is the regulatory backbone that makes the training *mandatory* rather than optional, which is what gets you to 90%+ completion.

---

## 3. The Literacy Architecture: Three Tiers

**Tier 1 — Foundational (all employees, mandatory, ~2–3h).**
Content: what generative AI is and isn't; company AI policy and approved tools; data protection rules (what may never go into a prompt); hallucinations, bias, and verification habits; EU AI Act basics relevant to their role; 3–5 hands-on exercises in the licensed tool. Delivered as self-paced e-learning + a live 60-minute session run by champions. Completion tracked in the LMS — this is your Art. 4 evidence and one of your three KPIs.

**Tier 2 — Applied (role-based, opt-in-then-nudged, ~8–12h over a quarter).**
Function-specific tracks (e.g., Finance, HR, Sales, Engineering, Operations) built around 5–10 documented use cases per function. Formats: champion-led workshops, weekly office hours, a searchable internal use-case library, and quarterly "prompt-a-thon" style working sessions where teams redesign one real workflow. This tier is where daily usage habits form — mandatory e-learning alone does not change behavior (this is one of the most robust findings in the training-transfer literature; see §7).

**Tier 3 — Builder (pilot cohort, Q4, 15–25 people).**
Automation, custom GPTs/agents, workflow integration. Explicitly a pilot to generate Year 2 scope and budget justification.

---

## 4. The Delivery Engine: Champion Network

- **Ratio:** 1 champion per ~50 employees → 60–150 champions depending on your exact headcount.
- **Recruitment:** You already have broad casual usage — recruit from the visible enthusiasts. Applications, not appointments; managers confirm.
- **The non-negotiable:** Each champion gets a **formal 5–10% time allocation agreed with their manager in writing**. Unfunded volunteer networks decay within two quarters. This is a go/no-go gate for the whole program (see adversarial pass, §8). Since you have no cash budget, *manager-granted time is the currency* — secure a CEO email to all managers mandating it.
- **What champions do:** run the Tier 1 live sessions and Tier 2 workshops for their area, host office hours, feed use cases into the central library, and act as the local escalation point for policy questions.
- **What the CoE does:** trains champions (monthly 2h train-the-trainer sessions), builds all content once centrally, runs the measurement system, and maintains the use-case library. You build; they distribute.
- **Retention mechanics (zero-budget):** quarterly CEO recognition, a visible internal title/badge, and first access to new tools/features.

**Evidence flag:** Champion/multiplier models are the standard mechanism in enterprise adoption playbooks (Microsoft's Copilot adoption guidance, Prosci-style change management) and match your capacity math, but the supporting evidence is practitioner/vendor experience, not controlled studies. The load-bearing part — that unpaid, un-timed champions burn out — *is* well observed; hence the time-allocation gate.

---

## 5. Measurement: The KPI Contract

Renegotiate "hard numbers" with the CEO in Week 2 into three metrics you can actually defend:

| KPI | Definition | How measured | 12-month target |
|---|---|---|---|
| **Training completion** | % of workforce completing Tier 1 | LMS records (also your Art. 4 audit trail) | ≥ 90% |
| **Active adoption** | % weekly active users of the licensed AI tool | Admin telemetry, **aggregated to groups of ≥5, never individual** (works council agreement, see below) | 60–75% |
| **Workflow impact** | Cycle-time reduction on 5–10 instrumented workflows | Before/after time measurement on selected real processes (e.g., first-draft creation, ticket triage, report preparation), measured with the owning team | 20–30% on those workflows |

**Why not "hours saved" company-wide:** self-reported time savings are systematically inflated and unverifiable; presenting them to a numbers-driven CEO sets you up to be dismantled by the first skeptical CFO question. Instrumented workflows give smaller but *defensible* numbers. The 20–30% target range is grounded in controlled studies of generative AI on knowledge-work tasks (e.g., Noy & Zhang's randomized experiment published in *Science* 2023 found professional writing tasks completed substantially faster with higher quality; the Dell'Acqua et al. 2023 field experiment with BCG consultants found consultants using GPT-4 completed tasks faster and at higher quality — *on tasks inside the model's capability frontier*). **Flag:** these effects are task-specific ("jagged frontier"); pick instrumented workflows that resemble the studied task types (drafting, summarizing, analysis) for Year 1, and expect weaker effects elsewhere.

**Works council:** You have support — convert it into a written agreement (Betriebsvereinbarung or addendum) in Phase 0 covering: aggregate-only telemetry (minimum group size 5), no individual performance evaluation from AI usage data, and the mandatory-training designation. Doing this early prevents the program's single most likely legal stall.

**Baseline:** Measure all three KPIs in Weeks 2–4, before any intervention. Without a baseline, "dramatic improvement" is unprovable.

---

## 6. The 12-Month Roadmap

### Phase 0 — Contract & Baseline (Weeks 1–4)
1. **KPI contract meeting with CEO:** present §2 scope table and §5 KPI table; get written sign-off. *(Owner: you)*
2. **CEO mandate email drafted and sent:** announces the program, mandates Tier 1 completion, and instructs managers to grant champion time allocations. *(Owner: you, CEO sends)*
3. **Works council agreement** on aggregate telemetry + mandatory training. *(Owner: you + HR)*
4. **Baseline measurement:** pull current weekly-active telemetry; run a short (≤10 question) self-assessment survey on AI confidence/knowledge; document current policy gaps. *(Owner: team member 1)*
5. **Select 5–10 instrumented workflows** with 3–4 friendly department heads; record current cycle times. *(Owner: team member 2)*

**Gate:** No signed KPI contract or no manager time-allocation mandate → escalate before proceeding. Do not build content into a vacuum.

### Phase 1 — Build & Pilot (Months 2–3)
6. **Build Tier 1 module** internally. Zero-budget approach: curate from free vendor academies (Microsoft Learn / OpenAI Academy / Anthropic courses, depending on your licensed stack) + a company-specific layer (your policy, your data rules, your tools, your examples). The company-specific layer is the part that matters; the generic AI explainer content is commodity. *(Owner: team, ~4 weeks)*
7. **Recruit champions:** open application, manager confirmation, target 1:50 ratio. *(Owner: you)*
8. **Train-the-trainer cohort 1:** two 2-hour sessions; give champions a ready-made session kit (slides, exercises, FAQ) so delivery quality doesn't depend on individual talent. *(Owner: you)*
9. **Pilot Tier 1 in 2–3 departments** (~200–400 people), including the live champion-led session. Collect completion friction data and fix the module. *(Owner: team)*
10. **Stand up the use-case library** (existing intranet/SharePoint — no new tooling): submission template, 20 seed use cases from the pilot departments. *(Owner: team member 2)*

### Phase 2 — Scale Rollout (Months 4–6)
11. **Company-wide Tier 1 rollout** in waves by division; champions run live sessions; LMS tracks completion; monthly completion dashboard to executives. Target: 70% completion by end of Month 6. *(Owner: champions, orchestrated by CoE)*
12. **Weekly office hours** begin in every function. *(Owner: champions)*
13. **Launch Tier 2 tracks** for the 3 functions with the strongest pilot engagement — don't launch all functions at once. *(Owner: team)*
14. **First prompt-a-thon:** each participating team redesigns one real workflow; winners presented to the CEO. This doubles as sourcing for instrumented workflows. *(Owner: you)*
15. **Mid-point telemetry read** vs. baseline; course-correct laggard divisions via their champions and division heads, not via CoE policing. *(Owner: team member 1)*

### Phase 3 — Deepen & Measure (Months 7–9)
16. **Tier 2 for remaining functions.**
17. **Instrumented workflow measurement:** re-measure cycle times on the 5–10 workflows after teams have completed Tier 2. Document method honestly (what was measured, sample size, confounds). *(Owner: team member 2)*
18. **Critical-thinking reinforcement:** monthly "spot the hallucination" exercises pushed through champions; incident-based learning from real internal near-misses (anonymized). *(Owner: team)*
19. **Champion health check:** survey time-allocation reality; replace or re-negotiate where managers have quietly withdrawn time. Expect 15–25% churn; recruit replacements continuously. *(Owner: you)*

### Phase 4 — Prove & Institutionalize (Months 10–12)
20. **Builder pilot (Tier 3):** 15–25 person cohort, one automation/agent project each, demo day with CEO. Output = Year 2 business case. *(Owner: you)*
21. **Final measurement & CEO report:** three KPIs vs. baseline, workflow case studies with named owners, compliance evidence pack (Art. 4). *(Owner: team)*
22. **Institutionalize:** Tier 1 becomes part of onboarding; use-case library and office hours become standing operations; refresh cycle defined (content review every 6 months — AI tooling changes fast enough that annual is too slow). *(Owner: team)*
23. **Year 2 proposal:** builder program at scale + budget request, backed by Year 1 numbers. *(Owner: you)*

---

## 7. Evidence Basis (Anti-Bullshit Ledger)

| Element | Evidence status |
|---|---|
| EU AI Act Art. 4 literacy obligation (applies since 2 Feb 2025) | **Verified regulation.** Makes mandatory training legally defensible and necessary. |
| Generative AI improves speed/quality on drafting-type knowledge work | **Strong:** randomized/controlled studies (Noy & Zhang 2023, *Science*; Dell'Acqua et al. 2023 BCG field experiment). Effects are task-specific — hence instrumented workflows, not blanket claims. |
| Mandatory e-learning alone doesn't change work behavior; practice + manager support does | **Moderate–strong:** decades of training-transfer research (e.g., Blume et al. meta-analyses) consistently show low transfer without application opportunities and supervisor support. Justifies Tier 2 + champion model. |
| Champion/multiplier networks scale adoption | **Practitioner evidence only** (vendor adoption playbooks, change-management practice). Plausible and capacity-necessary, but not RCT-backed. **Culture-dependent** — see §8. |
| Self-reported "hours saved" is unreliable | **Well-established** self-report bias; also easily attacked internally. Hence the KPI redesign. |
| Prompt-a-thons / hackathon formats drive engagement | **Unverified beyond anecdote.** Cheap to run, so included — but treat as an experiment, drop if Month 6 data shows no engagement lift. |
| 60–75% weekly-active target | **Estimate**, not benchmark science. Grounded in "everyone licensed + casual use already exists," but your baseline read in Phase 0 must calibrate it. If baseline is already 50%, raise the target; if 20%, lower it. |

---

## 8. Adversarial Pass — Three Load-Bearing Assumptions, Attacked

**Assumption 1: Champions will actually deliver.**
*Attack:* "Sixty to 150 volunteers with day jobs, no budget, no bonus — they'll show up for the kickoff and evaporate by Q3. Your entire delivery engine is goodwill."
*Verdict:* The attack lands against the naive version. **Revisions made:** (a) formal written 5–10% time allocation is a Phase 0 *gate*, backed by a CEO mandate email to managers — if that mandate isn't granted, the program design must change and the CEO must know the trade-off; (b) champion health check with expected 15–25% churn and continuous re-recruitment is built into Phase 3; (c) CoE provides ready-made session kits so champion effort is delivery, not creation. Residual risk stands and is flagged: this model's success is **culture-dependent** — in a culture where managers routinely ignore CEO mandates, it fails, and the honest fallback is a slower, division-by-division rollout with the CoE delivering directly (24 months, not 12).

**Assumption 2: Telemetry-based adoption KPIs are politically and legally viable.**
*Attack:* "The works council is 'supportive' until the first employee realizes their AI usage is visible in a dashboard. One escalation and your headline KPI is frozen."
*Verdict:* Partially lands. **Revisions made:** telemetry is specified as aggregate-only with a minimum group size of 5, individual data explicitly excluded from performance evaluation, and — the key change — this is converted from an informal understanding into a **written works council agreement in Phase 0**, before any dashboard exists. Supportive-but-unengaged is not the same as contractually committed.

**Assumption 3: You can show CEO-grade productivity numbers in 12 months.**
*Attack:* "Twenty to thirty percent on ten workflows measured by the teams themselves? Confounded, small-n, and cherry-picked. A skeptical CFO shreds this in one meeting."
*Verdict:* Strongest attack, and it partially survives revision — so the claim is scoped down rather than defended. **Revisions made:** (a) the CEO report presents workflow numbers as *case studies with documented method and named process owners*, never extrapolated to company-wide savings; (b) workflows are selected in Phase 0 *before* the intervention with pre-registered baseline times, which kills the cherry-picking attack; (c) the report leads with the two clean numbers (completion %, aggregate adoption %) and positions workflow impact as directional evidence justifying Year 2 investment. If the CEO insists on a single company-wide euro figure, say plainly that no methodologically honest version of that number exists at this budget — that sentence, delivered in Week 2 rather than Month 12, is what protects your credibility.

---

## 9. Your First Five Actions (This Week)

1. Book the Week 2 CEO meeting; bring the scope table (§2) and KPI contract (§5).
2. Draft the CEO mandate email (training mandatory + champion time allocation).
3. Open the works council conversation about the written agreement on aggregate telemetry.
4. Pull the current usage telemetry from your license admin console — your baseline starts now.
5. Shortlist 3–4 department heads for the instrumented-workflow partnership and the pilot.
