# Technical Setup Guide — Part 2A: Memory Aggregation + Scout Agent

## A technical correction before we build

Make's native **Anthropic Claude** app (the "Create a Prompt" module you
connected in Part 1) does not reliably expose the `tools` parameter —
the thing that turns on web search. I confirmed this against Make's own
community forum rather than guess. So from here on, every agent call
goes through Make's generic **HTTP** module instead, where we write the
exact JSON body ourselves and get every feature the API offers,
including web search.

Your Part 1 work wasn't wasted — it proved your API key and billing are
live, which is the part that actually mattered. The HTTP module uses
the exact same key, just in a request header instead of a Make
connection popup.

**One-time setup: put your API key somewhere you won't retype it.**
In your scenario, add a **Tools → Set Variable** module as the very
first step (before the scheduler's target module, or right after it),
name it `anthropic_api_key`, value = your `sk-ant-...` key. Every HTTP
module from here on references `{{1.anthropic_api_key}}` instead of the
raw key — so if you ever rotate the key, you change it in one place.

---

## Module 0 (finish) — turn Sheet rows into a `<topic_memory>` text block

You already have **Google Sheets → Search Rows** connected and pulling
your seeded rows. Now aggregate its output into one text block the
agents can read.

1. Add a module: search **"Text Aggregator"** (a standard Make/Tools
   module — not app-specific).
2. **Source module**: select your Search Rows module.
3. **Row template** — this is what each row becomes as one line of
   text. Use:
   ```
   - date: {{date}} | event_key: {{event_key}} | priority: {{priority}} | lane: {{lane}} | thesis: "{{thesis}}" | hook: "{{hook}}" | status: {{status}}
   ```
   (Click into the field and map each `{{...}}` from the Search Rows
   module's output — don't hand-type the column names, map them, so
   Make wires the reference correctly.)
4. **Row separator**: newline (`\n` or literal Enter, depending on
   what the field offers).
5. Rename this module's output (in its module settings, top right —
   "Rename") to something memorable like `topic_memory_block`, so you
   can find it easily when mapping later modules.

✅ **Checkpoint:** Run once. The Text Aggregator's output should be one
multi-line string listing your seeded rows.

---

## Module 1 — The Scout (HTTP + web search)

### 1a. The HTTP call

1. Add a module: search **"HTTP"** → action **"Make a request"**.
2. **URL**: `https://api.anthropic.com/v1/messages`
3. **Method**: `POST`
4. **Headers** (add three):
   | Name | Value |
   |---|---|
   | x-api-key | `{{1.anthropic_api_key}}` (mapped, not typed) |
   | anthropic-version | `2023-06-01` |
   | content-type | `application/json` |
5. **Body type**: `Raw`
6. **Content type**: `JSON (application/json)`
7. **Request content** — type this structure, but for the two
   `"..."` placeholders below, click into the exact spot and use
   Make's mapping panel to insert the reference rather than typing —
   this is what makes Make auto-escape the quotes and line breaks in
   the long prompt text for you:

   ```json
   {
     "model": "claude-sonnet-5",
     "max_tokens": 4096,
     "system": "PASTE_SCOUT_SYSTEM_PROMPT_HERE",
     "messages": [
       {
         "role": "user",
         "content": "PASTE_TOPIC_MEMORY_REFERENCE_HERE"
       }
     ],
     "tools": [
       {"type": "web_search_20250305", "name": "web_search"}
     ]
   }
   ```
   For the `system` value: since the Scout prompt is static (it doesn't
   change per run), the cleanest approach is a **second Set Variable**
   module — add one right after the API-key one, name it
   `scout_system_prompt`, and paste the ENTIRE Scout prompt below into
   its value field as plain text (no escaping needed there — it's a
   plain textarea, not a JSON field). Then in the HTTP body, map
   `"system"` to `{{2.scout_system_prompt}}`.

   For the `content` value, map it to something like:
   `<topic_memory>\n{{3.topic_memory_block}}\n</topic_memory>`
   — with `{{3.topic_memory_block}}` mapped from your Text Aggregator,
   and the `<topic_memory>` tags typed literally around it.

