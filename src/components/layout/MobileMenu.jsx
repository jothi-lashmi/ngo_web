import React, { useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navLinks } from '../../data/navigation';
import { siteData } from '../../data/siteData';
import { X, Heart, HeartHandshake } from 'lucide-react';
import Button from '../common/Button';

const MobileMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div className="mobile-menu-overlay" onClick={onClose} aria-hidden="true" />
      <aside className={`mobile-menu ${isOpen ? 'open' : ''}`} aria-label="Mobile Navigation Menu">
        <div className="mobile-menu-header">
          <Link
            to="/"
            onClick={onClose}
            aria-label={`${siteData.name} Home`}
            title={`${siteData.name} - Home`}
            style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 800, color: 'var(--primary-dark)', fontSize: '1.15rem', textDecoration: 'none' }}
          >
            <div style={{ width: '36px', height: '36px', borderRadius: 'var(--radius-md)', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }}>
              <HeartHandshake size={20} />
            </div>
            {siteData.name}
          </Link>
          <button
            onClick={onClose}
            aria-label="Close Navigation Menu"
            style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', padding: '8px', color: 'var(--dark-heading)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="mobile-menu-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={onClose}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <Button to="/donate" variant="donate" fullWidth onClick={onClose}>
            <Heart size={18} /> Donate Now
          </Button>
          <Button to="/volunteer" variant="outline" fullWidth onClick={onClose}>
            Join as Volunteer
          </Button>
        </div>
      </aside>
    </>
  );
};

export default MobileMenu;
