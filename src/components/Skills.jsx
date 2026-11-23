import { site } from '../data/site';
import Reveal from './ui/Reveal';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal>
          <p className="section-label">Skills</p>
          <h2 className="section-title">Technologies I Work With</h2>
          <p className="section-lead">
            Organized by the layers I use to design, build, and ship complete products.
          </p>
        </Reveal>

        <div className="skills-grid">
          {site.skills.map((group, index) => (
            <Reveal key={group.category} delay={Math.min(index * 0.05, 0.25)}>
              <article className="card skill-card">
                <h3>{group.category}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span className="chip" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
