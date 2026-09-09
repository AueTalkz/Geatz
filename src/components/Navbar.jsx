import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]= useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <Link to="/" className="brand">GEATZ</Link>

          <nav className="nav-links">
            <Link to="/work"    className={isActive('/work')}>WORK</Link>
            <Link to="/create"  className={isActive('/create')}>CREATE</Link>
            <Link to="/think"   className={isActive('/think')}>THINK</Link>
            <Link to="/about"   className={isActive('/about')}>ABOUT</Link>
            <Link to="/contact" className={isActive('/contact')}>CONTACT</Link>
            <Link to="/contact" className="nav-cta-btn">LET'S TALK ↗</Link>
          </nav>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <Link to="/work">Work</Link>
          <Link to="/create">Create</Link>
          <Link to="/think">Think</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/contact" style={{ color: 'var(--accent)' }}>Let's Talk ↗</Link>
        </nav>
        <p className="mobile-menu-footer uppercase">EDIT · CREATE · THINK · REPEAT</p>
      </div>
    </>
  );
};

export default Navbar;
