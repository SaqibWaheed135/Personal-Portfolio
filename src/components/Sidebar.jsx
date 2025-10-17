import React, { useState } from 'react';
import content from '../content.json';
import avatar from './assets/images/my-avatar.png';

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);
  const { sidebar } = content;

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <aside className={`sidebar ${isActive ? 'active' : ''}`} data-sidebar>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={avatar} alt={sidebar.name} width="80" />
        </figure>

        <div className="info-content">
  <h1 className="name" title={sidebar.name}>{sidebar.name}</h1>
  <div className="title-scroll">
  <p className="title">{`${sidebar.title} • ${sidebar.title} • ${sidebar.title}`}</p>
</div>
</div>


        <button className="info_more-btn" onClick={toggleSidebar}>
          <span>{isActive ? sidebar.buttons.hide : sidebar.buttons.show}</span>
          <ion-icon name={`chevron-${isActive ? 'up' : 'down'}`}></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="mail-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">{sidebar.contacts.email.title}</p>
              <a href={sidebar.contacts.email.link} className="contact-link">{sidebar.contacts.email.value}</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">{sidebar.contacts.phone.title}</p>
              <a href={sidebar.contacts.phone.link} className="contact-link">{sidebar.contacts.phone.value}</a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">{sidebar.contacts.birthday.title}</p>
              <time dateTime={sidebar.contacts.birthday.datetime}>{sidebar.contacts.birthday.value}</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>
            <div className="contact-info">
              <p className="contact-title">{sidebar.contacts.location.title}</p>
              <address>{sidebar.contacts.location.value}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          {sidebar.social.map((platform, index) => (
            <li key={index} className="social-item">
              <a href={platform.url} className="social-link">
                <ion-icon name={`logo-${platform.name}`}></ion-icon>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
