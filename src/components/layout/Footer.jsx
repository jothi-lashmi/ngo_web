import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../../data/siteData';
import { footerQuickLinks, footerInvolveLinks, footerLegalLinks } from '../../data/navigation';
import { MapPin, Phone, Mail, Heart, Facebook, Twitter, Instagram, Linkedin, Youtube, HeartHandshake } from 'lucide-react';
import Button from '../common/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#ffffff', fontWeight: 800, fontSize: '1.3rem', marginBottom: '14px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-md)', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <HeartHandshake size={22} color="#ffffff" />
              </div>
              {siteData.name}
            </div>
            <p>{siteData.description}</p>
            <div style={{ marginBottom: '20px' }}>
              <Button to="/donate" variant="donate" size="sm">
                <Heart size={16} /> Donate to Cause
              </Button>
            </div>
            <div className="social-links">
              <a href={siteData.socials.facebook} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
              <a href={siteData.socials.twitter} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={18} /></a>
              <a href={siteData.socials.instagram} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
              <a href={siteData.socials.linkedin} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={siteData.socials.youtube} className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <div className="footer-links">
              {footerQuickLinks.map((link) => (
                <Link key={link.path} to={link.path}>{link.name}</Link>
              ))}
            </div>
          </div>

          {/* Get Involved */}
          <div className="footer-column">
            <h4>Get Involved</h4>
            <div className="footer-links">
              {footerInvolveLinks.map((link) => (
                <Link key={link.path} to={link.path}>{link.name}</Link>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div className="footer-column">
            <h4>Contact Info</h4>
            <div className="footer-contact-item">
              <MapPin size={18} className="footer-contact-icon" />
              <span>{siteData.contact.address}</span>
            </div>
            <div className="footer-contact-item">
              <Phone size={18} className="footer-contact-icon" />
              <span>{siteData.contact.phone}</span>
            </div>
            <div className="footer-contact-item">
              <Mail size={18} className="footer-contact-icon" />
              <span>{siteData.contact.email}</span>
            </div>
            <div style={{ marginTop: '16px', fontSize: '0.825rem', color: '#94a3b8' }}>
              Registration No: <strong>{siteData.registrationNo}</strong>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div>
            © {currentYear} {siteData.name}. All Rights Reserved. Tax exempt under section 80G.
          </div>
          <div className="footer-bottom-links">
            {footerLegalLinks.map((link) => (
              <Link key={link.path} to={link.path}>{link.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
