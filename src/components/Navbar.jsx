import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      <header className="navbar">
        <div className="container navbar-inner">
          <Link to="/" className="brand">GEATZ</Link>
          
          <nav className="nav-desktop">
            <Link to="/work" className={location.pathname === '/work' ? 'active text-accent' : ''}>WORK</Link>
            <Link to="/create" className={location.pathname === '/create' ? 'active text-accent' : ''}>CREATE</Link>
            <Link to="/think" className={location.pathname === '/think' ? 'active text-accent' : ''}>THINK</Link>
            <Link to="/about" className={location.pathname === '/about' ? 'active text-accent' : ''}>ABOUT</Link>
            <Link to="/contact" className={location.pathname === '/contact' ? 'active text-accent' : ''}>CONTACT</Link>
            <Link to="/contact" className="nav-cta text-accent">LET'S TALK ↗</Link>
          </nav>

          <button 
            className="menu-button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
            <Link to="/work">WORK</Link>
            <Link to="/create">CREATE</Link>
            <Link to="/think">THINK</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
            <Link to="/contact" className="text-accent">LET'S TALK ↗</Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
