import React, { useState } from 'react';

const Navbar = ({ setActiveSection }) => {
  const [activeLink, setActiveLink] = useState('about');

  const handleNavClick = (section) => {
    setActiveLink(section);
    setActiveSection(section);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {['about', 'resume', 'portfolio', 'blog', 'contact'].map((section) => (
          <li key={section} className="navbar-item">
            <button 
              className={`navbar-link ${activeLink === section ? 'active' : ''}`}
              onClick={() => handleNavClick(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
