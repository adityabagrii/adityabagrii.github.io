export function ProcessPipeline({ steps }) {
  return (
    <div className="methodology-grid" aria-label="Technical problem solving process">
      {steps.map((step) => (
        <article className="paper-card methodology-card" key={step.number}>
          <span className="step-number">{step.number}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </article>
      ))}
    </div>
  )
}
