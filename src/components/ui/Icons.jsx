export const IconGithub = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M12 2C6.477 2 2 6.586 2 12.253c0 4.537 2.865 8.382 6.839 9.743.5.094.683-.222.683-.494 0-.243-.01-1.052-.014-1.91-2.782.618-3.369-1.208-3.369-1.208-.454-1.18-1.11-1.494-1.11-1.494-.908-.637.069-.624.069-.624 1.004.072 1.532 1.056 1.532 1.056.892 1.566 2.341 1.114 2.91.852.091-.663.35-1.114.636-1.37-2.22-.259-4.555-1.14-4.555-5.073 0-1.12.39-2.037 1.029-2.756-.103-.258-.446-1.302.098-2.714 0 0 .84-.275 2.75 1.052A9.34 9.34 0 0 1 12 6.844c.85.004 1.705.117 2.504.344 1.909-1.327 2.748-1.052 2.748-1.052.546 1.412.203 2.456.1 2.714.64.719 1.028 1.636 1.028 2.756 0 3.943-2.339 4.811-4.566 5.065.359.317.679.943.679 1.901 0 1.372-.012 2.477-.012 2.814 0 .274.18.593.688.492C19.138 20.632 22 16.788 22 12.253 22 6.586 17.523 2 12 2Z" />
  </svg>
);

export const IconLinkedin = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export const IconMail = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

export const IconArrow = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

export const IconExternal = (props) => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
    <path d="M14 4h6v6M10 14 20 4M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5" />
  </svg>
);

export const IconDownload = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
    <path d="M12 4v12M6 12l6 6 6-6M5 20h14" />
  </svg>
);

export const ServiceIcon = ({ name }) => {
  const common = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    'aria-hidden': true,
  };

  switch (name) {
    case 'layers':
      return (
        <svg {...common}>
          <path d="m12 3 9 5-9 5-9-5 9-5Z" />
          <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
        </svg>
      );
    case 'device':
      return (
        <svg {...common}>
          <rect x="7" y="2" width="10" height="20" rx="2" />
          <path d="M11 18h2" />
        </svg>
      );
    case 'server':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="6" rx="1.5" />
          <rect x="3" y="14" width="18" height="6" rx="1.5" />
          <path d="M7 7h.01M7 17h.01" />
        </svg>
      );
    case 'broadcast':
      return (
        <svg {...common}>
          <path d="M5 12a7 7 0 0 1 14 0" />
          <path d="M8.5 12a3.5 3.5 0 0 1 7 0" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'cloud':
      return (
        <svg {...common}>
          <path d="M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6.1 12.2 3.5 3.5 0 0 0 7 18Z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
        </svg>
      );
  }
};
