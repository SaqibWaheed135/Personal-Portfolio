import React, { useEffect, useState } from 'react';
import content from '../content.json';

const getCategoryIcon = (category) => {
  if (category === 'Mobile Application') return 'phone-portrait-outline';
  if (category === 'Wordpress Websites') return 'logo-wordpress';
  if (category === 'Shopify Websites') return 'bag-handle-outline';
  return 'globe-outline';
};

const getActionLabel = (project) => {
  if (project.category === 'Mobile Application') return 'View app';
  return 'Visit site';
};

const Portfolio = () => {
  const { portfolio } = content;
  const categories = [...new Set(portfolio.projects.map((project) => project.category))];
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectOpen, setSelectOpen] = useState(false);

  const filteredProjects =
    activeFilter === 'All'
      ? portfolio.projects
      : portfolio.projects.filter((project) => project.category === activeFilter);

  const handleProjectClick = (e, project) => {
    e.preventDefault();

    if (project.category === 'Mobile Application') {
      setSelectedProject(project);
      setShowModal(true);
      return;
    }

    if (project.url && project.url !== '#') {
      window.open(project.url, '_blank', 'noopener,noreferrer');
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const handleDownloadAPK = () => {
    if (!selectedProject?.apk) return;

    const link = document.createElement('a');
    link.href = selectedProject.apk;
    link.download = `${selectedProject.title.replace(/\s+/g, '_')}.apk`;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    setSelectOpen(false);
  };

  useEffect(() => {
    if (!showModal) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeModal();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [showModal]);

  const filterOptions = ['All', ...categories];

  return (
    <article className="portfolio active" data-page="portfolio">
      <header className="portfolio-header">
        <h2 className="h2 article-title">{portfolio.title}</h2>
        <p className="portfolio-subtitle">
          Selected mobile apps and websites shipped for clients and products.
        </p>
      </header>

      <section className="projects">
        <ul className="filter-list portfolio-filters">
          {filterOptions.map((category) => {
            const count =
              category === 'All'
                ? portfolio.projects.length
                : portfolio.projects.filter((project) => project.category === category).length;

            return (
              <li key={category} className="filter-item">
                <button
                  type="button"
                  className={activeFilter === category ? 'active' : ''}
                  onClick={() => handleFilterClick(category)}
                  data-filter-btn
                >
                  <span>{category}</span>
                  <em className="filter-count">{count}</em>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="filter-select-box">
          <button
            type="button"
            className={`filter-select ${selectOpen ? 'active' : ''}`}
            onClick={() => setSelectOpen((open) => !open)}
          >
            <div className="filter-select-value">{activeFilter}</div>
            <div className="select-icon">
              <ion-icon name="chevron-down"></ion-icon>
            </div>
          </button>

          <ul className={`select-list ${selectOpen ? 'active' : ''}`}>
            {filterOptions.map((category) => (
              <li key={category} className="select-item">
                <button type="button" onClick={() => handleFilterClick(category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list portfolio-grid">
          {filteredProjects.map((project, index) => (
            <li
              key={`${project.title}-${index}`}
              className="project-item active portfolio-card"
              data-filter-item
              data-category={project.category}
              style={{ animationDelay: `${Math.min(index, 8) * 40}ms` }}
            >
              <a href={project.url || '#'} onClick={(e) => handleProjectClick(e, project)}>
                <figure className="project-img portfolio-media">
                  <div className="project-item-icon-box">
                    <ion-icon
                      name={
                        project.category === 'Mobile Application'
                          ? 'phone-portrait-outline'
                          : 'open-outline'
                      }
                    ></ion-icon>
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <span className="portfolio-media-glow" aria-hidden="true" />
                </figure>

                <div className="portfolio-card-body">
                  <div className="portfolio-card-meta">
                    <ion-icon name={getCategoryIcon(project.category)}></ion-icon>
                    <p className="project-category">{project.category}</p>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <span className="portfolio-card-cta">
                    {getActionLabel(project)}
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {filteredProjects.length === 0 && (
          <p className="portfolio-empty">No projects in this category yet.</p>
        )}
      </section>

      {showModal && selectedProject && (
        <div className="modal-overlay" onClick={closeModal} role="presentation">
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-modal-title"
          >
            <button type="button" className="modal-close-btn" onClick={closeModal} aria-label="Close">
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="modal-preview">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>

            <div className="modal-header">
              <p className="modal-category">{selectedProject.category}</p>
              <h3 id="portfolio-modal-title" className="modal-title">
                {selectedProject.title}
              </h3>
              {selectedProject.description && (
                <p className="modal-description">{selectedProject.description}</p>
              )}
            </div>

            <div className="modal-body">
              <div className="download-options">
                {selectedProject.hasApk && selectedProject.apk && (
                  <button type="button" className="download-btn apk-btn" onClick={handleDownloadAPK}>
                    <ion-icon name="download-outline"></ion-icon>
                    <span>Download APK</span>
                  </button>
                )}

                {selectedProject.url &&
                  selectedProject.url !== '#' &&
                  (selectedProject.url.includes('play.google.com') ||
                    selectedProject.url.includes('github.com')) && (
                    <a
                      href={selectedProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`download-btn ${
                        selectedProject.url.includes('github.com') ? 'github-btn' : 'playstore-btn'
                      }`}
                    >
                      <ion-icon
                        name={
                          selectedProject.url.includes('github.com')
                            ? 'logo-github'
                            : 'logo-google-playstore'
                        }
                      ></ion-icon>
                      <span>
                        {selectedProject.url.includes('github.com')
                          ? 'View on GitHub'
                          : 'View on Play Store'}
                      </span>
                    </a>
                  )}
              </div>

              {selectedProject.hasApk && (
                <div className="installation-note">
                  <ion-icon name="information-circle-outline"></ion-icon>
                  <p>
                    Enable “Install from Unknown Sources” in your device settings to install APK
                    files.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .portfolio .portfolio-header {
          margin-bottom: 8px;
        }

        .portfolio .portfolio-subtitle {
          color: var(--light-gray-70);
          font-size: var(--fs-6);
          font-weight: var(--fw-300);
          line-height: 1.7;
          max-width: 42ch;
          margin: -8px 0 28px;
        }

        .portfolio .portfolio-filters {
          display: none;
          flex-wrap: wrap;
          gap: 10px;
          padding-left: 0;
          margin-bottom: 28px;
        }

        .portfolio .portfolio-filters .filter-item button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 14px;
          border: 1px solid var(--jet);
          border-radius: 12px;
          background: var(--eerie-black-1);
          color: var(--light-gray);
          font-size: var(--fs-6);
          font-weight: var(--fw-400);
          transition: var(--transition-1);
        }

        .portfolio .portfolio-filters .filter-item button:hover {
          color: var(--orange-yellow-crayola);
          border-color: hsla(45, 100%, 72%, 0.35);
        }

        .portfolio .portfolio-filters .filter-item button.active {
          color: var(--smoky-black);
          background: var(--text-gradient-yellow);
          border-color: transparent;
          box-shadow: 0 8px 20px hsla(45, 100%, 50%, 0.18);
        }

        .portfolio .filter-count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 22px;
          height: 22px;
          padding: 0 6px;
          border-radius: 999px;
          background: hsla(0, 0%, 100%, 0.08);
          color: inherit;
          font-size: 11px;
          font-style: normal;
          font-weight: var(--fw-500);
        }

        .portfolio .portfolio-filters .filter-item button.active .filter-count {
          background: hsla(0, 0%, 0%, 0.18);
        }

        .portfolio .filter-select-box .select-list.active {
          opacity: 1;
          visibility: visible;
          pointer-events: all;
        }

        .portfolio .portfolio-grid {
          gap: 24px;
        }

        .portfolio .portfolio-card {
          display: block;
          animation: portfolioRise 0.45s ease both;
        }

        @keyframes portfolioRise {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .portfolio .portfolio-card > a {
          display: block;
          height: 100%;
          padding: 12px;
          border-radius: 20px;
          border: 1px solid var(--jet);
          background:
            linear-gradient(var(--eerie-black-2), var(--eerie-black-2)) padding-box,
            var(--border-gradient-onyx) border-box;
          box-shadow: var(--shadow-1);
          transition: transform var(--transition-1), border-color var(--transition-1), box-shadow var(--transition-1);
        }

        .portfolio .portfolio-card > a:hover {
          transform: translateY(-6px);
          border-color: hsla(45, 100%, 72%, 0.35);
          box-shadow: var(--shadow-2);
        }

        .portfolio .portfolio-media {
          position: relative;
          height: 190px;
          margin-bottom: 16px;
          border-radius: 16px;
          overflow: hidden;
          background:
            radial-gradient(circle at 20% 20%, hsla(45, 100%, 72%, 0.12), transparent 45%),
            linear-gradient(160deg, hsl(240, 2%, 16%), hsl(240, 2%, 10%));
          border: 1px solid hsla(0, 0%, 100%, 0.04);
        }

        .portfolio .portfolio-media img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 22px;
          border-radius: 16px;
          transition: transform 0.45s ease;
        }

        .portfolio .portfolio-card > a:hover .portfolio-media img {
          transform: scale(1.06);
        }

        .portfolio .portfolio-media-glow {
          position: absolute;
          inset: auto -20% -35% -20%;
          height: 55%;
          background: radial-gradient(circle, hsla(45, 100%, 72%, 0.18), transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity var(--transition-1);
        }

        .portfolio .portfolio-card > a:hover .portfolio-media-glow {
          opacity: 1;
        }

        .portfolio .portfolio-media .project-item-icon-box {
          background: var(--orange-yellow-crayola);
          color: var(--smoky-black);
          border-radius: 14px;
          padding: 14px;
          box-shadow: 0 10px 30px hsla(45, 100%, 40%, 0.35);
        }

        .portfolio .portfolio-card-body {
          padding: 0 4px 4px;
        }

        .portfolio .portfolio-card-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }

        .portfolio .portfolio-card-meta ion-icon {
          color: var(--orange-yellow-crayola);
          font-size: 15px;
        }

        .portfolio .portfolio-card-meta .project-category {
          margin: 0;
          color: var(--vegas-gold);
          font-size: var(--fs-7);
          font-weight: var(--fw-500);
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .portfolio .portfolio-card .project-title {
          margin: 0 0 12px;
          color: var(--white-2);
          font-size: var(--fs-4);
          font-weight: var(--fw-500);
          line-height: 1.35;
          text-transform: none;
        }

        .portfolio .portfolio-card > a:hover .project-title {
          color: var(--orange-yellow-crayola);
        }

        .portfolio .portfolio-card-cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--light-gray-70);
          font-size: var(--fs-7);
          font-weight: var(--fw-400);
          transition: gap var(--transition-1), color var(--transition-1);
        }

        .portfolio .portfolio-card-cta ion-icon {
          font-size: 14px;
        }

        .portfolio .portfolio-card > a:hover .portfolio-card-cta {
          color: var(--orange-yellow-crayola);
          gap: 10px;
        }

        .portfolio .portfolio-empty {
          color: var(--light-gray-70);
          font-size: var(--fs-6);
          text-align: center;
          padding: 40px 16px;
          border: 1px dashed var(--jet);
          border-radius: 16px;
        }

        .portfolio .modal-overlay {
          position: fixed;
          inset: 0;
          background: hsla(0, 0%, 0%, 0.72);
          backdrop-filter: blur(12px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          padding: 20px;
          animation: portfolioFadeIn 0.25s ease;
        }

        @keyframes portfolioFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .portfolio .modal-content {
          background: var(--eerie-black-2);
          border: 1px solid var(--jet);
          border-radius: 22px;
          max-width: 460px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          box-shadow: var(--shadow-5);
          animation: portfolioSlideUp 0.3s ease;
        }

        @keyframes portfolioSlideUp {
          from {
            transform: translateY(28px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .portfolio .modal-close-btn {
          position: absolute;
          top: 14px;
          right: 14px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--onyx);
          border: 1px solid var(--jet);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 2;
          transition: var(--transition-1);
        }

        .portfolio .modal-close-btn:hover {
          background: var(--orange-yellow-crayola);
          border-color: transparent;
        }

        .portfolio .modal-close-btn ion-icon {
          font-size: 20px;
          color: var(--white-2);
        }

        .portfolio .modal-close-btn:hover ion-icon {
          color: var(--smoky-black);
        }

        .portfolio .modal-preview {
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          background:
            radial-gradient(circle at 50% 30%, hsla(45, 100%, 72%, 0.14), transparent 55%),
            linear-gradient(160deg, hsl(240, 2%, 16%), hsl(240, 2%, 10%));
          border-bottom: 1px solid var(--jet);
        }

        .portfolio .modal-preview img {
          max-width: 70%;
          max-height: 120px;
          object-fit: contain;
        }

        .portfolio .modal-header {
          text-align: left;
          padding: 24px 28px 8px;
        }

        .portfolio .modal-category {
          color: var(--vegas-gold);
          font-size: var(--fs-7);
          font-weight: var(--fw-500);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 8px;
        }

        .portfolio .modal-title {
          font-size: var(--fs-1);
          font-weight: var(--fw-600);
          color: var(--white-2);
          margin-bottom: 10px;
        }

        .portfolio .modal-description {
          color: var(--light-gray-70);
          line-height: 1.65;
          font-size: var(--fs-6);
        }

        .portfolio .modal-body {
          padding: 16px 28px 28px;
        }

        .portfolio .download-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 16px;
        }

        .portfolio .download-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 14px 18px;
          border-radius: 14px;
          font-size: var(--fs-5);
          font-weight: var(--fw-500);
          cursor: pointer;
          transition: var(--transition-1);
          text-decoration: none;
          border: none;
        }

        .portfolio .apk-btn {
          background: var(--text-gradient-yellow);
          color: var(--smoky-black);
        }

        .portfolio .apk-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 24px hsla(45, 100%, 50%, 0.25);
        }

        .portfolio .playstore-btn,
        .portfolio .github-btn {
          background: var(--onyx);
          color: var(--white-2);
          border: 1px solid var(--jet);
        }

        .portfolio .playstore-btn:hover,
        .portfolio .github-btn:hover {
          border-color: var(--orange-yellow-crayola);
          color: var(--orange-yellow-crayola);
        }

        .portfolio .download-btn ion-icon {
          font-size: 20px;
        }

        .portfolio .installation-note {
          display: flex;
          gap: 10px;
          padding: 14px;
          background: hsla(45, 100%, 72%, 0.08);
          border: 1px solid hsla(45, 100%, 72%, 0.22);
          border-radius: 12px;
          align-items: flex-start;
        }

        .portfolio .installation-note ion-icon {
          font-size: 20px;
          color: var(--orange-yellow-crayola);
          flex-shrink: 0;
          margin-top: 1px;
        }

        .portfolio .installation-note p {
          color: var(--light-gray-70);
          font-size: var(--fs-7);
          line-height: 1.55;
          margin: 0;
        }

        @media (min-width: 580px) {
          .portfolio .portfolio-filters {
            display: flex;
          }

          .portfolio .filter-select-box {
            display: none;
          }
        }

        @media (min-width: 768px) {
          .portfolio .portfolio-media {
            height: 200px;
          }
        }

        @media (max-width: 579px) {
          .portfolio .portfolio-subtitle {
            margin-bottom: 22px;
          }

          .portfolio .modal-header,
          .portfolio .modal-body {
            padding-left: 20px;
            padding-right: 20px;
          }

          .portfolio .modal-title {
            font-size: var(--fs-2);
          }
        }
      `}</style>
    </article>
  );
};

export default Portfolio;
