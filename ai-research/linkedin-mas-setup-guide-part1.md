# Technical Setup Guide — Part 1: Foundations

This gets you from "three accounts, nothing configured" to "a working
scenario skeleton that can call Claude and read/write your Google
Sheet." We deliberately stop BEFORE wiring the full 4-agent pipeline —
get this foundation working and tested first, then Part 2 builds the
Scout → Strategist → Ghostwriter → Critic chain on top of it. Wiring
everything at once is how people get stuck on step 2 of 40 with no way
to tell what broke.

Budget about 30-40 minutes for this part.

---

## Step 1 — Anthropic: get your API key and enable billing

The API key is what lets Make "speak" to Claude. It is completely
separate from any claude.ai subscription you might have — API access
is pay-per-token, billed independently.

1. Go to **console.anthropic.com** and sign in (or create an account —
   email or Google sign-in both work).
2. Add a payment method: **Settings → Billing** → add a credit/debit
   card. **Do this before creating your key** — it's the single most
   common reason a brand-new key fails on its first real request. If
   you want a safety net while testing, look for a spending-limit /
   budget-cap option in the same Billing section and set it low (e.g.
   $20-25) to start.
3. Create the key: **Settings → API Keys** → **Create Key**. Name it
   something you'll recognize later, e.g. `linkedin-mas-production`.
4. **Copy the key immediately and paste it somewhere temporary and
   safe** (a password manager, or a note you'll delete after Step 3 of
   the Make section below). Anthropic shows this key exactly once —
   if you navigate away without copying it, you'll have to delete it
   and generate a new one. It starts with `sk-ant-`.

✅ **Checkpoint:** you have a string starting with `sk-ant-` saved
somewhere, and a card on file in Billing.

---

## Step 2 — Google: create the Topic Memory Log sheet

This is the persistent memory layer from the architecture doc — one
spreadsheet, one row per delivered post.

1. Go to **sheets.google.com** → **Blank spreadsheet**.
2. Rename the file (top left) to something like
   `LinkedIn MAS — Topic Memory`.
3. Rename the tab at the bottom (double-click "Sheet1") to
   `topic_memory`.
4. In row 1, enter these exact column headers, one per cell, A through H:

   | A | B | C | D | E | F | G | H |
   |---|---|---|---|---|---|---|---|
   | date | event_key | priority | lane | thesis | hook | source_domain | status |

5. If you have real recent posts to seed the memory with (recommended —
   an empty log means zero anti-duplication protection on day one),
   add one row per post below the header, filling in what you can and
   setting `status` to `posted`. Approximate `event_key` and `priority`
   is fine for seed data.
6. Leave the sheet open — you'll need its name and tab in Make shortly.

✅ **Checkpoint:** one Google Sheet, tab `topic_memory`, 8 headers in
row 1, ideally a few seed rows with `status = posted`.

---

## Step 3 — Make.com: account, both connections, and a test scenario

### 3a. Account

1. Go to **make.com** → sign up (or log in if you already created the
   account). New accounts land on a free plan automatically — that's
   fine for building and testing; you'll only need to look at paid
   tiers once you're running this daily and start hitting the monthly
   operations limit.
2. From the dashboard, click **Create a new scenario**. This opens the
   visual scenario builder — a blank canvas where you'll add modules
   as blocks and connect them with lines.

### 3b. Connect Anthropic Claude

1. Click the **+** in the canvas to add your first module. Search for
   **"Anthropic Claude"** in the app list.
2. Pick the **"Create a Prompt"** module (not "Simple Text Prompt" —
   that one skips the connection step entirely, which is convenient
   for a five-second test but won't give you system-prompt control for
   the real pipeline).
3. Make will ask you to add a connection. Click **Add**, paste the API
   key from Step 1, give the connection a name, save.
4. You'll now see fields for model, system prompt, messages, max
   tokens. Don't fill these in yet — for now, just confirm the module
   saved without error. This proves the connection itself works.

### 3c. Connect Google Sheets

1. Add a second module: search **"Google Sheets"**, pick **"Search
   Rows"**.
2. Click **Add** next to Connection → this opens a Google OAuth popup
   → sign in with the Google account that owns your sheet → grant
   Make the requested permissions.
3. Once connected, select your spreadsheet (`LinkedIn MAS — Topic
   Memory`) and the sheet/tab (`topic_memory`) from the dropdowns that
   appear.
4. Again, don't configure filters yet — just confirm the connection
   and file selection save cleanly.

✅ **Checkpoint:** two modules sitting on the canvas, both showing a
green connected state, no red error icons.

### 3d. Add the daily scheduler

1. Click the **clock icon** at the bottom-left of the first module (or
   the scenario's scheduling settings, depending on your Make version —
   look for "Schedule" or "Immediately as data arrives" vs. a fixed
   interval).
2. Set it to run **once per day** at your preferred time (e.g. 06:00,
   your local timezone as set in your Make account).
3. Leave the scenario **OFF** (the toggle in the top-right) for now —
   you don't want a half-built pipeline firing automatically overnight.

### 3e. Wire a minimal end-to-end test

Before building all four agents, prove the plumbing works with the
simplest possible round trip:

1. On the **Anthropic Claude → Create a Prompt** module, set:
   - Model: `claude-sonnet-5`
   - Max tokens: `200`
   - Messages: one user message, content = `Reply with exactly the
     word: connected`
2. Click **Run once** (bottom of canvas). You should see the module
   execute and return `connected` (or close to it) in its output
   bundle — click the module after it runs to inspect the output.
3. Now test the Sheets side: on the **Google Sheets → Search Rows**
   module, set the filter to `status = posted`, **Run once**, and
   confirm it returns your seed row(s) from Step 2.

✅ **Checkpoint — you're done with Part 1 when:**
- The Claude module returns a real response from the API (proves the
  key + billing are live)
- The Sheets module returns your seeded row(s) (proves the connection
  and column mapping are correct)

---

## What's next (Part 2)

Once both checkpoints above are green, tell me and we'll build the real
pipeline on top of this skeleton: a Text/Array Aggregator to turn the
Sheets rows into the `<topic_memory>` block, the Scout module with the
web-search tool enabled and its full system prompt, the two routers
(insufficient-research retry and the Critic pass/fail loop), and the
Module 5 delivery + memory-write step. We'll build and test it one
module at a time rather than pasting the whole thing in at once —
same reasoning as this part.

If anything in Steps 1-3 throws an error or a menu doesn't match what's
described (Make's UI shifts labels occasionally), tell me exactly what
you're seeing and we'll troubleshoot it before moving on.
