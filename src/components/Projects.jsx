import { site } from '../data/site';
import Reveal from './ui/Reveal';
import { IconExternal } from './ui/Icons';

function ProjectCard({ project, featured = false }) {
  const mediaClass = [
    'project-media',
    project.image && project.name === 'ARLSP' ? 'cover' : '',
    !project.image ? `abstract ${project.accent || ''}` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={`card project-card ${featured ? 'featured' : ''}`}>
      <div className={mediaClass}>
        {project.image ? (
          <img src={project.image} alt={`${project.name} preview`} loading="lazy" />
        ) : (
          <span className="abstract-mark">{project.name}</span>
        )}
      </div>
      <div className="project-body">
        <h3 className="project-name">{project.name}</h3>
        <p className="project-desc">{project.description}</p>
        <p className="project-contribution">
          <strong>Contribution — </strong>
          {project.contribution}
        </p>
        <div className="project-meta">
          {project.platforms?.map((platform) => (
            <span className="chip" key={platform}>
              {platform}
            </span>
          ))}
          {project.stack.map((tech) => (
            <span className="chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        {(project.links?.live || project.links?.store || project.apk) && (
          <div className="project-links">
            {project.links?.live && (
              <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                Live site <IconExternal />
              </a>
            )}
            {project.links?.store && (
              <a href={project.links.store} target="_blank" rel="noopener noreferrer">
                Play Store <IconExternal />
              </a>
            )}
            {project.apk && (
              <a href={project.apk} target="_blank" rel="noopener noreferrer">
                Download APK <IconExternal />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = site.projects.filter((p) => p.featured);
  const secondary = site.projects.filter((p) => !p.featured);

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="projects-header">
          <Reveal>
            <p className="section-label">Projects</p>
            <h2 className="section-title">Selected Work</h2>
            <p className="section-lead">
              Products, platforms, and engineering solutions I&apos;ve helped bring to life.
            </p>
          </Reveal>
        </div>

        <div className="project-grid">
          {featured.map((project, index) => (
            <Reveal key={project.name} delay={Math.min(index * 0.06, 0.24)}>
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
          {secondary.map((project, index) => (
            <Reveal key={project.name} delay={Math.min(index * 0.06, 0.18)}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.08}>
          <div className="supporting-grid">
            {site.supportingProjects.map((project) => (
              <a
                key={project.name}
                className="card support-card"
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="support-thumb">
                  <img src={project.image} alt={project.name} loading="lazy" />
                </div>
                <div>
                  <h3>{project.name}</h3>
                  <span>{project.category}</span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
