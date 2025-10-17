import React from 'react';
import content from '../content.json';

const About = () => {
  const { about } = content;
  
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="h2 article-title">{about.title}</h2>
      </header>
      
      <section className="about-text">
        {about.text.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </section>

      <section className="service">
        <h3 className="h3 service-title">Skills & Services</h3>
        <ul className="service-list">
          {about.services.map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-icon-box">
                <img src={service.icon} alt={service.title} width="40" />
              </div>
              <div className="service-content-box">
                <h4 className="h4 service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>
        <ul className="testimonials-list has-scrollbar">
          {about.testimonials.map((testimonial, index) => (
            <li key={index} className="testimonials-item">
              <div className="content-card">
                <figure className="testimonials-avatar-box">
                  <img src={testimonial.avatar} alt={testimonial.name} width="60" />
                </figure>
                <h4 className="h4 testimonials-item-title">{testimonial.name}</h4>
                <div className="testimonials-text">
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>
        <ul className="clients-list has-scrollbar">
          {about.clients.map((client, index) => (
            <li key={index} className="clients-item">
              <a href={client.url}>
                <img src={client.logo} alt={client.name} />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
