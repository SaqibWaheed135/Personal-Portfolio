import React, { useState } from 'react';
import content from '../content.json';

const Portfolio = () => {
  const { portfolio } = content;
  const categories = [...new Set(portfolio.projects.map(project => project.category))];
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleProjectClick = (e, project) => {
    e.preventDefault();
    
    // If project is Mobile Application, show modal with download options
    if (project.category === "Mobile Application") {
      setSelectedProject(project);
      setShowModal(true);
    } else {
      // For websites, open in new tab
      window.open(project.url, '_blank');
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
  };

  const handleDownloadAPK = () => {
    if (selectedProject && selectedProject.apkUrl) {
      window.open(selectedProject.apkUrl, '_blank');
    }
  };

  return (
    <article className="portfolio active" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">{portfolio.title}</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button className="active" data-filter-btn>All</button>
          </li>
          {categories.map((category, index) => (
            <li key={index} className="filter-item">
              <button data-filter-btn>{category}</button>
            </li>
          ))}
        </ul>

        <ul className="project-list">
          {portfolio.projects.map((project, index) => (
            <li key={index} className="project-item active" data-filter-item data-category={project.category}>
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

      {/* APK Download Modal */}
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
                {/* APK Download Button */}
                {selectedProject.apkUrl && (
                  <button className="download-btn apk-btn" onClick={handleDownloadAPK}>
                    <ion-icon name="download-outline"></ion-icon>
                    <span>Download APK</span>
                  </button>
                )}

                {/* Play Store Button */}
                {selectedProject.url && selectedProject.url !== "#" && (
                  <a 
                    href={selectedProject.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="download-btn playstore-btn"
                  >
                    <ion-icon name="logo-google-playstore"></ion-icon>
                    <span>View on Play Store</span>
                  </a>
                )}

                {/* GitHub Button */}
                {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="download-btn github-btn"
                  >
                    <ion-icon name="logo-github"></ion-icon>
                    <span>View on GitHub</span>
                  </a>
                )}
              </div>

              <div className="installation-note">
                <ion-icon name="information-circle-outline"></ion-icon>
                <p>Enable "Install from Unknown Sources" in your device settings to install APK files</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Modal Overlay */
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

        /* Modal Content */
        .modal-content {
          background: var(--eerie-black-2);
          border: 1px solid var(--jet);
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

        /* Close Button */
        .modal-close-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          background: var(--jet);
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
          background: var(--orange-yellow-crayola);
          transform: rotate(90deg);
        }

        .modal-close-btn ion-icon {
          font-size: 24px;
          color: var(--white-2);
        }

        /* Modal Header */
        .modal-header {
          text-align: center;
          padding: 40px 30px 20px;
          border-bottom: 1px solid var(--jet);
        }

        .modal-icon {
          font-size: 60px;
          color: var(--orange-yellow-crayola);
          margin-bottom: 15px;
        }

        .modal-title {
          font-size: 24px;
          font-weight: 600;
          color: var(--white-1);
          margin-bottom: 8px;
        }

        .modal-category {
          color: var(--light-gray);
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Modal Body */
        .modal-body {
          padding: 30px;
        }

        .modal-description {
          color: var(--light-gray-70);
          line-height: 1.6;
          margin-bottom: 25px;
          text-align: center;
        }

        /* Download Options */
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
          background: linear-gradient(135deg, var(--orange-yellow-crayola), #ff6b35);
          color: white;
        }

        .apk-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(255, 171, 45, 0.4);
        }

        .playstore-btn {
          background: var(--jet);
          color: var(--white-2);
          border: 1px solid var(--jet);
        }

        .playstore-btn:hover {
          background: var(--eerie-black-1);
          border-color: var(--orange-yellow-crayola);
        }

        .github-btn {
          background: var(--jet);
          color: var(--white-2);
          border: 1px solid var(--jet);
        }

        .github-btn:hover {
          background: var(--eerie-black-1);
          border-color: var(--orange-yellow-crayola);
        }

        .download-btn ion-icon {
          font-size: 22px;
        }

        /* Installation Note */
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
          color: var(--orange-yellow-crayola);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .installation-note p {
          color: var(--light-gray-70);
          font-size: 13px;
          line-height: 1.5;
          margin: 0;
        }

        /* Scrollbar Styling */
        .modal-content::-webkit-scrollbar {
          width: 8px;
        }

        .modal-content::-webkit-scrollbar-track {
          background: var(--eerie-black-1);
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: var(--jet);
          border-radius: 10px;
        }

        .modal-content::-webkit-scrollbar-thumb:hover {
          background: var(--orange-yellow-crayola);
        }

        /* Responsive */
        @media (max-width: 580px) {
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