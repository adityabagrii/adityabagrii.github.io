import { AnimatePresence, motion } from 'framer-motion'

export function ExperienceCard({ item, isOpen, onToggle }) {
  return (
    <article className="paper-card experience-card">
      <p className="card-label">Related Work</p>
      <h3>
        {item.role}
        {item.organization && <span> - {item.organization}</span>}
      </h3>
      <p className="card-area">{item.area}</p>
      <div className="mini-field">
        <span>What I worked on</span>
        <p>{item.description}</p>
      </div>
      <div className="chip-row">
        {item.tags.map((tag) => (
          <span className="chip" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="deep-dive">
        <button
          type="button"
          className="deep-dive-trigger"
          aria-expanded={isOpen}
          onClick={onToggle}
        >
          <span aria-hidden="true">{isOpen ? '-' : '+'}</span>
          Contribution Highlights
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.24, ease: 'easeOut' }}
              style={{ overflow: 'hidden' }}
            >
              <ul className="highlight-list">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  )
}
