import { site } from '../data/site';
import { IconGithub, IconLinkedin, IconMail } from './ui/Icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <span className="brand-mark">{site.monogram}</span>
              <span className="brand-name">{site.name}</span>
            </a>
            <p>{site.title}</p>
          </div>

          <nav className="footer-links" aria-label="Footer">
            {site.nav.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <div className="footer-social">
            <a href={site.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <IconGithub />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <IconLinkedin />
            </a>
            <a href={site.social.email} aria-label="Email">
              <IconMail />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
