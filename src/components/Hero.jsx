import { motion, useReducedMotion } from 'framer-motion';
import { site } from '../data/site';
import { IconArrow, IconDownload, IconGithub, IconLinkedin, IconMail } from './ui/Icons';

export default function Hero() {
  const reduce = useReducedMotion();

  const fade = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
        };

  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <motion.div {...fade(0)}>
            <div className="availability">
              <span className="availability-dot" aria-hidden="true" />
              {site.availability}
            </div>
          </motion.div>

          <motion.p className="hero-brand" {...fade(0.05)}>
            {site.name} <span>· {site.title}</span>
          </motion.p>

          <motion.h1 {...fade(0.1)}>{site.hero.headline}</motion.h1>
          <motion.p className="hero-sub" {...fade(0.16)}>
            {site.hero.subheadline}
          </motion.p>
          <motion.p className="hero-copy" {...fade(0.22)}>
            {site.hero.paragraph}
          </motion.p>

          <motion.div className="hero-tech" {...fade(0.28)}>
            {site.hero.technologies.map((tech) => (
              <span className="chip" key={tech}>
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div className="hero-ctas" {...fade(0.34)}>
            <a className="btn btn-primary" href="#projects">
              View My Work
              <IconArrow />
            </a>
            <a className="btn btn-secondary" href="#contact">
              Let&apos;s Talk
            </a>
            <a className="btn btn-ghost" href={site.resumeUrl} download>
              <IconDownload />
              Download Resume
            </a>
          </motion.div>

          <motion.div className="hero-social" {...fade(0.4)}>
            <a href={site.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <IconGithub />
            </a>
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <IconLinkedin />
            </a>
            <a href={site.social.email} aria-label="Email">
              <IconMail />
            </a>
          </motion.div>
        </div>

        <motion.div className="hero-visual" {...fade(0.25)}>
          <div className="card identity-card">
            <div className="identity-top">
              <div>
                <p className="identity-role">{site.title}</p>
                <h2 className="identity-name">{site.name}</h2>
                <p className="identity-role">{site.experienceYears} years shipping products</p>
              </div>
              <span className="brand-mark" aria-hidden="true">
                {site.monogram}
              </span>
            </div>

            <div className="identity-meta">
              <div className="identity-meta-row">
                <span>Focus</span>
                <span>Full-Stack · Mobile · Real-Time</span>
              </div>
              <div className="identity-meta-row">
                <span>Based in</span>
                <span>{site.location}</span>
              </div>
              <div className="identity-meta-row">
                <span>Status</span>
                <span>{site.availability}</span>
              </div>
            </div>

            <div className="terminal" aria-hidden="true">
              <div className="terminal-bar">
                <span className="terminal-dot" />
                <span className="terminal-dot" />
                <span className="terminal-dot" />
              </div>
              <pre>
                <code>
                  <span className="cm">// product ownership</span>
                  {'\n'}
                  <span className="kw">const</span> product = {'{'}
                  {'\n'}
                  {'  '}frontend: <span className="str">&apos;React / React Native&apos;</span>,
                  {'\n'}
                  {'  '}backend: <span className="str">&apos;Node / Express / MongoDB&apos;</span>,
                  {'\n'}
                  {'  '}realtime: <span className="str">&apos;LiveKit · WebSockets · HLS&apos;</span>,
                  {'\n'}
                  {'  '}cloud: <span className="str">&apos;AWS · S3 · Amplify&apos;</span>
                  {'\n'}
                  {'}'};{'\n'}
                  <span className="kw">await</span> ship(product);
                </code>
              </pre>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
