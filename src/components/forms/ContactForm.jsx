import React, { useState } from 'react';
import Button from '../common/Button';
import { Send, CheckCircle2 } from 'lucide-react';

const ContactForm = ({ formTitle = "Send Us a Message" }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Prepared for email service hook (e.g., EmailJS / Formspree / Web3Forms)
      console.log('Form submission payload:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setErrors({});
    }
  };

  return (
    <div className="form-card">
      <h3 style={{ marginBottom: '24px' }}>{formTitle}</h3>
      {submitted && (
        <div className="form-success-message">
          <CheckCircle2 size={20} />
          <div>Thank you! Your message has been sent successfully. We will get back to you shortly.</div>
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="contact-name">Full Name *</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              className={`form-control ${errors.name ? 'error' : ''}`}
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-email">Email Address *</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              className={`form-control ${errors.email ? 'error' : ''}`}
              placeholder="e.g. rahul@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="contact-phone">Phone Number</label>
            <input
              id="contact-phone"
              type="tel"
              name="phone"
              className="form-control"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="contact-subject">Subject</label>
            <input
              id="contact-subject"
              type="text"
              name="subject"
              className="form-control"
              placeholder="e.g. CSR Partnership / General Inquiry"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="contact-message">Message *</label>
          <textarea
            id="contact-message"
            name="message"
            rows="5"
            className={`form-control ${errors.message ? 'error' : ''}`}
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className="form-error">{errors.message}</span>}
        </div>

        <Button type="submit" variant="primary" size="lg" fullWidth>
          <Send size={18} /> Submit Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
