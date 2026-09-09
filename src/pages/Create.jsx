import { useEffect } from 'react';
import useReveal from '../hooks/useReveal';

const writings = [
  { slug:'THE INTRO',          desc:'Personal storytelling / creator introduction.', tag:'Storytelling' },
  { slug:'THINGS TO FOCUS ON', desc:'Creator education / audience-first content.',  tag:'Education' },
  { slug:'SCRIPTING',          desc:'AI-assisted scripting workflow.',              tag:'Process' },
  { slug:'THE PLAN',           desc:'Series planning and content structure.',       tag:'Strategy' },
];

const Create = () => {
  useReveal();
  useEffect(() => { window.scrollTo(0,0); }, []);

  return (
    <div className="page-enter" style={{ paddingTop:'120px' }}>
      <section className="section" style={{ paddingTop:0 }}>
        <div className="container">
          <p className="section-label reveal">CREATE</p>
          <h1 className="reveal" style={{ fontSize:'var(--hero)', letterSpacing:'-0.04em', lineHeight:'0.9', textTransform:'uppercase' }}>
            BEFORE I<br />EDIT IT,<br />I THINK<br /><span className="text-accent">ABOUT IT.</span>
          </h1>
          <p className="text-muted reveal" style={{ fontSize:'var(--body)', maxWidth:'600px', marginTop:'1.5rem', lineHeight:'1.7' }}>
            Some of my work starts with footage. Some starts with a blank page.
            Here's where I explore scripts, hooks, concepts, and the thinking behind content.
          </p>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee-track" style={{ animationDirection:'reverse' }}>
          {Array(16).fill(0).map((_, i) => (
            <span key={i} className="marquee-item">CONCEPT <span className="dot">·</span></span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <p className="section-label reveal">FEATURED WRITING</p>
          <div style={{ marginTop:'2rem' }}>
            {writings.map((w, i) => (
              <div key={w.slug} className={`create-item reveal reveal-delay-${(i%3)+1}`}>
                <div className="create-item-tag">{w.tag}</div>
                <h2 className="create-item-title font-display">{w.slug}</h2>
                <p className="create-item-desc text-muted">{w.desc}</p>
                <div className="create-item-arrow">↗</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .create-item {
          display:grid;
          grid-template-columns: auto 1fr auto auto;
          gap: 1.5rem;
          align-items: center;
          padding: 2rem 0;
          border-bottom: 1px solid var(--border);
          cursor: pointer;
          transition: gap 0.3s;
        }
        .create-item:hover { gap: 2rem; }
        .create-item:hover .create-item-title { color: var(--accent); }
        .create-item:hover .create-item-arrow { transform: translate(4px,-4px); color: var(--accent); }
        .create-item-tag { font-family: var(--font-display); font-size: var(--small); letter-spacing: 0.1em; color: var(--muted); background: var(--bg-3); padding: 0.3rem 0.75rem; border-radius: 999px; white-space: nowrap; }
        .create-item-title { font-size: var(--h3); letter-spacing: -0.02em; transition: color 0.3s; }
        .create-item-desc { font-size: var(--small); color: var(--muted); display: none; }
        .create-item-arrow { font-size: 1.5rem; color: var(--muted); transition: transform 0.4s, color 0.3s; }
        @media(min-width:768px){
          .create-item { grid-template-columns: 100px 1fr 1fr auto; }
          .create-item-desc { display: block; }
        }
      `}</style>
    </div>
  );
};

export default Create;
