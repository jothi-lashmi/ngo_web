import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../../data/navigation';
import { siteData } from '../../data/siteData';
import { HeartHandshake, Menu, Heart } from 'lucide-react';
import Button from '../common/Button';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <Link to="/" className="navbar-brand">
            <div className="navbar-logo-icon">
              <HeartHandshake size={24} />
            </div>
            <span>{siteData.name}</span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="navbar-links desktop-nav">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Actions & Mobile Hamburger */}
          <div className="navbar-actions">
            <div className="desktop-nav">
              <Button to="/donate" variant="donate" size="sm">
                <Heart size={16} /> Donate
              </Button>
            </div>

            <button
              className="mobile-toggle"
              onClick={() => setMobileOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </nav>
      </div>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
};

export default Navbar;
