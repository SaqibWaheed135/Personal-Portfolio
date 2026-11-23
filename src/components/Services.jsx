import { site } from '../data/site';
import Reveal from './ui/Reveal';
import { ServiceIcon } from './ui/Icons';

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal>
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">What I Do</h2>
          <p className="section-lead">
            Practical engineering services focused on shipping reliable, production-ready products.
          </p>
        </Reveal>

        <div className="services-grid">
          {site.services.map((service, index) => (
            <Reveal key={service.title} delay={Math.min(index * 0.05, 0.25)}>
              <article className="card service-card">
                <div className="service-icon">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="skill-tags">
                  {service.stack.map((item) => (
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
