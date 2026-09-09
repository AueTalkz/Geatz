import { useEffect } from 'react';
import useReveal from '../hooks/useReveal';

const links = [
  { label:'EMAIL',     href:'mailto:hello@geatz.com', sub:'hello@geatz.com' },
  { label:'INSTAGRAM', href:'#',                      sub:'@geatz' },
  { label:'YOUTUBE',   href:'#',                      sub:'Geatz' },
];

const Contact = () => {
  useReveal();
  useEffect(() => { window.scrollTo(0,0); }, []);

  return (
    <div className="page-enter" style={{ paddingTop:'120px' }}>
      <section className="section" style={{ paddingTop:0, minHeight:'80svh', display:'flex', flexDirection:'column', justifyContent:'center' }}>
        <div className="container">
          <p className="section-label reveal">GET IN TOUCH</p>
          <h1 className="reveal" style={{ fontSize:'var(--hero)', letterSpacing:'-0.04em', lineHeight:'0.9', textTransform:'uppercase', marginBottom:'2rem' }}>
            HAVE AN<br />IDEA?<br />
            <span className="text-accent">LET'S MAKE<br />IT WORTH<br />WATCHING.</span>
          </h1>
          <p className="text-muted reveal" style={{ fontSize:'var(--body)', maxWidth:'540px', lineHeight:'1.7', marginBottom:'4rem' }}>
            Whether you have a video that needs editing, an idea that needs shaping, or content that needs a direction — let's talk.
          </p>

          <div style={{ display:'flex', flexDirection:'column' }}>
            {links.map((l, i) => (
              <a
                key={l.label}
                href={l.href}
                className={`contact-link reveal reveal-delay-${i+1}`}
              >
                <div>
                  <p className="contact-label font-display">{l.label}</p>
                  <p className="contact-sub text-muted">{l.sub}</p>
                </div>
                <span className="contact-arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .contact-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem 0;
          border-bottom: 1px solid var(--border);
          transition: padding-left 0.4s var(--ease), color 0.3s;
          color: inherit;
          text-decoration: none;
        }
        .contact-link:hover { padding-left: 1.5rem; }
        .contact-link:hover .contact-label { color: var(--accent); }
        .contact-link:hover .contact-arrow { color: var(--accent); transform: translate(4px,-4px); }
        .contact-label { font-size: var(--h2); letter-spacing: -0.03em; line-height: 1; transition: color 0.3s; }
        .contact-sub { font-size: var(--small); letter-spacing: 0.06em; margin-top: 0.4rem; }
        .contact-arrow { font-size: 2rem; color: var(--muted); transition: transform 0.4s var(--ease), color 0.3s; }
      `}</style>
    </div>
  );
};

export default Contact;
