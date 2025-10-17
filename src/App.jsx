import React, { useState } from 'react';
import Sidebar from './components/Sidebar.jsx';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Resume from './components/Resume.jsx';
import Portfolio from './components/Portfolio.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';

import GravityTags from './components/GravityTags.jsx';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderActiveComponent = () => {
    switch(activeSection) {
      case 'about':
        return <About />;
      case 'resume':
        return <Resume />;
      case 'portfolio':
        return <Portfolio />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <GravityTags />
      <main>
        <Sidebar />
        <div className="main-content">
          <Navbar setActiveSection={setActiveSection} />
          {renderActiveComponent()}
        </div>
      </main>
    </>
  );
}

export default App;
