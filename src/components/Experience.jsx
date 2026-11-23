import { site } from '../data/site';
import Reveal from './ui/Reveal';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal>
          <p className="section-label">Experience</p>
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-lead">
            Production roles across mobile, full-stack, streaming, and AI-powered product development.
          </p>
        </Reveal>

        <div className="timeline">
          {site.experience.map((job, index) => (
            <Reveal key={`${job.company}-${job.role}-${job.date}`} delay={Math.min(index * 0.06, 0.3)}>
              <article className="card exp-card">
                <div className="exp-top">
                  <div>
                    <h3 className="exp-role">{job.role}</h3>
                    <p className="exp-company">
                      {job.company}
                      {job.location ? ` · ${job.location}` : ''}
                    </p>
                  </div>
                  <p className="exp-date">{job.date}</p>
                </div>
                <p className="exp-summary">{job.summary}</p>
                <ul className="exp-highlights">
                  {job.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="exp-stack">
                  {job.stack.map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="card education-card">
            <div>
              <h3>{site.education.degree}</h3>
              <p>{site.education.school}</p>
            </div>
            <p className="exp-date">{site.education.date}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
