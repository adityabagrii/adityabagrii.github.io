import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function TableOfContents({ sections, activeId }) {
  const [open, setOpen] = useState(false)

  const handleClick = () => setOpen(false)

  return (
    <>
      <button
        type="button"
        className="mobile-toc-button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="toc-navigation"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
        Contents
      </button>

      <aside className={`toc-panel ${open ? 'toc-panel-open' : ''}`}>
        <nav id="toc-navigation" aria-label="Table of contents">
          <p className="toc-title">Table of Contents</p>
          <ol>
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  onClick={handleClick}
                  className={activeId === section.id ? 'active' : ''}
                >
                  <span>{section.label}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </aside>
    </>
  )
}
