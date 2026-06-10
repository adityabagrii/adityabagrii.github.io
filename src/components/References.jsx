export function References({ references }) {
  return (
    <div className="references-list">
      {references.map((reference) => (
        <a
          className="reference-item"
          href={reference.href}
          key={reference.id}
          target={reference.href.startsWith('http') ? '_blank' : undefined}
          rel={reference.href.startsWith('http') ? 'noreferrer' : undefined}
        >
          <span>{reference.id}</span>
          <p>
            <strong>{reference.title}</strong> - {reference.description}
          </p>
        </a>
      ))}
    </div>
  )
}
