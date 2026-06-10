import { ExternalLink } from 'lucide-react'

export function ProjectPaperCard({ project }) {
  return (
    <article className="paper-card project-card">
      <div className="project-header">
        <p className="card-label">Experiment {project.number}</p>
        <h3>{project.title}</h3>
        <p className="project-category">{project.category}</p>
      </div>

      <div className="project-fields">
        <Field label="Problem" value={project.problem} />
        <Field label="Method" value={project.method} />
        <Field label="Dataset / Input" value={project.dataset} />
        <Field label="Result / Outcome" value={project.result} />
      </div>

      <div>
        <p className="field-label">Tech Stack</p>
        <div className="chip-row">
          {project.techStack.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="project-links" aria-label={`${project.title} repository`}>
        <a href={project.github} aria-label={`${project.title} GitHub repository`}>
          GitHub
          <ExternalLink size={14} />
        </a>
      </div>

      <details className="deep-dive">
        <summary>View Experiment Appendix</summary>
        <p>{project.appendix}</p>
      </details>
    </article>
  )
}

function Field({ label, value }) {
  return (
    <div className="mini-field">
      <span>{label}</span>
      <p>{value}</p>
    </div>
  )
}
