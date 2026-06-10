import { useEffect, useMemo, useState } from 'react'
import { Code2, Download, Mail, Network } from 'lucide-react'
import { ExperienceCard } from './components/ExperienceCard'
import { Hero } from './components/Hero'
import { ProcessPipeline } from './components/ProcessPipeline'
import { ProjectPaperCard } from './components/ProjectPaperCard'
import { References } from './components/References'
import { ResultsDashboard } from './components/ResultsDashboard'
import { Section } from './components/Section'
import { SkillsMatrix } from './components/SkillsMatrix'
import { TableOfContents } from './components/TableOfContents'
import { discussionCards } from './data/discussion'
import { experience } from './data/experience'
import { experiments } from './data/experiments'
import { methodologySteps } from './data/methodology'
import { publications } from './data/publications'
import { references } from './data/references'
import { resultInterpretation, resultMetrics } from './data/results'
import { sections } from './data/sections'
import { skillGroups } from './data/skills'

const getExperienceKey = (item) => `${item.role}-${item.organization}`

function App() {
  const [activeId, setActiveId] = useState('abstract')
  const [openExperience, setOpenExperience] = useState(null)
  const sectionIds = useMemo(() => sections.map((section) => section.id), [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '-18% 0px -58% 0px',
        threshold: [0.08, 0.18, 0.32, 0.5],
      },
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return (
    <div className="app-shell">
      <TableOfContents sections={sections} activeId={activeId} />

      <main className="content-frame">
        <Hero />

        <Section
          id="introduction"
          eyebrow="Introduction"
          title="1. Introduction: Building AI Systems from Research to Deployment"
        >
          <p className="lead">
            I am a Computer Science and Artificial Intelligence graduate from IIIT Delhi,
            working across computer vision, medical imaging, multimodal AI, intelligent
            monitoring, and agentic LLM systems. My work combines research-driven problem
            solving with practical engineering - designing models, building evaluation
            pipelines, and turning experimental ideas into systems that are measurable,
            interpretable, and useful in real-world settings.
          </p>

          <details className="deep-dive manuscript-note">
            <summary>Open motivation appendix</summary>
            <p>
              I approach technical problems like research questions and engineering systems
              at the same time. I care about understanding the problem deeply, building
              reliable pipelines, evaluating with the right metrics, and communicating the
              outcome clearly. My experience spans medical AI models for fracture detection,
              machine learning pipelines for optical-network fault prediction, multimodal
              research systems, and agentic workflows for research synthesis and academic
              automation. This portfolio is structured like a manuscript because it reflects
              that process: define the problem, study the context, design the method, run
              experiments, evaluate results, and explain what the system actually contributes.
            </p>
          </details>

          <div className="three-grid">
            {[
              {
                title: 'Research-Driven Thinking',
                text: 'I like working on AI problems through clear hypotheses, rigorous evaluation, ablations, and evidence-backed conclusions instead of only chasing model outputs.',
              },
              {
                title: 'Applied AI Engineering',
                text: 'I build practical pipelines across computer vision, medical imaging, multimodal AI, and intelligent monitoring with attention to reliability, metrics, and real-world usability.',
              },
              {
                title: 'Systems & Communication',
                text: 'Beyond models, I care about clean engineering, reproducible workflows, technical documentation, and explaining complex AI systems in a way that teams can actually use.',
              },
            ].map((card) => (
              <article className="paper-card compact-card" key={card.title}>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </Section>


        <Section
          id="publications"
          eyebrow="Publications"
          title="2. Publications"
        >
          <p className="lead publications-lead">
            My published research work reflects my interest in building AI systems that
            are measurable, clinically relevant, and grounded in rigorous evaluation.
          </p>
          <div className="publication-list">
            {publications.map((publication) => (
              <article className="paper-card publication-card" key={publication.url}>
                <p className="card-eyebrow">
                  {publication.venue} · {publication.year}
                </p>
                <h3>{publication.title}</h3>
                <p className="publication-authors">{publication.authors}</p>
                <a
                  className="publication-link"
                  href={publication.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View publication
                </a>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="related-work"
          eyebrow="Related Work"
          title="3. Related Work: Experience That Shaped My Direction"
        >
          <div className="experience-grid">
            {experience.slice(0, 1).map((item) => (
              <ExperienceCard
                item={item}
                key={getExperienceKey(item)}
                isOpen={openExperience === getExperienceKey(item)}
                onToggle={() =>
                  setOpenExperience((current) =>
                    current === getExperienceKey(item) ? null : getExperienceKey(item),
                  )
                }
              />
            ))}
            <div className="experience-columns">
              {[0, 1].map((column) => (
                <div className="experience-column" key={column}>
                  {experience
                    .slice(1)
                    .filter((_, index) => index % 2 === column)
                    .map((item) => (
                      <ExperienceCard
                        item={item}
                        key={getExperienceKey(item)}
                        isOpen={openExperience === getExperienceKey(item)}
                        onToggle={() =>
                          setOpenExperience((current) =>
                            current === getExperienceKey(item)
                              ? null
                              : getExperienceKey(item),
                          )
                        }
                      />
                    ))}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="methodology"
          eyebrow="Methodology"
          title="4. Methodology: How I Approach Technical Problems"
        >
          <p className="lead methodology-lead">
            I approach technical problems as both research questions and engineering
            systems. Before building, I try to understand the problem setting, the data
            behavior, the failure modes, and the evaluation criteria. My workflow is
            experiment-first but product-aware: build the baseline, measure carefully,
            improve through evidence, and package the outcome so it can be reused,
            explained, or deployed.
          </p>
          <ProcessPipeline steps={methodologySteps} />
          <details className="deep-dive manuscript-note">
            <summary>View Methodology Appendix</summary>
            <p>
              My workflow is intentionally evidence-driven. I do not treat model
              performance as a single number; I try to understand why a system works,
              where it fails, and whether the result is useful for the actual problem.
              This mindset comes from working across different settings: medical imaging
              models where recall matters, optical-network monitoring where faults must
              be detected reliably, research pipelines where evaluation has to be
              rigorous, and agentic LLM systems where outputs need structure,
              traceability, and control.
            </p>
          </details>
          <SkillsMatrix skills={skillGroups} />
        </Section>

        <Section
          id="experiments"
          eyebrow="Experiments"
          title="5. Experiments: Projects, Prototypes, and Research Systems"
        >
          <p className="lead experiments-lead">
            These experiments represent the systems I have built across machine learning,
            healthcare AI, language models, full-stack development, and core computer
            science. I like presenting projects as experiments because each one starts
            with a problem, tests a method, and produces a working artifact: whether
            that artifact is a model, a web application, a pipeline, or a systems-level
            implementation.
          </p>
          <div className="project-grid">
            {experiments.map((project) => (
              <ProjectPaperCard project={project} key={project.number} />
            ))}
          </div>
          <p className="github-more-line">
            Visit{' '}
            <a href="https://github.com/adityabagrii" target="_blank" rel="noreferrer">
              GitHub
            </a>{' '}
            for more experiments.
          </p>
        </Section>

        <Section id="results" eyebrow="Results" title="6. Results: What the Work Produced">
          <p className="lead results-lead">
            These are the measurable outputs of my work across AI research, medical
            imaging, optical-network ML, software engineering, and technical
            communication. I use results not just as numbers, but as evidence that a
            system was evaluated, compared, and improved under real constraints.
          </p>
          <ResultsDashboard metrics={resultMetrics} interpretation={resultInterpretation} />
          <details className="deep-dive manuscript-note">
            <summary>View Results Appendix</summary>
            <p>
              The results listed here are intentionally mixed across research, applied
              AI, systems, and communication. I do not want this portfolio to present
              only one type of achievement. My goal is to show that I can design
              experiments, build working systems, evaluate them with meaningful metrics,
              and explain the outcome clearly to technical and non-technical audiences.
            </p>
          </details>
        </Section>

        <Section
          id="discussion"
          eyebrow="Discussion"
          title="7. Discussion: What I Am Optimizing For"
        >
          <p className="lead discussion-lead">
            My current direction is to become the kind of engineer-researcher who can
            move between problem discovery, model development, evaluation, deployment,
            and communication. I am most interested in AI systems that are not only
            impressive in demos, but reliable enough to be measured, explained, and used.
          </p>
          <div className="discussion-grid">
            {discussionCards.map((card) => (
              <article className="paper-card discussion-card" key={card.number}>
                <span className="step-number">{card.number}</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="conclusion"
          eyebrow="Conclusion"
          title="8. Conclusion: Let's Build Useful AI Systems"
        >
          <div className="paper-card closing-card">
            <p>
              I am looking to work on AI and software systems where research ideas become
              reliable products. My strongest interests sit at the intersection of
              computer vision, medical AI, multimodal systems, intelligent monitoring, and
              backend engineering, problems where models need to be measured carefully,
              integrated cleanly, and explained clearly.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="mailto:adityabagrii.work@gmail.com">
                Start a Conversation <Mail size={17} />
              </a>
              <a className="btn" href="/resume.pdf" download>
                Download Resume <Download size={17} />
              </a>
              <a
                className="btn"
                href="https://github.com/adityabagrii"
                target="_blank"
                rel="noreferrer"
              >
                View Codebase <Code2 size={17} />
              </a>
              <a
                className="btn"
                href="https://linkedin.com/in/adityabagrii"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <Network size={17} />
              </a>
            </div>
          </div>
        </Section>

        <Section id="references" eyebrow="References" title="References">
          <References references={references} />
        </Section>

        <Section id="appendix" eyebrow="Appendix" title="Appendix: Additional Materials">
          <div className="paper-card appendix-card">
            <p>
              This section collects supporting material that does not need to interrupt
              the main portfolio narrative: extra builds, certificates, writing samples,
              project notes, and detailed technical artifacts.
            </p>
            <div className="appendix-paths">
              <span className="chip">Additional Projects</span>
              <span className="chip">Certificates</span>
              <span className="chip">Writing Samples</span>
              <span className="chip">Research Notes</span>
              <span className="chip">Project Reports</span>
              <span className="chip">Code Repositories</span>
            </div>
          </div>
        </Section>
      </main>
    </div>
  )
}

export default App
