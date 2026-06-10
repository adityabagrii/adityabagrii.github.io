import { useState } from 'react'
import { motion } from 'framer-motion'

const abstracts = {
  recruiter:
    'I am a Computer Science and Artificial Intelligence graduate with experience across AI research, computer vision, medical imaging, multimodal AI, and software engineering. I enjoy building practical AI systems that connect strong technical foundations with real-world product value.',
  research:
    'My work focuses on multimodal learning, visual understanding, temporal modeling, medical AI, and intelligent monitoring systems. I am interested in building AI methods that are not only accurate but also interpretable, structured, and useful in real-world settings.',
  developer:
    'I build end-to-end AI and software systems using Python, PyTorch, React, FastAPI, OpenCV, Transformers, and modern engineering workflows. I care about clean architecture, reproducible experiments, readable code, and deployable products.',
}

const tabs = [
  ['recruiter', 'Recruiter Summary'],
  ['research', 'Research Summary'],
  ['developer', 'Developer Summary'],
]

export function AbstractSwitcher() {
  const [active, setActive] = useState('recruiter')

  return (
    <div className="paper-card abstract-card">
      <div className="tab-list" role="tablist" aria-label="Abstract versions">
        {tabs.map(([id, label]) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={active === id}
            className={active === id ? 'tab active' : 'tab'}
            onClick={() => setActive(id)}
          >
            {label}
          </button>
        ))}
      </div>
      <motion.p
        key={active}
        className="abstract-text"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        {abstracts[active]}
      </motion.p>
    </div>
  )
}
