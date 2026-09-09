import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <div>
        <Link to="/" className="footer-brand">GEATZ</Link>
        <p className="footer-tagline uppercase">VIDEO EDITOR · CONTENT CREATOR</p>
        <p className="footer-tagline mt-1">EDIT · CREATE · THINK</p>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:'1rem', alignItems:'flex-end' }}>
        <div className="footer-links">
          <a href="mailto:hello@geatz.com">Email</a>
          <a href="#" target="_blank" rel="noreferrer">Instagram</a>
          <a href="#" target="_blank" rel="noreferrer">YouTube</a>
        </div>
        <p className="footer-copy">© 2026 GEATZ — Built around ideas, not templates.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
