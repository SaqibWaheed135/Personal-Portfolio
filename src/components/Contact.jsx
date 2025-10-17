import React, { useState } from 'react';
import content from '../content.json';

const Contact = () => {
  const { contact } = content;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      const response = await fetch('/Google Appscript url/', {
        method: 'POST',
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  return (
    <article className="contact active" data-page="contact">
      <header>
        <h2 className="h2 article-title">{contact.title}</h2>
      </header>

      <section className="mapbox">
        <iframe
          src={contact.mapEmbed}
          width="400" 
          height="300" 
          loading="lazy"
          title="location"
        ></iframe>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">{contact.form.title}</h3>
        <form onSubmit={handleSubmit} className="form">
          {contact.form.fields.map((field, index) => (
            <div key={index} className="input-wrapper">
              {field.type === 'textarea' ? (
                <textarea
                  name={field.name}
                  className="form-input"
                  placeholder={field.placeholder}
                  required={field.required}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  className="form-input"
                  placeholder={field.placeholder}
                  required={field.required}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                />
              )}
            </div>
          ))}
          <button 
            className="form-btn" 
            type="submit"
            disabled={submitStatus === 'sending'}
          >
            <ion-icon name="paper-plane"></ion-icon>
            <span>
              {submitStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </span>
          </button>
        </form>
        
        {submitStatus === 'success' && (
          <p className="success-message">Message sent successfully!</p>
        )}
        {submitStatus === 'error' && (
          <p className="error-message">Failed to send message. Please try again.</p>
        )}
      </section>
    </article>
  );
};

export default Contact;
