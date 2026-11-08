import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navigationItems, ctaButton } from '../../data/navigation';
import { Button } from '../ui/Button';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoverIndicatorStyle, setHoverIndicatorStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  // Find active link index based on current route
  const activeIndex = navigationItems.findIndex((item) => {
    if (item.href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(item.href);
  });

  // Calculate moving indicator position based strictly on selected/active item
  useEffect(() => {
    const updateIndicator = () => {
      if (activeIndex !== -1 && linksRef.current[activeIndex] && navRef.current) {
        const linkEl = linksRef.current[activeIndex]!;
        const navRect = navRef.current.getBoundingClientRect();
        const linkRect = linkEl.getBoundingClientRect();

        setIndicatorStyle({
          left: linkRect.left - navRect.left,
          width: linkRect.width,
          opacity: 1,
        });
      } else {
        setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
      }
    };

    updateIndicator();
    window.addEventListener('resize', updateIndicator);
    return () => window.removeEventListener('resize', updateIndicator);
  }, [activeIndex, location.pathname]);

  // Calculate moving indicator position for hovered item
  useEffect(() => {
    if (hoveredIndex !== null && linksRef.current[hoveredIndex] && navRef.current) {
      const linkEl = linksRef.current[hoveredIndex]!;
      const navRect = navRef.current.getBoundingClientRect();
      const linkRect = linkEl.getBoundingClientRect();

      setHoverIndicatorStyle({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
        opacity: 1,
      });
    } else {
      setHoverIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [hoveredIndex]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isDarkHero = location.pathname === '/about';

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''} ${isDarkHero && !isScrolled ? 'navbar--transparent-dark' : ''}`}>
      <div className="navbar__container">
        {/* Brand Wordmark */}
        <Link to="/" className="navbar__brand" aria-label="ScaeleIQ Home">
          <span className="navbar__wordmark">
            <span className="navbar__wordmark-primary">SCAELE</span>
            <span className="navbar__wordmark-accent">IQ</span>
          </span>
        </Link>

        {/* Desktop Navigation Links with Active and Hovered Underlines */}
        <nav
          ref={navRef}
          className="navbar__nav"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navigationItems.map((item, index) => {
            const isActive = index === activeIndex;
            const isHovered = index === hoveredIndex;
            return (
              <Link
                key={item.href}
                ref={(el) => (linksRef.current[index] = el)}
                to={item.href}
                className={`navbar__link ${isActive ? 'navbar__link--active' : ''} ${isHovered ? 'navbar__link--hovered' : ''}`}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                {item.label}
              </Link>
            );
          })}

          {/* Selected / Active Section Underline (Solid Dark Anchor) */}
          <span
            className="navbar__indicator navbar__indicator--active"
            style={{
              transform: `translateX(${indicatorStyle.left}px)`,
              width: `${indicatorStyle.width}px`,
              opacity: indicatorStyle.opacity,
            }}
            aria-hidden="true"
          />

          {/* Hovered Section Underline (Distinct Cyan Accent with Subtle Luminous Glow) */}
          <span
            className="navbar__indicator navbar__indicator--hover"
            style={{
              transform: `translateX(${hoverIndicatorStyle.left}px)`,
              width: `${hoverIndicatorStyle.width}px`,
              opacity: hoverIndicatorStyle.opacity,
            }}
            aria-hidden="true"
          />
        </nav>

        {/* Desktop CTA */}
        <div className="navbar__actions">
          <Button to={ctaButton.href} variant="outline" size="sm" className="navbar__cta-btn">
            {ctaButton.label}
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="navbar__toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay & Drawer */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu__inner">
          <nav className="mobile-menu__nav">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`mobile-menu__link ${isActive ? 'mobile-menu__link--active' : ''}`}
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={18} opacity={0.5} />
                </Link>
              );
            })}
          </nav>
          <div className="mobile-menu__footer">
            <Button to={ctaButton.href} variant="primary" size="lg" className="mobile-menu__cta">
              {ctaButton.label}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
