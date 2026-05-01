import { LinkPlaceholder, Screenshot } from "../../components/Placeholder";

export default function SlideDeckGeneratorPage() {
  return (
    <article className="flex flex-col gap-12">
      <header className="flex flex-col gap-3">
        <h1 className="text-4xl font-semibold tracking-tight">
          Instructor Sprint Lecture Materials Generator
        </h1>
        <p className="text-lg text-zinc-600">
          Turns Eskwelabs Class PRDs into ready-to-use Google Slides decks
          with speaker notes.
        </p>
        <p className="text-sm text-zinc-500">
          <span className="font-semibold text-zinc-700">Stack:</span> Next.js
          14, FastAPI (Python), LangChain, OpenAI + Anthropic, Google
          Slides/Drive/Sheets APIs, Supabase.
        </p>
        <Screenshot label="REPLACE WITH HERO SCREENSHOT — ideally the dashboard or a generated deck" />
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">Problem</h2>
        <p className="leading-relaxed">
          Learning Experience Designers at Eskwelabs were spending 24+ hours
          building decks for every 16-hour sprint. The v1 prototype already
          proved the bones of an AI pipeline could work. It cut the time down
          to about 48 minutes. The catch was content quality. The decks ran,
          but they leaned generic, missed speaker notes entirely, and
          overflowed text boxes regularly.
        </p>
        <p className="leading-relaxed">
          My sprint was v1.1. The job was to take what was working and push
          it the rest of the way to something LXDs would actually trust
          enough to use as a starting point, hitting the target of under 2
          hours total review time.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">What it does</h2>
        <p className="leading-relaxed">
          The tool takes a validated Class PRD (PDF or markdown) and produces
          a complete Google Slides deck. The pipeline:
        </p>
        <ol className="list-decimal pl-6 flex flex-col gap-2 leading-relaxed">
          <li>PRD gets parsed and structured.</li>
          <li>
            An LLM generates a storyboard — sessions, slide types, slide
            order, timing.
          </li>
          <li>A validator checks the storyboard for issues and corrects them.</li>
          <li>The slides get populated, one batch per session.</li>
          <li>
            A quality checker scans for generic content and flags anything
            that needs regenerating.
          </li>
          <li>
            The Google Slides API assembles the final deck from a master
            template.
          </li>
          <li>
            Speaker notes get written in first-person instructor voice for
            each slide.
          </li>
        </ol>
        <p className="leading-relaxed">
          The user gets a Google Slides link at the end, plus a dashboard to
          track generation history, costs, and deck previews.
        </p>
        <Screenshot label="REPLACE WITH SCREENSHOT — pipeline diagram or generation in progress UI" />
        <Screenshot label="REPLACE WITH SCREENSHOT — sample generated deck with placeholders filled in" />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">
          My contributions
        </h2>
        <p className="leading-relaxed">
          I focused on the AI side of the system. Three pieces in particular:
        </p>

        <h3 className="text-lg font-semibold mt-2">
          Anti-generic content logic
        </h3>
        <p className="leading-relaxed">
          The v1 prototype had a habit of producing slides that sounded fine
          but could&apos;ve been about anything. &ldquo;This concept enhances
          learning outcomes&rdquo; type of stuff. I built a content quality
          checker with an expanded keyword filter and a rule the LLM had to
          apply to itself: could this sentence appear in a deck for a
          completely different topic? If yes, regenerate. The point was to
          force specificity into every slide.
        </p>

        <h3 className="text-lg font-semibold mt-2">
          Character limit enforcement
        </h3>
        <p className="leading-relaxed">
          The Google Slides API has no auto-fit. If the AI generates a
          200-character bullet point and the placeholder fits 80, the text
          overflows and the deck looks broken. I mapped the backend&apos;s
          prompt constraints directly to the frontend&apos;s UI box limits, so
          the model knew exactly how many characters it had per field.
          Concepts capped at 80, table cells at 60, and so on.
        </p>

        <h3 className="text-lg font-semibold mt-2">
          Fail-safe speaker notes
        </h3>
        <p className="leading-relaxed">
          The original pipeline didn&apos;t generate speaker notes at all. I
          added a fallback prompt that runs independently if the main batch
          fails to produce notes, with a 160-character minimum and a
          constraint that they had to be in the instructor&apos;s first-person
          voice. This way the deck never ships without notes.
        </p>

        <p className="leading-relaxed">
          I also did the unglamorous backend work that made everything more
          stable: refactoring the Google client for proper exception
          handling, pinning fragile dependencies, fixing CORS, and switching
          all loggers to timezone-aware UTC.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">
          Why this mattered
        </h2>
        <p className="leading-relaxed">
          The target was 24+ hours of manual deck work down to under 2 hours
          of review. Real LXDs at Eskwelabs are the users. The tool was
          internal production, not a demo.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">
          What I&apos;d flag as the interesting bit
        </h2>
        <p className="leading-relaxed">
          Prompt engineering for production AI is harder than people think.
          It&apos;s not &ldquo;write a clever prompt and you&apos;re
          done.&rdquo; It&apos;s writing a prompt, watching it produce
          something subtly wrong on the 47th run, figuring out which
          constraint failed, and adding another guardrail. Fluff and
          hallucination aren&apos;t bugs you fix once. They&apos;re tendencies
          you have to keep pushing back against.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">Skills shown</h2>
        <p className="leading-relaxed">
          Prompt engineering with structured outputs and constraint
          enforcement, FastAPI backend design, Google Workspace API
          integration, Pydantic validation, async pipeline design, AI quality
          assurance.
        </p>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold tracking-tight">Deliverables</h2>
        <ul className="list-disc pl-6 flex flex-col gap-2 leading-relaxed">
          <li>
            <span className="font-semibold">GitHub:</span>{" "}
            <LinkPlaceholder label="ADD LINK HERE — repo: github.com/aremis9/esk-lecture-materials-gen" />
          </li>
          <li>
            <span className="font-semibold">Deployed app:</span>{" "}
            <LinkPlaceholder label='ADD LINK HERE if accessible, otherwise note: "Internal Eskwelabs tool"' />
          </li>
          <li>
            <span className="font-semibold">Demo deck / sample output:</span>{" "}
            <LinkPlaceholder label="ADD LINK HERE — a generated slides link, if shareable" />
          </li>
          <li>
            <span className="font-semibold">Screenshots:</span>
          </li>
        </ul>
        <Screenshot label="REPLACE WITH SCREENSHOTS — dashboard, generation flow, sample deck" />
      </section>
    </article>
  );
}
