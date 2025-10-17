import React from 'react';
import content from '../content.json';
import Myresume from './assets/resume/Saqib-Waheed-Resume.pdf'

const Resume = () => {
  const { resume } = content;
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = Myresume; // Replace with the actual path to your resume
    link.download = "Saqib-Waheed-Resume.pdf"; // Set the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <article className="resume active" data-page="resume">
      <header>
        <h2 className="h2 article-title">{resume.title}</h2>
      </header>

      <section className="timeline" style={{display:'flex',justifyContent:'space-between',alignItems:'self-start'}}>
        <div>
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ul className="timeline-list">
          {resume.education.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.date}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ul>
        </div>
        <div>
          <button
            className="form-btn"
            onClick={downloadResume}
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>
              Download Resume
            </span>
          </button>
        </div>
      </section>

      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <ion-icon name="book-outline"></ion-icon>
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ul className="timeline-list">
          {resume.experience.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="h4 timeline-item-title">{item.title}</h4>
              <span>{item.date}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <ul className="skills-list content-card">
          {resume.skills.map((skill, index) => (
            <li key={index} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.value}>{skill.value}%</data>
              </div>
              <div className="skill-progress-bg">
                <div className="skill-progress-fill" style={{ width: `${skill.value}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default Resume;
