import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder handler – connect to backend or email service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactItems = [
    { icon: '✉️', label: 'Email', value: 'lubnazekry@gmail.com', href: 'mailto:lubnazekry@gmail.com' },
    { icon: '📞', label: 'Phone', value: '01274463276', href: 'tel:+201274463276' },
    { icon: '📍', label: 'Location', value: '15th of May City Extension, Cairo', href: null },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/lubna-zekry', href: 'https://www.linkedin.com/in/lubna-zekry/?skipRedirect=true' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/Lubna-Zekry', href: 'https://github.com/Lubna-Zekry' },
    { icon: '💬', label: 'WhatsApp', value: '01274463276', href: 'https://wa.me/201274463276' },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-wrapper">

          {/* Contact Info */}
          <div className="contact-info-panel">
            <h3 className="contact-panel-title">Get In Touch</h3>
            <p className="contact-panel-desc">
              Feel free to reach out for opportunities, collaborations, or just to say hello!
            </p>
            <div className="contact-items">
              {contactItems.map((item, index) => (
                <div className="contact-item glass" key={index}>
                  <div className="contact-item-icon">{item.icon}</div>
                  <div className="contact-item-content">
                    <span className="contact-item-label">{item.label}</span>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="contact-item-value contact-link">
                        {item.value}
                      </a>
                    ) : (
                      <span className="contact-item-value">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <form className="contact-form glass" onSubmit={handleSubmit}>
            <h3 className="contact-panel-title">Send a Message</h3>

            {submitted && (
              <div className="form-success">
                ✅ Message sent! I'll get back to you soon.
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-solid form-submit">
              🚀 Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