### 1b. The exact Scout system prompt (paste into the Set Variable)

```
You are the Scout in a four-agent editorial pipeline that produces one
LinkedIn post per day for a thought leader in: AI in financial services,
AI strategy, AI culture, and AI management.

Your job is NOT to find "news." Your job is to find RAW MATERIAL FOR
OPINIONS — and to find it in the RIGHT ORDER. The pipeline runs on a
strict niche priority hierarchy. Everything that sits on page 1 of a
generic news search is usually Priority 4, the LOWEST tier. Your value
is measured by what you dig up for Priorities 1 and 2.

INPUT
The user message contains <topic_memory>: the last 30 published topics
(date, event_key, priority, thesis, hook). Read it FIRST.
- Never return an event that appears in <topic_memory>. Exception: a
  genuinely NEW development of a logged event (new numbers, new ruling,
  new dataset) — then the new development is the item and gets its own
  event_key.
- Use the log to steer your queries AWAY from covered ground.

PRIORITY HIERARCHY & MANDATORY SEARCH ORDER (work strictly top-down)
P1 — AI BUSINESS VALUE & IMPACT. Search FIRST; run at least 4 distinct
     queries here before you touch P4. You are hunting hard numbers,
     ROI, productivity metrics, named case studies. Hunting grounds:
     earnings-call transcripts and investor decks of banks, insurers,
     asset managers (AI claims WITH figures); BIS / ECB / IMF / NBER
     working papers; MIT Sloan, Stanford HAI, and other academic
     productivity studies; McKinsey/BCG/Bain/Deloitte reports that
     disclose methodology; vendor case studies only if the metrics are
     independently verifiable.
P2 — AI STRATEGY, GOVERNANCE & MANAGEMENT. At least 3 distinct queries.
     EU AI Act implementation steps and deadlines, BaFin / ECB / EBA /
     SEC / FCA / MAS guidance and enforcement, model-risk-management
     rules, board and C-suite surveys, governance frameworks in
     production.
P3 — AI CULTURE & ENABLEMENT. Adoption and workforce studies with
     outcomes, upskilling programs with reported results, human-in-the-
     loop practices, champion networks, credible reporting on internal
     AI policies.
P4 — AI TECHNOLOGY TRENDS & NEWS. Search LAST, only after the quotas
     above are met, and admit only major breakthroughs. A P4 item is
     admissible ONLY with a filled p123_implication field: the concrete
     consequence for business value, governance, or culture in
     financial services. A model release with no such consequence is
     not an item — drop it.

HARD QUOTA
Return at least 2 items from P1 or P2. If you genuinely cannot, your
output MUST include a search_log listing every query you ran for P1 and
P2 with a one-line result note. An output with fewer than 2 P1/P2 items
and no search_log is invalid and will be rejected downstream.
If the user message contains the flag P1_FORCED: spend the entire run
on P1 and P2. Go one layer deeper — named institutions' latest earnings
calls, specific regulators' publication pages, this week's working
papers — and return whatever qualifies, even if only 3 items total.

SOURCE RULES
- Primary sources over aggregators: regulator publications, papers,
  earnings transcripts, original journalism (FT, Bloomberg, Reuters,
  Handelsblatt), official blogs
- Discard: listicles, "top 10 tools" content, vendor press releases
  with no verifiable claim, anything you cannot date
- For every item, capture the specific number, quote-paraphrase, or
  mechanism that makes it concrete. "Banks are adopting AI" is
  worthless. "Study X: N participants, productivity +Y% on task Z" or
  "Regulator R now requires D documented per production model" is gold.

FRESHNESS
News items: ≤72h (prefer ≤24h). P1 studies and case-study material:
up to 14 days old is acceptable if absent from <topic_memory> — durable
evidence beats stale-but-viral news.

FOR EACH ITEM, ASSESS DISCOURSE POTENTIAL
- consensus_forming: the lazy/majority take everyone will post about
  this (one sentence)
- attack_surface: what is genuinely questionable about that take (one
  sentence; attack the IDEA, never a person or company)

SELF-DECLARED OVERLAP CHECK
For each item, name the closest row in <topic_memory> and classify the
overlap: none | weak | same-entity | same-event. Items you yourself
classify as same-event must not be returned at all.

OUTPUT FORMAT — HARD RULES
- Your response must contain NOTHING before the JSON: no sentence
  describing your plan, no acknowledgment of the task. The very first
  character you output must be `{`.
- Do NOT wrap the JSON in a code fence (no ```json, no ```). Output raw
  JSON only, nothing else.
- Do NOT include <cite> tags, citation indices (e.g. "1-4"), or any
  citation markup inside JSON string values. Citations are added
  automatically by the search tool for your own reasoning — strip them
  out and write plain prose in every field.
- If a search is blocked, fails, or you hit a tool-call limit, do NOT
  explain this in your text output — no "I've hit my limit but...", no
  reasoning about what you found and why it's sufficient. Silently
  proceed with whatever results you have and go straight to the JSON.
  Any commentary about your own process, at any point, is a failure.

OUTPUT — return ONLY valid JSON, no markdown fences, no preamble:
{
  "research_date": "YYYY-MM-DD",
  "items": [
    {
      "id": 1,
      "priority": "P1|P2|P3|P4",
      "headline": "plain-language, max 15 words",
      "what_happened": "2-3 sentences, concrete facts only",
      "hard_details": ["specific number/date/mechanism", "..."],
      "primary_source_url": "...",
      "event_key": "kebab-case canonical id, e.g. ecb-genai-guidance-2026-07",
      "p123_implication": "REQUIRED for P4 items, else null",
      "consensus_forming": "...",
      "attack_surface": "...",
      "freshness_hours": 24,
      "closest_memory_row": "event_key from <topic_memory> or 'none'",
      "overlap_estimate": "none|weak|same-entity|same-event",
      "discourse_score": 1-10
    }
  ],
  "search_log": [
    {"query": "...", "priority_targeted": "P1", "result": "one line"}
  ],
  "thin_day": false
}
Return 5-8 items. Never pad with weak items to hit a count; if the day
is thin, return fewer and set "thin_day": true.
```

8. **"Parse response"**: set to Yes/automatic if the HTTP module offers
   that toggle — it turns Claude's raw JSON reply into a structured
   Make object (`data.content`, etc.) instead of one big string.

✅ **Checkpoint:** Run once. You should get a `200` response. Click the
module's output — you'll see a `content` array. Because web search was
used, this array will likely contain several blocks (search calls,
search results, and finally Claude's own text) rather than just one.
That's expected — the next steps extract the part you actually want.

### 1c. Extracting Claude's final answer out of the tool-use response

This is the fiddly part, so we do it with plain, inspectable modules
rather than a clever one-line formula.

1. Add an **Iterator** (Flow Control tools) → source array = the HTTP
   module's `data.content`.
2. Immediately after it, add a **Filter** on the connection (click the
   small wrench/funnel icon on the line between Iterator and the next
   module) → condition: the Iterator's `type` field **Equal to**
   `text`. This drops every tool-search block and keeps only Claude's
   actual text output.
3. Add an **Array Aggregator** → source module = the Iterator →
   Target: **Text** → field = the Iterator's `text` output, no
   separator. (In the normal case exactly one block survives the
   filter, so this just hands you that one block's text as a plain
   string — but building it this way means it won't silently break if
   a future response happens to contain more than one text block.)
4. Add a **JSON → Parse JSON** module → source = the Array Aggregator's
   output string → for the schema, paste this sample so Make can build
   the field map:
   ```json
   {
     "research_date": "2026-07-10",
     "items": [
       {
         "id": 1,
         "priority": "P1",
         "headline": "string",
         "what_happened": "string",
         "hard_details": ["string"],
         "primary_source_url": "string",
         "event_key": "string",
         "p123_implication": "string",
         "consensus_forming": "string",
         "attack_surface": "string",
         "freshness_hours": 24,
         "closest_memory_row": "string",
         "overlap_estimate": "string",
         "discourse_score": 5
       }
     ],
     "search_log": [
       {"query": "string", "priority_targeted": "P1", "result": "string"}
     ],
     "thin_day": false
   }
   ```

✅ **Final checkpoint for this section:** Run the whole chain once.
The Parse JSON module's output should show you clean, individually
selectable fields — `items[]` with real research items in it,
`search_log[]`, `thin_day`. Open a couple of items and sanity-check
that the Scout actually tried P1/P2 first (check `search_log`) rather
than defaulting to tech news.

### Troubleshooting: "Source is not valid JSON"

If Parse JSON throws this error, it's almost always one (or a
combination) of three causes, all visible if you inspect the Array
Aggregator's raw output:

1. **A preamble text block.** Claude sometimes narrates before calling
   the tool ("I'll run one web search on...") — that's a second
   `type: text` block, which your Filter correctly lets through since
   it IS type text, but it isn't the answer you want.
2. **A markdown code fence.** Claude sometimes wraps its JSON in
   ```json ... ``` despite instructions not to.
3. **Truncation.** If the HTTP module's raw output shows
   `"stop_reason": "max_tokens"`, the response was cut off mid-JSON —
   no amount of cleanup fixes an incomplete object. Raise `max_tokens`.

Fix causes 1 and 2 structurally rather than trusting the prompt alone.
In the Parse JSON module's "JSON string" field, use this expression
instead of a plain mapped value (adjust the module number to match
your own Array Aggregator):
```
trim(replace(replace(get(9.array; length(9.array)).text; "```json"; ""); "```"; ""))
```
Reading it inside-out: `get(...; length(...))` grabs the **last** item
in the aggregated array — always Claude's real answer, never a
preamble, no matter how many blocks precede it. `.text` pulls its text
field. The two `replace()` calls strip a leading/trailing code fence if
one is present. `trim()` removes stray whitespace. This survives even
if a future response slips past the prompt's instructions again.

### If the error persists: prose INSIDE the last block itself

Sometimes Claude's final block isn't just fence-wrapped JSON — it's a
paragraph or two of reasoning (often "I've hit my tool call limit,
but..." style commentary) followed by the JSON. The fix above only
strips fence markers and multiple blocks; it can't strip an arbitrary
prose paragraph. If you're still seeing "Source is not valid JSON"
after applying it, this is almost certainly why.

**Check the likely root cause first:** if the iterator's output shows
`"error_code": "max_uses_exceeded"` on several search calls, your tool
definition's `max_uses` is still capped from TEST MODE (probably `1`)
while the full Scout prompt requires at least 4 P1 queries + 3 P2
queries before it even reaches P3/P4. Claude hits the wall and
explains why it's stopping — and that explanation is the prose
breaking your JSON. **Raise `max_uses` to something like 12–15.** This
matters beyond this bug too: a cap of 1 defeats the entire
priority-hierarchy quota system from the architecture redesign.

**Then add a regex safety net regardless** — don't rely on the prompt
alone, since Claude can add stray commentary even without hitting a
wall. Add a **Text Parser → Match Pattern** module between your
`get(...).text` extraction and Parse JSON, with pattern:
```
\{[\s\S]*\}
```
This matches from the **first** `{` to the **last** `}` in the string
and discards everything outside that range — any preamble sentence,
any trailing fence, regardless of wording or length, because it
doesn't care what the surrounding prose says, only where the JSON
object itself starts and ends. Run it once and inspect its output —
Make's Match Pattern module typically returns the match in an array;
map that matched value into Parse JSON's "JSON string" field instead
of the raw `get(...).text` expression.

---

## TEST MODE — a cheap Scout variant for functionality testing only

Use this while you're proving out the Make plumbing (extraction chain,
Parse JSON schema, downstream mapping). **Do not leave this in when you
go live** — it deliberately ignores the priority hierarchy and returns
whatever the first search turns up, which is fine for testing "does the
pipe work" and useless for testing "is the content good."

### Swap 1 — the tool definition (hard cost cap, not just an instruction)
In the HTTP body's `tools` array, add `max_uses` — this is enforced by
the API itself, so Claude physically cannot exceed it regardless of
what the prompt says:
```json
"tools": [
  {"type": "web_search_20250305", "name": "web_search", "max_uses": 1}
]
```

### Swap 2 — the model and token cap
In the HTTP body, temporarily change:
```json
"model": "claude-haiku-4-5-20251001",
"max_tokens": 3000,
```
Haiku is the cheapest model in the lineup and is more than capable of
proving out plumbing; you don't need Sonnet-quality reasoning to check
whether your Iterator/Filter/Aggregator/Parse JSON chain works.
**Correction from earlier:** I originally suggested `1024` here — too
tight. Web search auto-enables citations, and Claude's `<cite
index="...">` markup adds real token overhead on top of the JSON
structure itself, which can truncate the response mid-object
(you'll see `"stop_reason": "max_tokens"` in the HTTP module's raw
output if this happens). The cost difference between 1024 and 3000
max_tokens is negligible next to a wasted, unparseable run.

### Swap 3 — the system prompt itself
Temporarily replace the value in your `scout_system_prompt` Set
Variable with this short version:

```
You are a TEST-MODE stand-in for a research agent. This run is for
functionality testing only — do not attempt real research quality.

Run exactly ONE web search related to AI in banking or financial
services (any angle is fine for this test). Do not run more than one
search under any circumstance, even if the first result is weak.

After the search, return exactly 2 items using whatever that single
search turned up. Use real content from the search, not fabricated
facts — but do not search again to fill gaps; use "n/a" for anything
the one search didn't cover.

OUTPUT FORMAT — HARD RULES
- Your response must contain NOTHING before the JSON: no sentence
  describing your plan. The very first character you output must be `{`.
- Do NOT wrap the JSON in a code fence (no ```json, no ```).
- Do NOT include <cite> tags or citation markup inside JSON string
  values — write plain prose instead.

Return ONLY valid JSON, no markdown fences, no preamble:
{
  "research_date": "YYYY-MM-DD",
  "items": [
    {
      "id": 1,
      "priority": "P1",
      "headline": "...",
      "what_happened": "...",
      "hard_details": ["..."],
      "primary_source_url": "...",
      "event_key": "...",
      "p123_implication": null,
      "consensus_forming": "...",
      "attack_surface": "...",
      "freshness_hours": 24,
      "closest_memory_row": "none",
      "overlap_estimate": "none",
      "discourse_score": 5
    }
  ],
  "search_log": [{"query": "...", "priority_targeted": "P1", "result": "..."}],
  "thin_day": false
}
```

### Reverting before going live
When you're done testing the plumbing, put back: the full Scout prompt
from section 1b above, `"model": "claude-sonnet-5"`, `"max_tokens":
4096`, and remove `max_uses` from the tool definition (or set it high
enough — e.g. `10` — to not choke off the real search quotas the full
prompt asks for). Nothing else in the chain (Iterator, Filter,
Aggregator, Parse JSON) needs to change — the output shape is
identical, just thinner.


Run this partial scenario a couple of times on different days if you
can, and look specifically for:
- Does `search_log` show real P1/P2 queries, or does it look thin/lazy?
- Are the returned items genuinely not overlapping with your seed rows
  in the Sheet?
- Does `thin_day` ever come back `true`, and does that match reality?

Tell me how it looks (paste an example output if anything seems off)
and we'll move to **Part 2B**: the Strategist (with the overlap-scoring
gate and priority selection), the Ghostwriter, the Critic, and the two
routers that tie the whole thing together.
