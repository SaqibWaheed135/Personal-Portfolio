import { useEffect, useState } from 'react';
import { site } from '../data/site';
import { IconDownload } from './ui/Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = site.nav.map((item) => document.getElementById(item.id)).filter(Boolean);
      const offset = window.scrollY + 120;
      let current = 'home';

      for (const section of sections) {
        if (section.offsetTop <= offset) current = section.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const goTo = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a
            href="#home"
            className="brand"
            onClick={(e) => {
              e.preventDefault();
              goTo('home');
            }}
          >
            <span className="brand-mark">{site.monogram}</span>
            <span className="brand-name">{site.name}</span>
          </a>

          <nav className="nav-links" aria-label="Primary">
            {site.nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={active === item.id ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  goTo(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="btn btn-ghost nav-resume" href={site.resumeUrl} download>
              <IconDownload />
              Resume
            </a>
            <button
              type="button"
              className={`nav-toggle ${open ? 'open' : ''}`}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="mobile-menu" role="dialog" aria-label="Mobile navigation">
          {site.nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                goTo(item.id);
              }}
            >
              {item.label}
            </a>
          ))}
          <a className="btn btn-primary" href={site.resumeUrl} download style={{ marginTop: '0.5rem' }}>
            <IconDownload />
            Download Resume
          </a>
        </div>
      )}
    </>
  );
}
