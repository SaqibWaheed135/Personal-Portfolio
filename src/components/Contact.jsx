import { useMemo, useState } from 'react';
import { site } from '../data/site';
import Reveal from './ui/Reveal';
import { IconGithub, IconLinkedin, IconMail } from './ui/Icons';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', message: '' });
  const formspreeId = import.meta.env.VITE_FORMSPREE_ID;

  const endpoint = useMemo(() => {
    if (!formspreeId) return null;
    return `https://formspree.io/f/${formspreeId}`;
  }, [formspreeId]);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!emailPattern.test(form.email.trim())) next.email = 'Enter a valid email address.';
    if (!form.message.trim() || form.message.trim().length < 10) {
      next.message = 'Please write a short message (at least 10 characters).';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setStatus({ type: '', message: '' });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: '', message: '' });
    if (!validate()) return;

    if (endpoint) {
      try {
        setStatus({ type: '', message: 'Sending…' });
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            message: form.message.trim(),
          }),
        });

        if (!res.ok) throw new Error('Request failed');
        setForm({ name: '', email: '', message: '' });
        setStatus({ type: 'ok', message: 'Message sent. I’ll get back to you soon.' });
      } catch {
        setStatus({
          type: 'err',
          message: 'Could not send through the form service. Please email me directly.',
        });
      }
      return;
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(
      `${form.message.trim()}\n\n—\n${form.name.trim()}\n${form.email.trim()}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus({
      type: 'ok',
      message: 'Opening your email client with this message. If nothing opens, email me directly.',
    });
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <Reveal>
          <p className="section-label">Contact</p>
          <h2 className="section-title">{site.contact.heading}</h2>
          <p className="section-lead">{site.contact.text}</p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="card contact-panel">
            <div className="contact-grid">
              <div className="contact-info">
                <div className="availability" style={{ width: 'fit-content' }}>
                  <span className="availability-dot" aria-hidden="true" />
                  {site.availability}
                </div>

                <a className="contact-link" href={`mailto:${site.email}`}>
                  <IconMail />
                  <span>
                    <strong>Email</strong>
                    {site.email}
                  </span>
                </a>
                <a
                  className="contact-link"
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconLinkedin />
                  <span>
                    <strong>LinkedIn</strong>
                    linkedin.com/in/saqib-waheed
                  </span>
                </a>
                <a
                  className="contact-link"
                  href={site.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconGithub />
                  <span>
                    <strong>GitHub</strong>
                    github.com/SaqibWaheed135
                  </span>
                </a>
              </div>

              <form className="contact-form" onSubmit={onSubmit} noValidate>
                <div className="form-field">
                  <label htmlFor="name">Full name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@company.com"
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>

                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Tell me about the product, role, or problem you want to solve."
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && <span className="error">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>

                <p className="form-note">
                  Prefer email? Reach me directly at{' '}
                  <a href={`mailto:${site.email}`}>{site.email}</a>.
                </p>

                {status.message && (
                  <p className={`form-status ${status.type}`} role="status">
                    {status.message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
