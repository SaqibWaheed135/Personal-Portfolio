import { motion, useReducedMotion } from 'framer-motion';
import { site } from '../data/site';
import { IconArrow, IconGithub, IconLinkedin, IconMail } from './ui/Icons';

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

  const fadeIn = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
        };

  return (
    <section className="hero" id="home">
      <div className="container hero-layout">
        <div className="hero-content">
          <motion.div {...fade(0)}>
            <div className="availability">
              <span className="availability-dot" aria-hidden="true" />
              {site.availability}
            </div>
          </motion.div>

          <motion.p className="hero-brand" {...fade(0.05)}>
            <span className="hero-brand-name">
              {site.name.split(' ')[0]}
              <br />
              {site.name.split(' ').slice(1).join(' ')}
            </span>
            <span className="hero-brand-title">{site.title}</span>
          </motion.p>

          <motion.h1 {...fade(0.1)}>{site.hero.headline}</motion.h1>

          <motion.p className="hero-sub" {...fade(0.16)}>
            {site.hero.subheadline}
          </motion.p>

          <motion.div className="hero-ctas" {...fade(0.22)}>
            <a className="btn btn-primary" href="#projects">
              View My Work
              <IconArrow />
            </a>
            <a className="btn btn-secondary" href="#contact">
              Let&apos;s Talk
            </a>
          </motion.div>

          <motion.div className="hero-social" {...fade(0.28)}>
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

        <div className="hero-mark" aria-hidden="true">
          <motion.span {...fadeIn(0.25)}>{site.monogram}</motion.span>
        </div>
      </div>
    </section>
  );
}
