import React, { useEffect, useState } from 'react';

const GravityTags = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);
  const [isLaptop, setIsLaptop] = useState(
    window.innerWidth >= 1024 && window.innerWidth <= 1920
  );
   useEffect(() => {
    const handleResize = () => {
      setIsLaptop(window.innerWidth >= 1024 && window.innerWidth <= 1920);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const createTag = () => {
      const tag = document.createElement('div');
      tag.classList.add('gravity-tag');
      tag.textContent = tags[Math.floor(Math.random() * tags.length)];
      tag.style.left = Math.random() * window.innerWidth + 'px';
      tag.style.backgroundColor = googleColors[Math.floor(Math.random() * googleColors.length)];
      tag.style.animationDuration = (Math.random() * 3 + 2) + 's';
      document.querySelector('.gravity-container').appendChild(tag);
      
      tag.addEventListener('animationend', () => tag.remove());
    };

    const tags = [
      'React', 'JavaScript', 'HTML5', 'CSS3', 
      'Node.js', 'MongoDB', 'UI/UX', 'Git',
      'TypeScript', 'REST API', 'Redux', 'Responsive',
      'Firebase', 'AWS', 'Docker', 'GraphQL'
    ];
  
    const googleColors = [
      '#4285f4', // Google Blue
      '#34a853', // Google Green  
      '#fbbc05', // Google Yellow
      '#ea4335', // Google Red
    ];

    const interval = setInterval(createTag, 500);
    return () => clearInterval(interval);
  }, [isDesktop]);

  return isDesktop ? <div className="gravity-container"></div> : null;
};

export default GravityTags;