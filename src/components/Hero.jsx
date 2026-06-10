import { ArrowDown, Download, Mail, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const authors = [
  ['Research Focus', 'Computer Vision, Multimodal AI', 'Medical AI, LLMs', 'Optical Networks'],
  ['Aditya Bagri', 'B.Tech Computer Science and Artificial Intelligence', 'IIIT Delhi', 'CGPA - 7.79'],
  ['Role Search', 'AI Research', 'Machine Learning Engineering', 'AI Engineering'],
]

export function Hero() {
  return (
    <header className="paper-hero" id="abstract">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="manuscript-rule manuscript-rule-strong" aria-hidden="true" />
        <h1 className="hero-title">Aditya Bagri - Portfolio</h1>
        <div className="manuscript-rule" aria-hidden="true" />

        <div className="author-grid" aria-label="Author and affiliation metadata">
          {authors.map(([name, line1, line2, line3]) => (
            <address key={name} className="author-block">
              <strong>{name}</strong>
              <span>{line1}</span>
              <span>{line2}</span>
              <span>{line3}</span>
            </address>
          ))}
        </div>

        <div className="hero-abstract">
          <h2>Abstract</h2>
          <p>
            My work explores how intelligent systems can understand complex natural language, visual, temporal, and networked data with structure and reliability. I build AI pipelines across computer vision, multimodal learning, long-video event understanding, radiology intelligence, optical-network fault prediction, and agentic research workflows. From designing phase-aware evidence selection for long videos to deploying medical imaging models and building ML systems for network monitoring, I focus on turning research ideas into evaluated, interpretable, and usable systems. This portfolio documents that journey, the problems I study, the methods I build, the experiments I run, and the impact those systems create.
          </p>
          <p className="hero-tagline">Building AI systems from research ideas to working products.</p>
        </div>

        <p className="hero-metadata">
          Computer Science and Artificial Intelligence Graduate | SWE at NatWest | AI
          Researcher | Computer Vision & Multimodal AI Engineer
        </p>

        <div className="hero-actions" aria-label="Primary actions">
          <a className="btn btn-primary" href="#abstract">
            Read Portfolio <ArrowDown size={17} />
          </a>
          <a className="btn" href="#experiments">
            View Projects <Sparkles size={17} />
          </a>
          <a className="btn" href="/resume.pdf">
            Download Resume <Download size={17} />
          </a>
          <a className="btn" href="mailto:adityabagrii.work@gmail.com">
            Contact Me <Mail size={17} />
          </a>
        </div>
      </motion.div>
    </header>
  )
}
