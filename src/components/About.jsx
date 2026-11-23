import { site } from '../data/site';
import Reveal from './ui/Reveal';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <Reveal>
          <p className="section-label">About</p>
          <h2 className="section-title">{site.about.heading}</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-copy" delay={0.05}>
            {site.about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="capability-list">
              {site.about.capabilities.map((item) => (
                <li key={item.title} className="card capability-item">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
