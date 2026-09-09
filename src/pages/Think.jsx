import { useEffect } from 'react';
import useReveal from '../hooks/useReveal';

const principles = [
  { num:'01', title:'UNDERSTAND THE AUDIENCE.', desc:'Who is watching? What do they already know? What do they need to feel or understand by the end?' },
  { num:'02', title:'MAKE THE IDEA CLEAR.',     desc:'If you need a paragraph to explain the concept, it is not ready to edit yet. Clarity comes before content.' },
  { num:'03', title:'BUILD THE STORY.',         desc:'Not every video needs a three-act structure. But every video needs a reason to exist — a direction, a point.' },
  { num:'04', title:'USE THE EDIT TO SUPPORT IT.', desc:'The edit should serve the story, not show off. Every cut, every sound, every effect should justify itself.' },
  { num:'05', title:"REMOVE WHAT DOESN'T MATTER.", desc:"The best edit is usually the one where you've cut the most. If it doesn't add — it subtracts." },
];

const Think = () => {
  useReveal();
  useEffect(() => { window.scrollTo(0,0); }, []);

  return (
    <div className="page-enter" style={{ paddingTop:'120px' }}>
      <section className="section" style={{ paddingTop:0 }}>
        <div className="container">
          <p className="section-label reveal">THINK</p>
          <h1 className="reveal" style={{ fontSize:'var(--hero)', letterSpacing:'-0.04em', lineHeight:'0.9', textTransform:'uppercase' }}>
            HOW I THINK<br />ABOUT<br /><span className="text-accent">CONTENT.</span>
          </h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop:0 }}>
        <div className="container">
          {principles.map((p, i) => (
            <div key={p.num} className={`process-item reveal reveal-delay-${(i%3)+1}`} style={{ cursor:'default' }}>
              <span className="process-num">{p.num}</span>
              <div>
                <h2 className="process-title" style={{ fontSize:'var(--h2)' }}>{p.title}</h2>
                <p className="process-desc">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" style={{ background:'var(--bg-2)', borderTop:'1px solid var(--border)' }}>
        <div className="container">
          <blockquote className="reveal think-quote">
            "The edit shouldn't compete with the content."
          </blockquote>
          <p className="text-muted reveal" style={{ fontSize:'var(--body)', maxWidth:'680px', lineHeight:'1.8', marginTop:'2rem' }}>
            Motion graphics, transitions, B-roll and effects all have a purpose.<br /><br />
            If they don't help the viewer understand, feel, or stay engaged — why are they there?
          </p>
        </div>
      </section>

      <style>{`
        .think-quote {
          font-family: var(--font-display);
          font-size: var(--h1);
          letter-spacing: -0.04em;
          line-height: 0.95;
          font-style: italic;
          color: var(--fg);
          border: none;
          padding: 0;
          max-width: 900px;
        }
      `}</style>
    </div>
  );
};

export default Think;
