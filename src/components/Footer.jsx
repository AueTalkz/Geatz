import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid grid">
        <div className="footer-col">
          <Link to="/" className="brand">GEATZ</Link>
          <p className="text-meta text-secondary mt-1">VIDEO EDITOR · CONTENT CREATOR</p>
          <p className="text-meta text-secondary mt-1">EDIT · CREATE · THINK</p>
        </div>
        
        <div className="footer-col align-right">
          <p className="text-meta text-secondary mb-1">© 2026 GEATZ</p>
          <p className="text-body text-secondary">Built around ideas, not templates.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
