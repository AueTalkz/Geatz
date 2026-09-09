import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';

const projectsData = {
  'pal-vs-nari': {
    title:'Pal VS Nari', role:'Editor', type:'Entertainment · Short-form',
    focus:['Compositing','VFX','Visual Storytelling','Short-form'],
    idea:'A fast-paced visual edit built around character interaction, compositing, visual effects, and comedic timing.',
    approach:'The challenge was keeping the comedy intact while delivering polished VFX. Every cut was tied to a beat or a punchline.',
    editingDecisions:'I prioritised comedic timing over complex transitions — making sure every effect served the joke, not the ego.',
    learned:'Visual effects are useless if the pacing is wrong.'
  },
  'basic-mistake': {
    title:'Basic Mistake Done By All', role:'Editor & Strategist', type:'Creator Content · Educational',
    focus:['Script','Storytelling','Content Strategy','Editing'],
    idea:"A creator-focused piece exploring why flashy edits shouldn't come before clear, useful content.",
    approach:'Content-first editing. The structure was built before a single cut was made.',
    editingDecisions:"I removed unnecessary B-roll and let the dialogue drive. If it didn't help the point — it was gone.",
    learned:'Silence and pauses are as powerful as any sound design.'
  },
  'day-1': {
    title:'Day 1', role:'Editor', type:'Creator Content · Talking Head',
    focus:['Talking Head','Typography','Pacing','Social Content'],
    idea:'A short-form creator edit focused on pacing, typography, and turning talking-head footage into engaging social content.',
    approach:'The edit needed to feel fast without feeling rushed. Typography was used to anchor key ideas.',
    editingDecisions:'Kinetic typography to emphasise keywords — never overwhelming the frame, always serving the message.',
    learned:'Less is more when communicating complex talking points.'
  },
};

const Project = () => {
  useReveal();
  const { id } = useParams();
  const p = projectsData[id];

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!p) return (
    <div className="container" style={{ paddingTop:'160px' }}>
      <h1 style={{ fontSize:'var(--h2)' }}>Project not found.</h1>
      <Link to="/work" className="btn btn-outline" style={{ marginTop:'2rem', display:'inline-flex' }}>← BACK TO WORK</Link>
    </div>
  );

  return (
    <div className="page-enter" style={{ paddingTop:'120px' }}>
      <div className="container">
        <Link to="/work" className="text-muted" style={{ fontSize:'var(--small)', letterSpacing:'0.1em', display:'inline-flex', alignItems:'center', gap:'0.5rem', marginBottom:'3rem', transition:'color 0.3s' }}
          onMouseEnter={e=>e.target.style.color='var(--accent)'} onMouseLeave={e=>e.target.style.color='var(--muted)'}>
          ← ALL PROJECTS
        </Link>

        <p className="section-label reveal">{p.type}</p>
        <h1 className="reveal" style={{ fontSize:'var(--hero)', letterSpacing:'-0.04em', lineHeight:'0.9', textTransform:'uppercase', marginBottom:'3rem' }}>
          {p.title}
        </h1>

        {/* Meta row */}
        <div className="case-meta reveal">
          {[['ROLE', p.role], ['TYPE', p.type], ['FOCUS', p.focus.join(' · ')]].map(([label, val]) => (
            <div key={label}>
              <p style={{ fontSize:'var(--small)', letterSpacing:'0.1em', color:'var(--muted)', marginBottom:'0.4rem' }}>{label}</p>
              <p style={{ fontSize:'var(--body)' }}>{val}</p>
            </div>
          ))}
        </div>

        {/* Video */}
        <div className="case-video reveal" style={{ background:'var(--bg-3)', aspectRatio:'16/9', borderRadius:'var(--r-md)', border:'1px solid var(--border)', display:'flex', alignItems:'center', justifyContent:'center', margin:'4rem 0' }}>
          <p style={{ color:'var(--muted)', fontFamily:'var(--font-display)', fontSize:'var(--body)', letterSpacing:'0.05em' }}>[ VIDEO COMING SOON ]</p>
        </div>

        {/* Case study content */}
        {[
          { heading:'THE IDEA',         body: p.idea },
          { heading:'MY APPROACH',      body: p.approach },
          { heading:'EDITING DECISIONS',body: p.editingDecisions },
          { heading:'WHAT I LEARNED',   body: p.learned },
        ].map((s, i) => (
          <div key={s.heading} className={`case-section reveal reveal-delay-${(i%3)+1}`}>
            <h2 style={{ fontSize:'var(--h3)', color:'var(--accent)', letterSpacing:'-0.01em', marginBottom:'1rem' }}>{s.heading}</h2>
            <p style={{ fontSize:'var(--body)', color:'var(--muted)', maxWidth:'700px', lineHeight:'1.8' }}>{s.body}</p>
          </div>
        ))}

        <div style={{ marginTop:'6rem', display:'flex', gap:'1rem', flexWrap:'wrap' }}>
          <Link to="/work" className="btn btn-outline">← MORE WORK</Link>
          <Link to="/contact" className="btn btn-primary">LET'S WORK TOGETHER ↗</Link>
        </div>
      </div>

      <style>{`
        .case-meta { display:grid; grid-template-columns:1fr; gap:2rem; padding:2rem 0; border-top:1px solid var(--border); border-bottom:1px solid var(--border); }
        @media(min-width:768px){ .case-meta{ grid-template-columns:repeat(3,1fr); } }
        .case-section { padding:3rem 0; border-bottom:1px solid var(--border); }
      `}</style>
    </div>
  );
};

export default Project;
