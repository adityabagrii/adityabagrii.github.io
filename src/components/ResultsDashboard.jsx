export function ResultsDashboard({ metrics, interpretation }) {
  return (
    <div className="results-layout">
      <div className="results-grid">
        {metrics.map((metric) => (
          <article className="paper-card result-card" key={metric.title}>
            <p className="card-eyebrow">{metric.title}</p>
            <h3>{metric.value}</h3>
            <p className="metric-label">{metric.label}</p>
            <p>{metric.description}</p>
            <div className="chip-row">
              {metric.tags.map((tag) => (
                <span className="chip" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <aside className="paper-card interpretation-card">
        <p className="card-eyebrow">Research Metrics</p>
        <h3>{interpretation.title}</h3>
        <p>{interpretation.content}</p>
      </aside>
    </div>
  )
}
