import { LinkPlaceholder, Screenshot } from "../../../components/Placeholder";

export default function ThoughtLeaderDrafterPage() {
  return (
    <article className="flex flex-col gap-12">
      <header className="flex flex-col gap-3">
        <h1 className="text-4xl font-semibold tracking-tight">
          Thought Leader Drafter
        </h1>
        <p className="text-lg text-zinc-600">
          Generates long-form articles in a specific author&apos;s voice using
          their own writing as style references.
        </p>
        <p className="text-sm text-zinc-500">
          <span className="font-semibold text-zinc-700">Stack:</span> Next.js
          16, TypeScript, Tailwind CSS v4, shadcn/ui, Supabase, LangChain,
          OpenAI + Anthropic + Google GenAI, Zustand, React Query.
        </p>
        <Screenshot label="REPLACE WITH HERO SCREENSHOT — ideally the 4-stage pipeline UI or an A/B comparison view" />
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">Problem</h2>
        <p className="leading-relaxed">
          Executives and thought leaders need to publish long-form content
          regularly. Each article eats 4 to 8 hours. Off-the-shelf AI tools
          and ghostwriters both fail at the same thing: voice. The output
          sounds smart but generic. It doesn&apos;t sound like the person.
        </p>
        <p className="leading-relaxed">
          The specific stakeholder for this project was the Eskwelabs CEO.
          The tool needed to produce drafts that actually sounded like him,
          using his past writing as the anchor.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">What it does</h2>
        <p className="leading-relaxed">
          Users go through a 4-stage writing pipeline:
        </p>
        <ol className="list-decimal pl-6 flex flex-col gap-2 leading-relaxed">
          <li>
            <span className="font-semibold">Brainstorm</span> — generates 3
            structured article angles to pick from.
          </li>
          <li>
            <span className="font-semibold">Outline</span> — builds a
            structure based on the chosen angle.
          </li>
          <li>
            <span className="font-semibold">Draft</span> — writes the full
            article.
          </li>
          <li>
            <span className="font-semibold">Final Output</span> — polishes
            for delivery.
          </li>
        </ol>
        <p className="leading-relaxed">
          Each stage has editable text blocks and pulls in the user&apos;s
          writing samples as a few-shot style reference. There&apos;s a
          writing samples library where users upload PDFs of their past
          articles, the system extracts and cleans the text, and selected
          samples get associated with the active session.
        </p>
        <p className="leading-relaxed">
          The tool also has an A/B comparison mode that generates two
          variants side-by-side: one using the writing samples, one without.
          This is the fastest way to verify the style transfer is actually
          doing something. Plus model switching across OpenAI, Anthropic, and
          Google, and per-session token and cost tracking.
        </p>
        <Screenshot label="REPLACE WITH SCREENSHOT — 4-stage pipeline UI" />
        <Screenshot label="REPLACE WITH SCREENSHOT — A/B comparison mode" />
        <Screenshot label="REPLACE WITH SCREENSHOT — writing samples library" />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">
          My contributions
        </h2>
        <p className="leading-relaxed">
          I inherited a Phase 1 MVP and owned Phase 2. Three main pieces:
        </p>

        <h3 className="text-lg font-semibold mt-2">
          Writing samples library and pipeline integration
        </h3>
        <p className="leading-relaxed">
          I built the upload and extraction flow, the SampleGrid and
          SampleList UI, and the system that ties selected samples to a
          writing session. The samples get injected directly into the
          LangChain system prompt as voice references. No semantic search,
          no embeddings. Just full text.
        </p>

        <h3 className="text-lg font-semibold mt-2">A/B voice comparison</h3>
        <p className="leading-relaxed">
          I conceptualized and built this from scratch. The trick was
          avoiding two parallel LLM calls, which would have doubled the cost
          and the wait time. Instead, the prompt asks the model to return
          both variants in one response, separated by strict delimiters
          (<code className="bg-zinc-100 px-1 py-0.5 text-sm">===VARIANT:WITH_SAMPLES===</code>).
          The backend slices on the delimiter and ships both to the UI. I
          also overhauled <code className="bg-zinc-100 px-1 py-0.5 text-sm">StepContent.tsx</code>{" "}
          to handle side-by-side editing.
        </p>

        <h3 className="text-lg font-semibold mt-2">AI pipeline refactoring</h3>
        <p className="leading-relaxed">
          I extracted the prompt management logic into its own module and
          tuned the pipeline to handle large style injections (3 to 5 full
          articles in a system prompt) without breaking output. I also used
          Zod schemas via LangChain&apos;s{" "}
          <code className="bg-zinc-100 px-1 py-0.5 text-sm">.withStructuredOutput()</code>{" "}
          to force the brainstorming step to return exactly 3
          properly-formatted angles. This way downstream stages got
          predictable input instead of having to parse a text blob.
        </p>

        <p className="leading-relaxed">
          I also did a UI/UX overhaul on session cards, dashboards, dialogs,
          step indicators, and markdown rendering. AI was the headline, but
          the frontend needed work too.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">
          The architectural call worth talking about
        </h2>
        <p className="leading-relaxed">
          RAG vs full text injection. The default move for &ldquo;use these
          documents as references&rdquo; is to chunk them, embed them, and
          retrieve the most relevant chunks at runtime. We didn&apos;t do
          that. We injected the full raw text of 3 to 5 sample articles
          directly into the system prompt.
        </p>
        <p className="leading-relaxed">
          The reasoning: voice replication isn&apos;t really a retrieval
          problem. It&apos;s about giving the model enough connected,
          in-context style data that it can pattern-match the rhythm,
          sentence structure, and word choice. Chunked semantic retrieval
          scatters that. Full text preserves it. Modern context windows are
          big enough that this is no longer a memory problem, it&apos;s a
          strategy choice.
        </p>
        <p className="leading-relaxed">
          It worked. The A/B comparison made the difference visible. Variants
          with samples sounded recognizably like the author. Variants without
          sounded like generic AI prose.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">Skills shown</h2>
        <p className="leading-relaxed">
          Full-stack React architecture with multi-step state management,
          prompt engineering for few-shot style transfer, LangChain pipelines
          with structured outputs, Supabase schema design and live data
          migration, UI/UX implementation with Tailwind and shadcn.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">Deliverables</h2>
        <ul className="list-disc pl-6 flex flex-col gap-2 leading-relaxed">
          <li>
            <span className="font-semibold">GitHub:</span>{" "}
            <LinkPlaceholder label="ADD LINK HERE — repo URL" />
          </li>
          <li>
            <span className="font-semibold">Deployed app:</span>{" "}
            <LinkPlaceholder label="ADD LINK HERE — Vercel link, gated for stakeholders" />
          </li>
          <li>
            <span className="font-semibold">PRD:</span>{" "}
            <LinkPlaceholder label="ADD LINK HERE if shareable" />
          </li>
          <li>
            <span className="font-semibold">Screenshots:</span>
          </li>
        </ul>
        <Screenshot label="REPLACE WITH SCREENSHOTS — pipeline, A/B mode, samples library, dashboard" />
      </section>
    </article>
  );
}
