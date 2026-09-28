import React, { useState } from 'react';
import Button from '../common/Button';
import { UserCheck, CheckCircle2 } from 'lucide-react';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    role: 'On-Ground Fieldwork',
    availability: 'Weekends',
    experience: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
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
      console.log('Volunteer registration payload:', formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        role: 'On-Ground Fieldwork',
        availability: 'Weekends',
        experience: ''
      });
      setErrors({});
    }
  };

  return (
    <div className="form-card">
      <h3 style={{ marginBottom: '24px' }}>Volunteer Application</h3>
      {submitted && (
        <div className="form-success-message">
          <CheckCircle2 size={20} />
          <div>Thank you for volunteering! Our team will review your application and contact you soon.</div>
        </div>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="vol-name">Full Name *</label>
            <input
              id="vol-name"
              type="text"
              name="name"
              className={`form-control ${errors.name ? 'error' : ''}`}
              placeholder="e.g. Priya Sharma"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="vol-email">Email Address *</label>
            <input
              id="vol-email"
              type="email"
              name="email"
              className={`form-control ${errors.email ? 'error' : ''}`}
              placeholder="e.g. priya@example.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="vol-phone">Phone Number *</label>
            <input
              id="vol-phone"
              type="tel"
              name="phone"
              className={`form-control ${errors.phone ? 'error' : ''}`}
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="form-error">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="vol-city">City / Location</label>
            <input
              id="vol-city"
              type="text"
              name="city"
              className="form-control"
              placeholder="e.g. New Delhi / Jaipur"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="vol-role">Preferred Area of Contribution</label>
            <select
              id="vol-role"
              name="role"
              className="form-control"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="On-Ground Fieldwork">On-Ground Fieldwork & Health Camps</option>
              <option value="Teaching & Mentoring">Teaching & STEM Mentoring</option>
              <option value="Digital Marketing & Design">Digital Marketing & Design</option>
              <option value="Event Management">Event Management & Fundraising</option>
              <option value="Medical Professional">Medical / Healthcare Support</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="vol-availability">Availability</label>
            <select
              id="vol-availability"
              name="availability"
              className="form-control"
              value={formData.availability}
              onChange={handleChange}
            >
              <option value="Weekends">Weekends Only</option>
              <option value="Weekdays">Weekdays</option>
              <option value="Flexible / Virtual">Flexible / Virtual (Remote)</option>
              <option value="Full-Time Internship">Full-Time Internship</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="vol-experience">Tell Us Briefly About Your Background & Interest</label>
          <textarea
            id="vol-experience"
            name="experience"
            rows="4"
            className="form-control"
            placeholder="Share any past volunteer work or skills you'd like to bring..."
            value={formData.experience}
            onChange={handleChange}
          ></textarea>
        </div>

        <Button type="submit" variant="primary" size="lg" fullWidth>
          <UserCheck size={18} /> Apply as Volunteer
        </Button>
      </form>
    </div>
  );
};

export default VolunteerForm;
