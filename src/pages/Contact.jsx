import React from 'react';
import PageContainer from '../components/layout/PageContainer';
import ContactForm from '../components/forms/ContactForm';
import { siteData } from '../data/siteData';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <PageContainer title="Contact Us">
      <section className="page-hero">
        <div className="container">
          <h1>Contact HopeCare Foundation</h1>
          <p>We'd love to hear from you. Reach out for program inquiries, volunteer options, or partnership opportunities.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', marginBottom: '48px' }}>
            {/* Contact Details Card */}
            <div style={{ background: 'var(--bg-surface)', padding: '40px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)' }}>
              <h3 style={{ marginBottom: '24px' }}>Get in Touch</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', background: 'var(--primary-light)', color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--dark-heading)', marginBottom: '4px' }}>Headquarters Address</div>
                    <div className="text-muted">{siteData.contact.address}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', background: 'var(--primary-light)', color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--dark-heading)', marginBottom: '4px' }}>Phone / WhatsApp</div>
                    <div className="text-muted">{siteData.contact.phone}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', background: 'var(--primary-light)', color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--dark-heading)', marginBottom: '4px' }}>Email Address</div>
                    <div className="text-muted">{siteData.contact.email}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: 'var(--radius-md)', background: 'var(--primary-light)', color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--dark-heading)', marginBottom: '4px' }}>Office Hours</div>
                    <div className="text-muted">{siteData.contact.officeHours}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </PageContainer>
  );
};

export default Contact;
