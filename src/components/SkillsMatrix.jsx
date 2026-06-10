export function SkillsMatrix({ skills }) {
  return (
    <div className="skills-grid">
      {skills.map((group) => (
        <article className="paper-card skill-card" key={group.title}>
          <h3>{group.title}</h3>
          <p className="skill-description">{group.description}</p>
          <div className="chip-row">
            {group.skills.map((skill) => (
              <span className="chip skill-chip" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  )
}
