## Site Structure

Multi-page. Each page is its own route:

- `/` — Home (About + EIF Journey + nav into projects)
- `/projects/slide-deck-generator` — Project 1
- `/projects/thought-leader-drafter` — Project 2
- `/reflection` — Reflection + Looking Forward
- `/contact` — Contact and links (can also live in footer)

---

## Home Page

### Hero / About

**Heading:** Yani (Edrian Miguel Capistrano)

**Subheading:** Builder, full-stack dev, EIF Cohort 9 Fellow.

**Body:**

I build things. Mostly web apps, lately with a lot of AI under the hood. Stuff like UniSort (a university recommender that's pulled in 35,000+ visitors), AGILA (a campus cat management app), and Benkyou (a Japanese study PWA I made because I was getting tired of Anki).

I'm also a 2nd-year Computer Science student at Ateneo de Manila, going into 3rd year this June, specializing in Data Science and Analytics. I'll be honest, EIF was my first real internship-type thing. School projects are one thing. Building something that an actual CEO is going to test against his own writing is another. I came in still figuring a lot of stuff out, and I'm leaving with a much clearer sense of what production AI work actually looks like.

On the side, I'm a Developer at CompSAt and a Back-end Developer at GDGoC-Loyola. Outside of code, photography and badminton.

[REPLACE WITH PROFILE PHOTO]

---

### EIF Journey

**Heading:** What I did at Eskwelabs

**Body:**

I was part of Cohort 9 of the Eskwelabs Innovation Fellowship, AI Solution Development track. I joined because I wanted real AI and product experience outside of school. Not another class project that lives and dies on a single grade. Something that ships, with stakeholders, with users.

I worked on two projects during the fellowship. Different surfaces, same idea: AI tools built for actual Eskwelabs internal use. The Slide Deck Generator helps Learning Experience Designers build instructor decks faster. The Thought Leader Drafter helps the CEO write articles in his own voice. Different problems, but both are about taking the parts of someone's job that drain hours and seeing how far AI can take them, without producing the kind of generic output that AI tools usually spit out.

The biggest gap between this and school was the production-ready bar. School projects can be impressive in a demo and fall apart five minutes later. These tools needed to hold up. They needed to handle weird inputs, fail gracefully, and give outputs that someone would actually use, not just clap at.

[ADD SCREENSHOT OR DECK GRID HERE — could be a 2-card grid linking to each project]

---

## Project 1: Slide Deck Generator

`/projects/slide-deck-generator`

### Header

**Project name:** Instructor Sprint Lecture Materials Generator

**One-line:** Turns Eskwelabs Class PRDs into ready-to-use Google Slides decks with speaker notes.

**Stack:** Next.js 14, FastAPI (Python), LangChain, OpenAI + Anthropic, Google Slides/Drive/Sheets APIs, Supabase.

[REPLACE WITH HERO SCREENSHOT — ideally the dashboard or a generated deck]

---

### Problem

Learning Experience Designers at Eskwelabs were spending 24+ hours building decks for every 16-hour sprint. The v1 prototype already proved the bones of an AI pipeline could work. It cut the time down to about 48 minutes. The catch was content quality. The decks ran, but they leaned generic, missed speaker notes entirely, and overflowed text boxes regularly.

My sprint was v1.1. The job was to take what was working and push it the rest of the way to something LXDs would actually trust enough to use as a starting point, hitting the target of under 2 hours total review time.

---

### What it does

The tool takes a validated Class PRD (PDF or markdown) and produces a complete Google Slides deck. The pipeline:

1. PRD gets parsed and structured.
2. An LLM generates a storyboard — sessions, slide types, slide order, timing.
3. A validator checks the storyboard for issues and corrects them.
4. The slides get populated, one batch per session.
5. A quality checker scans for generic content and flags anything that needs regenerating.
6. The Google Slides API assembles the final deck from a master template.
7. Speaker notes get written in first-person instructor voice for each slide.

The user gets a Google Slides link at the end, plus a dashboard to track generation history, costs, and deck previews.

[REPLACE WITH SCREENSHOT — pipeline diagram or generation in progress UI]

[REPLACE WITH SCREENSHOT — sample generated deck with placeholders filled in]

---

### My contributions

I focused on the AI side of the system. Three pieces in particular:

**Anti-generic content logic.** The v1 prototype had a habit of producing slides that sounded fine but could've been about anything. "This concept enhances learning outcomes" type of stuff. I built a content quality checker with an expanded keyword filter and a rule the LLM had to apply to itself: could this sentence appear in a deck for a completely different topic? If yes, regenerate. The point was to force specificity into every slide.

**Character limit enforcement.** The Google Slides API has no auto-fit. If the AI generates a 200-character bullet point and the placeholder fits 80, the text overflows and the deck looks broken. I mapped the backend's prompt constraints directly to the frontend's UI box limits, so the model knew exactly how many characters it had per field. Concepts capped at 80, table cells at 60, and so on.

**Fail-safe speaker notes.** The original pipeline didn't generate speaker notes at all. I added a fallback prompt that runs independently if the main batch fails to produce notes, with a 160-character minimum and a constraint that they had to be in the instructor's first-person voice. This way the deck never ships without notes.

I also did the unglamorous backend work that made everything more stable: refactoring the Google client for proper exception handling, pinning fragile dependencies, fixing CORS, and switching all loggers to timezone-aware UTC.

---

### Why this mattered

The target was 24+ hours of manual deck work down to under 2 hours of review. Real LXDs at Eskwelabs are the users. The tool was internal production, not a demo.

---

### What I'd flag as the interesting bit

Prompt engineering for production AI is harder than people think. It's not "write a clever prompt and you're done." It's writing a prompt, watching it produce something subtly wrong on the 47th run, figuring out which constraint failed, and adding another guardrail. Fluff and hallucination aren't bugs you fix once. They're tendencies you have to keep pushing back against.

---

### Skills shown

Prompt engineering with structured outputs and constraint enforcement, FastAPI backend design, Google Workspace API integration, Pydantic validation, async pipeline design, AI quality assurance.

---

### Deliverables

- **GitHub:** [ADD LINK HERE — repo: github.com/aremis9/esk-lecture-materials-gen]
- **Deployed app:** [ADD LINK HERE if accessible, otherwise note: "Internal Eskwelabs tool"]
- **Demo deck / sample output:** [ADD LINK HERE — a generated slides link, if shareable]
- **Screenshots:** [REPLACE WITH SCREENSHOTS — dashboard, generation flow, sample deck]

---

## Project 2: Thought Leader Drafter

`/projects/thought-leader-drafter`

### Header

**Project name:** Thought Leader Drafter

**One-line:** Generates long-form articles in a specific author's voice using their own writing as style references.

**Stack:** Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui, Supabase, LangChain, OpenAI + Anthropic + Google GenAI, Zustand, React Query.

[REPLACE WITH HERO SCREENSHOT — ideally the 4-stage pipeline UI or an A/B comparison view]

---

### Problem

Executives and thought leaders need to publish long-form content regularly. Each article eats 4 to 8 hours. Off-the-shelf AI tools and ghostwriters both fail at the same thing: voice. The output sounds smart but generic. It doesn't sound like the person.

The specific stakeholder for this project was the Eskwelabs CEO. The tool needed to produce drafts that actually sounded like him, using his past writing as the anchor.

---

### What it does

Users go through a 4-stage writing pipeline:

1. **Brainstorm** — generates 3 structured article angles to pick from.
2. **Outline** — builds a structure based on the chosen angle.
3. **Draft** — writes the full article.
4. **Final Output** — polishes for delivery.

Each stage has editable text blocks and pulls in the user's writing samples as a few-shot style reference. There's a writing samples library where users upload PDFs of their past articles, the system extracts and cleans the text, and selected samples get associated with the active session.

The tool also has an A/B comparison mode that generates two variants side-by-side: one using the writing samples, one without. This is the fastest way to verify the style transfer is actually doing something. Plus model switching across OpenAI, Anthropic, and Google, and per-session token and cost tracking.

[REPLACE WITH SCREENSHOT — 4-stage pipeline UI]

[REPLACE WITH SCREENSHOT — A/B comparison mode]

[REPLACE WITH SCREENSHOT — writing samples library]

---

### My contributions

I inherited a Phase 1 MVP and owned Phase 2. Three main pieces:

**Writing samples library and pipeline integration.** I built the upload and extraction flow, the SampleGrid and SampleList UI, and the system that ties selected samples to a writing session. The samples get injected directly into the LangChain system prompt as voice references. No semantic search, no embeddings. Just full text.

**A/B voice comparison.** I conceptualized and built this from scratch. The trick was avoiding two parallel LLM calls, which would have doubled the cost and the wait time. Instead, the prompt asks the model to return both variants in one response, separated by strict delimiters (`===VARIANT:WITH_SAMPLES===`). The backend slices on the delimiter and ships both to the UI. I also overhauled `StepContent.tsx` to handle side-by-side editing.

**AI pipeline refactoring.** I extracted the prompt management logic into its own module and tuned the pipeline to handle large style injections (3 to 5 full articles in a system prompt) without breaking output. I also used Zod schemas via LangChain's `.withStructuredOutput()` to force the brainstorming step to return exactly 3 properly-formatted angles. This way downstream stages got predictable input instead of having to parse a text blob.

I also did a UI/UX overhaul on session cards, dashboards, dialogs, step indicators, and markdown rendering. AI was the headline, but the frontend needed work too.

---

### The architectural call worth talking about

RAG vs full text injection. The default move for "use these documents as references" is to chunk them, embed them, and retrieve the most relevant chunks at runtime. We didn't do that. We injected the full raw text of 3 to 5 sample articles directly into the system prompt.

The reasoning: voice replication isn't really a retrieval problem. It's about giving the model enough connected, in-context style data that it can pattern-match the rhythm, sentence structure, and word choice. Chunked semantic retrieval scatters that. Full text preserves it. Modern context windows are big enough that this is no longer a memory problem, it's a strategy choice.

It worked. The A/B comparison made the difference visible. Variants with samples sounded recognizably like the author. Variants without sounded like generic AI prose.

---

### Skills shown

Full-stack React architecture with multi-step state management, prompt engineering for few-shot style transfer, LangChain pipelines with structured outputs, Supabase schema design and live data migration, UI/UX implementation with Tailwind and shadcn.

---

### Deliverables

- **GitHub:** [ADD LINK HERE — repo URL]
- **Deployed app:** [ADD LINK HERE — Vercel link, gated for stakeholders]
- **PRD:** [ADD LINK HERE if shareable]
- **Screenshots:** [REPLACE WITH SCREENSHOTS — pipeline, A/B mode, samples library, dashboard]

---

## Reflection Page

`/reflection`

### Heading

What I learned

### Body

The two biggest things I came out of EIF with:

Prompt engineering is way harder than I thought. Coming in, I figured "good prompt, good output." That's not how it works in production. It's an iterative loop of constraints, structured outputs, fallbacks, and guardrails. Every output you don't want is a tendency you have to push back against, sometimes one prompt revision at a time. The Slide Deck Generator's anti-generic logic and the Thought Leader Drafter's full-text style injection both came from the same realization. You don't tell AI what you want. You build a system that makes it hard for AI to give you what you don't want.

The other one is that production AI is a different beast from school projects. School AI projects can be brilliant in a demo and fall apart in week two. The EIF projects had real users, real stakeholders (the CEO, the LXDs), and real expectations. Stuff had to keep working. I had to think about edge cases, error handling, failure modes, and what happens when an LLM call times out at 2am. None of that is novel as a concept, but actually doing it for the first time is what makes it click.

### What was hard

The hardest part was inheriting other people's codebases. Both projects came with a Phase 1 baseline that I had to read, understand, and then push forward. There's a specific kind of discomfort to being three days into a project and still not fully sure why the original architect made some of the choices they did. I got better at it. Reading code became less about "what does this do" and more about "what was this trying to solve, and is that still the right problem."

The other hard parts: the gap between "AI demo works" and "AI works reliably for users" is wider than I expected. And juggling EIF with school, orgs, freelance work, and other internships meant I was always one schedule conflict away from something slipping.

### What I'm proud of

Three things, all genuine wins.

The prompt engineering depth I picked up. I went from writing prompts to thinking in terms of constraints, structured outputs, and fallback chains. That's a real skill and I didn't have it four months ago.

The full-stack range. Backend Python, frontend React, AI integration, all in one sprint, and shipping. Most of my prior projects have been one stack at a time. EIF forced me to be useful across the whole thing.

The A/B comparison hack on Thought Leader Drafter. Single LLM call, two delimited variants, parsed on the backend. Saved cost, saved latency, made the value of the writing samples visible. It was a clever solution to a real problem and it worked.

### What I'd do differently

Push back more on architecture decisions instead of just inheriting. When I joined Phase 2 of both projects, I read the existing code, accepted the structure, and built on top of it. There were a few choices I should have questioned earlier instead of going along with them.

Get closer to the users sooner. I worked with stakeholders fine, but I didn't sit with actual LXDs while they used the deck generator, and I didn't watch the CEO actually try to draft an article in the Thought Leader Drafter. That kind of feedback is irreplaceable and I should have prioritized it.

Manage time better. Finals plus EIF plus orgs plus other work was rough. Some of that was unavoidable but some of it was on me for not setting tighter boundaries earlier.

---

## Looking Forward

`/reflection` (same page, lower) or its own section

### Heading

What's next

### Body

I'm looking for software engineering internships. Open to full-stack roles with AI components, AI/ML focused product roles, or anything where the AI work is real instead of decorative. I'd rather build a tool that ten people use every day than ship a flashy demo that gets forgotten.

A few directions I'm interested in:

- AI products that actually work. Production-grade, reliable, not gimmicky.
- The intersection of AI and UX. Most AI tools are technically impressive and miserable to use. There's a lot of room there.
- Going deeper on AI/ML systems beyond prompt engineering. I want to understand the layer below the API.

But fundamentally I just want to keep shipping things. AI or otherwise. The best version of the next year for me looks like more projects with real users, more time spent on the parts of building that I haven't done yet, and less time on stuff I've already proven I can do.

---

## Contact

`/contact`

### Heading

Get in touch

**Body:**

If you want to talk about a role, a project, or anything else, the easiest ways to reach me:

- **Portfolio:** [yanicells.dev](https://yanicells.dev)
- **GitHub:** github.com/yanicells
- **LinkedIn:** linkedin.com/in/yanicells
- **Email:** edrianmiguelcapistrano@gmail.com

---
