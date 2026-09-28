import React, { useState } from 'react';
import Button from '../common/Button';
import { Send, CheckCircle2 } from 'lucide-react';

const EnquiryForm = ({ title = "Partnership & General Enquiry" }) => {
  const [formData, setFormData] = useState({
    orgName: '',
    contactPerson: '',
    email: '',
    phone: '',
    enquiryType: 'CSR Partnership',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Enquiry payload:', formData);
    setSubmitted(true);
    setFormData({
      orgName: '',
      contactPerson: '',
      email: '',
      phone: '',
      enquiryType: 'CSR Partnership',
      details: ''
    });
  };

  return (
    <div className="form-card">
      <h3 style={{ marginBottom: '24px' }}>{title}</h3>
      {submitted && (
        <div className="form-success-message">
          <CheckCircle2 size={20} />
          <div>Thank you! Your enquiry has been received. Our team will contact your organization soon.</div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="enq-person">Contact Person Name *</label>
            <input
              id="enq-person"
              type="text"
              required
              className="form-control"
              placeholder="e.g. Vikram Sharma"
              value={formData.contactPerson}
              onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="enq-org">Company / Institution Name</label>
            <input
              id="enq-org"
              type="text"
              className="form-control"
              placeholder="e.g. Acme Tech Solutions"
              value={formData.orgName}
              onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="enq-email">Work Email *</label>
            <input
              id="enq-email"
              type="email"
              required
              className="form-control"
              placeholder="e.g. vikram@acme.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="enq-type">Type of Partnership</label>
            <select
              id="enq-type"
              className="form-control"
              value={formData.enquiryType}
              onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
            >
              <option value="CSR Partnership">Corporate Social Responsibility (CSR)</option>
              <option value="Institutional Grant">Institutional Grant & Funding</option>
              <option value="Media & Press">Media, Press & Public Relations</option>
              <option value="General Inquiry">General Program Inquiry</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="enq-details">Enquiry Details</label>
          <textarea
            id="enq-details"
            rows="4"
            className="form-control"
            placeholder="Tell us more about how we can collaborate..."
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
          ></textarea>
        </div>

        <Button type="submit" variant="primary" size="lg" fullWidth>
          <Send size={18} /> Submit Enquiry
        </Button>
      </form>
    </div>
  );
};

export default EnquiryForm;
