import React, { useState } from 'react';
import content from '../content.json';


const Portfolio = () => {
  const { portfolio } = content;
  const categories = [...new Set(portfolio.projects.map(project => project.category))];
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const handleProjectClick = (e, project) => {
    e.preventDefault();
    
    if (project.category === "Mobile Application") {
      setSelectedProject(project);
      setShowModal(true);
    } else {
      if (project.url && project.url !== "#") {
        window.open(project.url, '_blank');
      }
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const handleDownloadAPK = () => {
    if (selectedProject && selectedProject.apk) {
      const link = document.createElement('a');
      link.href = selectedProject.apk;
      link.download = `${selectedProject.title.replace(/\s+/g, '_')}.apk`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleFilterClick = (category) => {
    setActiveFilter(category);
  };

  const filteredProjects = activeFilter === 'All' 
    ? portfolio.projects 
    : portfolio.projects.filter(project => project.category === activeFilter);

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">{portfolio.title}</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button 
              className={activeFilter === 'All' ? 'active' : ''} 
              onClick={() => handleFilterClick('All')}
              data-filter-btn
            >
              All
            </button>
          </li>
          {categories.map((category, index) => (
            <li key={index} className="filter-item">
              <button 
                className={activeFilter === category ? 'active' : ''}
                onClick={() => handleFilterClick(category)}
                data-filter-btn
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li 
              key={index} 
              className="project-item active" 
              data-filter-item 
              data-category={project.category}
            >
              <a href={project.url} onClick={(e) => handleProjectClick(e, project)}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <ion-icon name="eye-outline"></ion-icon>
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {showModal && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>
              <ion-icon name="close-outline"></ion-icon>
            </button>

            <div className="modal-header">
              <ion-icon name="phone-portrait-outline" className="modal-icon"></ion-icon>
              <h3 className="modal-title">{selectedProject.title}</h3>
              <p className="modal-category">{selectedProject.category}</p>
            </div>

            <div className="modal-body">
              {selectedProject.description && (
                <p className="modal-description">{selectedProject.description}</p>
              )}

              <div className="download-options">
                {selectedProject.hasApk && selectedProject.apk && (
                  <button className="download-btn apk-btn" onClick={handleDownloadAPK}>
                    <ion-icon name="download-outline"></ion-icon>
                    <span>Download APK</span>
                  </button>
                )}

                {selectedProject.url && 
                 selectedProject.url !== "#" && 
                 (selectedProject.url.includes('play.google.com') || 
                  selectedProject.url.includes('github.com')) && (
                  <a 
                    href={selectedProject.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`download-btn ${selectedProject.url.includes('github.com') ? 'github-btn' : 'playstore-btn'}`}
                  >
                    <ion-icon name={selectedProject.url.includes('github.com') ? 'logo-github' : 'logo-google-playstore'}></ion-icon>
                    <span>{selectedProject.url.includes('github.com') ? 'View on GitHub' : 'View on Play Store'}</span>
                  </a>
                )}
              </div>

              {selectedProject.hasApk && (
                <div className="installation-note">
                  <ion-icon name="information-circle-outline"></ion-icon>
                  <p>Enable "Install from Unknown Sources" in your device settings to install APK files</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .filter-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
          list-style: none;
          padding: 0;
        }

        .filter-item button {
          padding: 8px 20px;
          border: 1px solid #333;
          background: transparent;
          color: #999;
          border-radius: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
        }

        .filter-item button:hover {
          color: #ffab2d;
          border-color: #ffab2d;
        }

        .filter-item button.active {
          background: #ffab2d;
          color: white;
          border-color: #ffab2d;
        }

        .project-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
          list-style: none;
          padding: 0;
        }

        .project-item {
          transition: transform 0.3s ease;
        }

        .project-item:hover {
          transform: translateY(-5px);
        }

        .project-item a {
          text-decoration: none;
          display: block;
        }

        .project-img {
          position: relative;
          margin-bottom: 15px;
          overflow: hidden;
          border-radius: 10px;
        }

        .project-img img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-item:hover .project-img img {
          transform: scale(1.1);
        }

        .project-item-icon-box {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(255, 171, 45, 0.9);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-item:hover .project-item-icon-box {
          opacity: 1;
        }

        .project-item-icon-box ion-icon {
          color: white;
          font-size: 24px;
        }

        .project-title {
          color: white;
          font-size: 16px;
          margin-bottom: 5px;
        }

        .project-category {
          color: #999;
          font-size: 13px;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-content {
          background: #1e1e1f;
          border: 1px solid #333;
          border-radius: 20px;
          max-width: 500px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          position: relative;
          animation: slideUp 0.3s ease;
          box-shadow: 0 10px 50px rgba(0, 0, 0, 0.5);
        }

        @keyframes slideUp {
          from {
            transform: translateY(50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .modal-close-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #333;
          border: none;
          width: 35px;
          height: 35px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          z-index: 1;
        }

        .modal-close-btn:hover {
          background: #ffab2d;
          transform: rotate(90deg);
        }

        .modal-close-btn ion-icon {
          font-size: 24px;
          color: white;
        }

        .modal-header {
          text-align: center;
          padding: 40px 30px 20px;
          border-bottom: 1px solid #333;
        }

        .modal-icon {
          font-size: 60px;
          color: #ffab2d;
          margin-bottom: 15px;
        }

        .modal-title {
          font-size: 24px;
          font-weight: 600;
          color: white;
          margin-bottom: 8px;
        }

        .modal-category {
          color: #999;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .modal-body {
          padding: 30px;
        }

        .modal-description {
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          margin-bottom: 25px;
          text-align: center;
        }

        .download-options {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 20px;
        }

        .download-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 15px 20px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          border: none;
          width: 100%;
        }

        .apk-btn {
          background: linear-gradient(135deg, #ffab2d, #ff6b35);
          color: white;
        }

        .apk-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(255, 171, 45, 0.4);
        }

        .playstore-btn, .github-btn {
          background: #333;
          color: white;
          border: 1px solid #333;
        }

        .playstore-btn:hover, .github-btn:hover {
          background: #1e1e1f;
          border-color: #ffab2d;
        }

        .download-btn ion-icon {
          font-size: 22px;
        }

        .installation-note {
          display: flex;
          gap: 10px;
          padding: 15px;
          background: rgba(255, 171, 45, 0.1);
          border: 1px solid rgba(255, 171, 45, 0.3);
          border-radius: 10px;
          align-items: flex-start;
        }

        .installation-note ion-icon {
          font-size: 24px;
          color: #ffab2d;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .installation-note p {
          color: rgba(255, 255, 255, 0.7);
          font-size: 13px;
          line-height: 1.5;
          margin: 0;
        }

        @media (max-width: 580px) {
          .project-list {
            grid-template-columns: 1fr;
          }

          .modal-content {
            width: 95%;
          }

          .modal-header {
            padding: 30px 20px 15px;
          }

          .modal-body {
            padding: 20px;
          }

          .modal-title {
            font-size: 20px;
          }

          .download-btn {
            padding: 12px 15px;
            font-size: 14px;
          }
        }
      `}</style>
    </article>
  );
};

export default Portfolio;