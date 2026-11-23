export const site = {
  name: 'Saqib Waheed',
  monogram: 'SW',
  title: 'Full-Stack Developer',
  experienceYears: '3+',
  location: 'Rawalpindi, Pakistan',
  email: 'xaqibwaheed333@gmail.com',
  phone: '+92 313-8862694',
  availability: 'Available for Opportunities',
  resumeUrl: '/assets/resume/Saqib_Waheed_Full_Stack_Developer_Resume.pdf',
  social: {
    github: 'https://github.com/SaqibWaheed135',
    linkedin: 'https://www.linkedin.com/in/saqib-waheed',
    email: 'mailto:xaqibwaheed333@gmail.com',
  },
  nav: [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    headline: 'Building Digital Products That Scale.',
    subheadline:
      'Full-Stack Developer crafting modern web, mobile, and real-time applications.',
    paragraph:
      'I turn complex ideas into production-ready digital experiences — combining modern frontend engineering, scalable backend systems, and cloud infrastructure.',
    technologies: ['React Native', 'React.js', 'Node.js', 'MongoDB', 'AWS', 'LiveKit'],
  },
  about: {
    heading: 'Engineering Ideas Into Reality.',
    paragraphs: [
      'Full-Stack Developer with 3+ years of experience building and shipping production-ready mobile and web applications. I specialize in React Native, React.js, Node.js, Express.js, and MongoDB, with hands-on work in real-time communication, live streaming, WebSockets, HLS, LiveKit, WebRTC, cloud storage, AWS services, and AI integrations.',
      'I build complete digital products — from intuitive interfaces to scalable backend architectures and cloud-powered infrastructure — across Android, iOS, and the web.',
      'My focus is ownership: designing APIs, integrating third-party services, shipping to production stores and the web, and solving real engineering problems with clean, maintainable systems.',
    ],
    capabilities: [
      {
        title: 'Frontend Engineering',
        description: 'React.js interfaces with clear hierarchy, responsive layouts, and production-ready UX.',
      },
      {
        title: 'Backend Engineering',
        description: 'Node.js and Express APIs, authentication, data models, and reliable service layers.',
      },
      {
        title: 'Mobile Development',
        description: 'Cross-platform React Native apps for Android and iOS, from CLI to store release.',
      },
      {
        title: 'Real-Time Systems',
        description: 'WebSockets, LiveKit, WebRTC, and HLS for streaming and live communication.',
      },
      {
        title: 'Cloud & Infrastructure',
        description: 'AWS, S3/Wasabi media workflows, deployment pipelines, and production ops.',
      },
    ],
  },
  experience: [
    {
      role: 'React Native Full Stack Developer',
      company: 'Global Seo Creative Limited',
      location: 'Islamabad, Pakistan',
      date: 'January 2026 — Present',
      summary:
        'Building a real-time live streaming platform spanning mobile and web, with end-to-end ownership of client features and backend services.',
      highlights: [
        'Developed streaming workflows with React Native, React.js, Node.js, MongoDB, Socket.IO, and HLS.',
        'Built backend APIs, real-time communication flows, and media handling for live operations.',
        'Implemented adaptive HLS (.m3u8) playback across Android, iOS, and web.',
        'Integrated Firebase authentication, push notifications, and cloud media workflows.',
      ],
      stack: ['React Native', 'React.js', 'Node.js', 'MongoDB', 'Socket.IO', 'HLS', 'Firebase'],
    },
    {
      role: 'React Native Developer',
      company: 'Veeivs',
      location: 'Islamabad, Pakistan',
      date: 'September 2025 — December 2025',
      summary:
        'Shipping cross-platform mobile applications with production UI systems and integrated backend services.',
      highlights: [
        'Developed Android and iOS applications with React Native.',
        'Translated Figma designs into reusable, responsive mobile UI components.',
        'Integrated REST APIs, Firebase services, and authentication systems.',
      ],
      stack: ['React Native', 'REST APIs', 'Firebase', 'Figma'],
    },
    {
      role: 'Full Stack Mobile Application Developer',
      company: 'Global Network Creativity Technology',
      location: 'Islamabad, Pakistan',
      date: 'January 2025 — August 2025',
      summary:
        'Engineering streaming, media, and AI-powered applications with full-stack delivery across client and server.',
      highlights: [
        'Built streaming and real-time applications with React Native, Node.js, Express.js, and MongoDB.',
        'Implemented HLS video streaming and Wasabi S3 media upload workflows.',
        'Developed TripBrain AI Planner with Gemini API integration and location-based features.',
      ],
      stack: ['React Native', 'Node.js', 'Express.js', 'MongoDB', 'HLS', 'Wasabi S3', 'Gemini API'],
    },
    {
      role: 'React Native Developer',
      company: 'X Apparel Private Ltd.',
      location: 'Pakistan',
      date: 'January 2024 — December 2024',
      summary:
        'Maintained and evolved production React Native applications with real-time features and performance-focused delivery.',
      highlights: [
        'Developed and maintained React Native applications with Firebase and REST API integrations.',
        'Implemented Redux, real-time communication features, and push notification systems.',
        'Improved application stability through debugging and performance optimization.',
      ],
      stack: ['React Native', 'Firebase', 'Redux', 'WebSockets', 'REST APIs'],
    },
    {
      role: 'React Native Intern',
      company: 'X Apparel Private Ltd.',
      location: 'Pakistan',
      date: 'September 2023 — December 2024',
      summary:
        'Contributed to mobile application development, UI implementation, and production workflows.',
      highlights: [
        'Assisted in developing React Native applications using Expo and Firebase.',
        'Worked on API integrations, UI implementation, debugging, and feature testing.',
        'Participated in code reviews and production-level mobile application workflows.',
      ],
      stack: ['React Native', 'Expo', 'Firebase', 'API Integration'],
    },
  ],
  education: {
    school: 'National University of Modern Languages, Islamabad',
    degree: 'Bachelor of Science in Software Engineering',
    date: 'February 2021 — January 2025',
  },
  projects: [
    {
      featured: true,
      name: 'Farmverse',
      description:
        'A gaming ecosystem and production mobile experience spanning web presence and store-distributed applications.',
      contribution:
        'React Native mobile development with Firebase Authentication, push notifications, and AWS / Wasabi S3 media storage — shipped for Google Play and Apple App Store.',
      image: '/assets/images/farmVerse_logo.png',
      stack: ['React Native', 'Firebase', 'Push Notifications', 'AWS', 'Wasabi S3'],
      platforms: ['iOS', 'Android', 'Web'],
      links: {
        live: 'https://farmversegame.com',
        store: 'https://play.google.com/store/apps/details?id=com.myfarm.game',
        appStore: 'https://apps.apple.com/us/app/farmverse/id6811804623',
      },
    },
    {
      featured: true,
      name: 'ARLSP',
      description:
        'Full-stack application with live streaming and real-time communication for production audiences.',
      contribution:
        'End-to-end development across frontend and backend, including LiveKit-powered live streaming and real-time communication flows.',
      image: '/assets/images/arlsp_feature_graphic.png',
      logo: '/assets/images/arlsp_logo.jpeg',
      stack: ['React Native', 'React.js', 'Node.js', 'LiveKit', 'Real-Time'],
      platforms: ['iOS', 'Android', 'Web'],
      links: {
        live: 'https://arlsp.com',
        store: 'https://play.google.com/store/apps/details?id=com.arlsp',
        appStore: 'https://apps.apple.com/us/app/arlsp-live-streaming/id6770545765',
      },
    },
    {
      featured: true,
      name: 'WayLinkVpn',
      description:
        'Encrypted VPN for everyday browsing — a calm, privacy-focused mobile client with plan selection and available locations.',
      contribution:
        'React Native CLI mobile client and Next.js marketing site for a production VPN product published on Google Play.',
      image: '/assets/images/waylinkvpn-icon.png',
      stack: ['React Native CLI', 'Next.js', 'VPN Client', 'WireGuard'],
      platforms: ['Android', 'Web'],
      links: {
        live: 'https://waylinkvpn.com/',
        store: 'https://play.google.com/store/apps/details?id=com.waylinkvpn.app',
      },
    },
    {
      featured: true,
      name: 'Who Cut',
      description:
        'Barber booking platform that helps customers discover nearby shops, watch style clips, book appointments, chat with shops, and pay in-app.',
      contribution:
        'React Native CLI mobile app with maps, Firebase messaging, authentication, media galleries, and Stripe payment flows for customers and barbers.',
      image: '/assets/images/whocut-icon.png',
      stack: ['React Native CLI', 'Firebase', 'Maps', 'Stripe', 'Google Sign-In'],
      platforms: ['Android', 'iOS'],
      links: {
        live: 'https://whocuts.app/',
        store: 'https://play.google.com/store/apps/details?id=com.whocuts.app',
      },
    },
    {
      featured: true,
      name: 'CallLoom',
      description:
        'Communication-focused mobile application built around telephony workflows and operator dashboards.',
      contribution:
        'React Native CLI development with Telnyx integration, authentication API wiring, and dashboard functionality.',
      image: null,
      accent: 'callloom',
      stack: ['React Native CLI', 'Telnyx', 'Authentication APIs', 'Dashboard'],
      platforms: ['iOS', 'Android'],
      links: {},
    },
    {
      featured: false,
      name: 'AI Trip Planner',
      description:
        'AI-powered travel planning experience that generates dynamic itineraries from user intent.',
      contribution:
        'React Native / Expo client with Firebase integration and Gemini-powered itinerary generation.',
      image: '/assets/images/tripbrainlogo.png',
      stack: ['React Native', 'Expo', 'Firebase', 'Gemini API'],
      platforms: ['iOS', 'Android'],
      links: {},
      apk: '/assets/apk/TripBrain_Planner.apk',
    },
    {
      featured: false,
      name: 'Cow A Cow',
      description:
        'Cross-platform application with multi-provider authentication and deep-link driven flows.',
      contribution:
        'Cross-platform development with Google and Telegram authentication, deep linking, and backend integration.',
      image: null,
      accent: 'cow',
      stack: ['React', 'Capacitor', 'Google Auth', 'Telegram Auth', 'Deep Linking'],
      platforms: ['Cross-platform'],
      links: {},
    },
  ],
  supportingProjects: [
    {
      name: 'ATLAS 3D Assets',
      category: 'Web',
      image: '/assets/images/atlas-logo.svg',
      url: 'https://3d-assets-unique.vercel.app/',
    },
    {
      name: '7even Creatives',
      category: 'Web',
      image: '/assets/images/logo.png',
      url: 'https://7evencreatives.com',
    },
    {
      name: 'Mereos',
      category: 'Mobile',
      image: '/assets/images/mereosAppLogo.png',
      url: 'https://play.google.com/store/apps/details?id=com.mobile_proctor',
    },
    {
      name: 'TheClipStream',
      category: 'Web',
      image: '/assets/images/theclipstreamLogo.png',
      url: 'https://theclipstream.netlify.app',
    },
  ],
  skills: [
    {
      category: 'Frontend Development',
      items: ['React.js', 'React Native', 'Expo', 'JavaScript', 'Redux', 'Context API', 'HTML', 'CSS', 'NativeWind'],
    },
    {
      category: 'Backend Development',
      items: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Authentication', 'WebSockets', 'Redis'],
    },
    {
      category: 'Mobile Development',
      items: ['React Native CLI', 'Expo', 'Android', 'iOS', 'Firebase', 'Push Notifications', 'Google Play Billing'],
    },
    {
      category: 'Real-Time & Streaming',
      items: ['LiveKit', 'WebRTC', 'HLS', 'WebSockets', 'Real-Time Communication'],
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'AWS S3', 'AWS Amplify', 'Wasabi S3', 'Docker', 'Nginx', 'Git', 'GitHub'],
    },
    {
      category: 'Integrations',
      items: ['Firebase Authentication', 'Telnyx', 'AI APIs', 'Third-party API Integrations'],
    },
  ],
  services: [
    {
      title: 'Full-Stack Web Development',
      description:
        'End-to-end web products with React frontends, Node.js APIs, and production deployment workflows.',
      stack: ['React.js', 'Node.js', 'MongoDB', 'Express'],
      icon: 'layers',
    },
    {
      title: 'Cross-Platform Mobile Applications',
      description:
        'Android and iOS applications built with React Native — from architecture to store release.',
      stack: ['React Native', 'Expo', 'Firebase', 'REST APIs'],
      icon: 'device',
    },
    {
      title: 'Backend & API Architecture',
      description:
        'Reliable service layers, authentication, data modeling, and integrations that scale with the product.',
      stack: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
      icon: 'server',
    },
    {
      title: 'Real-Time Applications & Live Streaming',
      description:
        'Live communication and streaming systems using WebSockets, LiveKit, WebRTC, and HLS.',
      stack: ['LiveKit', 'WebRTC', 'HLS', 'Socket.IO'],
      icon: 'broadcast',
    },
    {
      title: 'Cloud Storage & Infrastructure',
      description:
        'Media pipelines and cloud infrastructure with AWS, S3-compatible storage, and deployment tooling.',
      stack: ['AWS', 'Wasabi S3', 'Docker', 'Nginx'],
      icon: 'cloud',
    },
    {
      title: 'AI-Powered Application Integration',
      description:
        'Practical AI features wired into real products — itineraries, assistants, and intelligent workflows.',
      stack: ['Gemini API', 'Firebase', 'React Native'],
      icon: 'spark',
    },
  ],
  contact: {
    heading: "Have an Idea? Let's Build Something Great.",
    text: "I'm always interested in discussing challenging projects, innovative products, and opportunities to build something meaningful.",
  },
};
