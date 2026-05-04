import ProjectHero from "../../../components/ProjectHero";
import ProjectSection from "../../../components/ProjectSection";
import ContributionBlock from "../../../components/ContributionBlock";
import PipelineSteps from "../../../components/PipelineSteps";
import NextProject from "../../../components/NextProject";
import { FeatureScreenshot } from "../../../components/FramedPlaceholder";

export default function ThoughtLeaderDrafterPage() {
  return (
    <>
      <ProjectHero
        num="Project 01"
        name="Thought Leader Drafter"
        oneLine="Generates long-form articles in a specific author's voice using their own writing as style references."
        stack={[
          "Next.js 16",
          "TypeScript",
          "Tailwind CSS v4",
          "shadcn/ui",
          "Supabase",
          "LangChain",
          "OpenAI",
          "Anthropic",
          "Google GenAI",
          "Zustand",
          "React Query",
        ]}
        role="AI Solution Dev"
        year="2026 · Phase 2"
        status="Stakeholder gated"
        links={[
          {
            href: "https://esk-tl-drafter-web.vercel.app",
            label: "Live app",
            icon: "live",
          },
          {
            href: "https://github.com/lancedamalerio03/esk-tl-drafter-web/",
            label: "GitHub",
            icon: "github",
          },
          {
            href: "https://drive.google.com/file/d/1xz1TUKlXoN0JQCLbgFUBPlGjRD8nw7Ep/view?usp=sharing",
            label: "Presentation",
            icon: "presentation",
          },
        ]}
      />

      <section style={{ padding: "0 0 60px" }}>
        <div className="container wide">
          <FeatureScreenshot
            url="esk-tl-drafter-web.vercel.app"
            label="Thought Leader Drafter — home"
            src="/projects/tld-home-screen.png"
            alt="Thought Leader Drafter home dashboard"
            ratio="16/9"
          />
        </div>
      </section>

      <ProjectSection num="01" label="Problem" anchor="problem">
        <p>
          Executives and thought leaders need to publish long-form content
          regularly. Each article eats 4 to 8 hours. Off-the-shelf AI tools
          and ghostwriters both fail at the same thing: voice. The output
          sounds smart but generic. It doesn&apos;t sound like the person.
        </p>
        <p>
          The specific stakeholder for this project was the Eskwelabs CEO. The
          tool needed to produce drafts that actually sounded like him, using
          his past writing as the anchor.
        </p>
      </ProjectSection>

      <ProjectSection num="02" label="What it does">
        <p>Users go through a 4-stage writing pipeline:</p>

        <PipelineSteps
          steps={[
            {
              title: "Brainstorm",
              body: "Generates 3 structured article angles to pick from.",
            },
            {
              title: "Outline",
              body: "Builds a structure based on the chosen angle.",
            },
            {
              title: "Draft",
              body: "Writes the full article.",
            },
            {
              title: "Final Output",
              body: "Polishes for delivery.",
            },
          ]}
        />

        <p>
          Each stage has editable text blocks and pulls in the user&apos;s
          writing samples as a few-shot style reference. There&apos;s a
          writing samples library where users upload PDFs of their past
          articles, the system extracts and cleans the text, and selected
          samples get associated with the active session.
        </p>
        <p>
          The tool also has an A/B comparison mode that generates two variants
          side-by-side: one using the writing samples, one without. This is
          the fastest way to verify the style transfer is actually doing
          something. Plus model switching across OpenAI, Anthropic, and
          Google, and per-session token and cost tracking.
        </p>
      </ProjectSection>

      <section style={{ padding: "0 0 40px" }}>
        <div className="container wide">
          <div className="grid-2" style={{ gap: 28 }}>
            <FeatureScreenshot
              url="esk-tl-drafter-web.vercel.app/session"
              label="4-stage writing pipeline"
              src="/projects/tld-pipeline-page.png"
              alt="The 4-stage writing pipeline UI"
              caption="Fig. 1 — Writing pipeline"
            />
            <FeatureScreenshot
              url="esk-tl-drafter-web.vercel.app/session/output"
              label="Final draft output"
              src="/projects/tld-output-page.png"
              alt="Final draft output with A/B variants"
              caption="Fig. 2 — Draft output"
            />
          </div>
        </div>
      </section>

      <ProjectSection num="03" label="My contributions" accent>
        <p>I inherited a Phase 1 MVP and owned Phase 2. Three main pieces:</p>

        <ContributionBlock
          idx={1}
          title="Writing samples library and pipeline integration"
        >
          <p>
            I built the upload and extraction flow, the SampleGrid and
            SampleList UI, and the system that ties selected samples to a
            writing session. The samples get injected directly into the
            LangChain system prompt as voice references. No semantic search,
            no embeddings. Just full text.
          </p>
        </ContributionBlock>

        <ContributionBlock idx={2} title="A/B voice comparison">
          <p>
            I conceptualized and built this from scratch. The trick was
            avoiding two parallel LLM calls, which would have doubled the cost
            and the wait time. Instead, the prompt asks the model to return
            both variants in one response, separated by strict delimiters
            (<code>===VARIANT:WITH_SAMPLES===</code>). The backend slices on
            the delimiter and ships both to the UI. I also overhauled{" "}
            <code>StepContent.tsx</code> to handle side-by-side editing.
          </p>
        </ContributionBlock>

        <ContributionBlock idx={3} title="AI pipeline refactoring">
          <p>
            I extracted the prompt management logic into its own module and
            tuned the pipeline to handle large style injections (3 to 5 full
            articles in a system prompt) without breaking output. I also used
            Zod schemas via LangChain&apos;s{" "}
            <code>.withStructuredOutput()</code> to force the brainstorming
            step to return exactly 3 properly-formatted angles. This way
            downstream stages got predictable input instead of having to parse
            a text blob.
          </p>
        </ContributionBlock>

        <p
          style={{
            marginTop: 36,
            color: "var(--ink-mute)",
            fontSize: 15,
            paddingLeft: 16,
            borderLeft: "2px solid var(--line)",
          }}
        >
          I also did a UI/UX overhaul on session cards, dashboards, dialogs,
          step indicators, and markdown rendering. AI was the headline, but
          the frontend needed work too.
        </p>
      </ProjectSection>

      <ProjectSection
        num="04"
        label="The architectural call worth talking about"
      >
        <p>
          RAG vs full text injection. The default move for &ldquo;use these
          documents as references&rdquo; is to chunk them, embed them, and
          retrieve the most relevant chunks at runtime. We didn&apos;t do
          that. We injected the full raw text of 3 to 5 sample articles
          directly into the system prompt.
        </p>
        <p>
          The reasoning: voice replication isn&apos;t really a retrieval
          problem. It&apos;s about giving the model enough connected,
          in-context style data that it can pattern-match the rhythm, sentence
          structure, and word choice. Chunked semantic retrieval scatters
          that. Full text preserves it. Modern context windows are big enough
          that this is no longer a memory problem, it&apos;s a strategy
          choice.
        </p>
        <p>
          It worked. The A/B comparison made the difference visible. Variants
          with samples sounded recognizably like the author. Variants without
          sounded like generic AI prose.
        </p>
      </ProjectSection>

      <ProjectSection num="05" label="Skills shown">
        <p>
          Full-stack React architecture with multi-step state management,
          prompt engineering for few-shot style transfer, LangChain pipelines
          with structured outputs, Supabase schema design and live data
          migration, UI/UX implementation with Tailwind and shadcn.
        </p>
      </ProjectSection>

      <NextProject
        to="/projects/slide-deck-generator"
        num="02 / NEXT"
        title="Instructor Sprint Lecture Materials Generator"
        tag="Turns Eskwelabs Class PRDs into ready-to-use Google Slides decks with speaker notes."
      />
    </>
  );
}
