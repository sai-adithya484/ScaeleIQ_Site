import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Brand Wordmark */}
        <Link to="/" className="footer__brand" aria-label="ScaeleIQ Home">
          <span className="footer__wordmark">
            <span className="footer__wordmark-primary">SCAELE</span>
            <span className="footer__wordmark-accent">IQ</span>
          </span>
        </Link>

        {/* Links */}
        <div className="footer__links">
          <a href="mailto:sales@scaeleiq.com" className="footer__link">
            sales@scaeleiq.com
          </a>
          <span className="footer__divider" aria-hidden="true">•</span>
          <Link to="/privacy-policy" className="footer__link">
            Privacy Policy
          </Link>
        </div>

        {/* Copyright */}
        <div className="footer__copyright">
          © 2026. Powered and secured by ScaeleIQ
        </div>
      </div>
    </footer>
  );
};
