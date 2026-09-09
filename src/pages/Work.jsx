import { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import useReveal from '../hooks/useReveal';

const projects = [
  { id:'pal-vs-nari',        title:'Pal VS Nari',              category:'Entertainment · Short-form · Visual Editing' },
  { id:'basic-mistake',      title:'Basic Mistake Done By All', category:'Creator Content · Educational · Storytelling' },
  { id:'day-1',              title:'Day 1',                    category:'Creator Content · Short-form · Talking Head' },
  { id:'before-after-day-1', title:'Before / After — Day 1',   category:'Social Content · Visual Design · Series' },
];

const Work = () => {
  useReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="page-enter" style={{ paddingTop:'120px' }}>
      <section className="section" style={{ paddingTop:0 }}>
        <div className="container">
          <p className="section-label reveal">ALL PROJECTS</p>
          <h1 className="work-page-title reveal">
            THE WORK.
          </h1>
          <p className="text-muted reveal" style={{ fontSize:'var(--body)', maxWidth:'500px', marginTop:'1rem', lineHeight:'1.7' }}>
            Every project is a study in clarity, pacing, and making the idea land.
          </p>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee-track">
          {Array(16).fill(0).map((_, i) => (
            <span key={i} className="marquee-item">EDIT <span className="dot">·</span></span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          {projects.map((p, i) => (
            <div key={p.id} className={`work-list-item reveal reveal-delay-${(i % 3)+1}`}>
              <ProjectCard {...p} link={`/work/${p.id}`} />
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .work-page-title {
          font-size: var(--hero);
          letter-spacing: -0.04em;
          line-height: 0.9;
          text-transform: uppercase;
          margin-top: 0.5rem;
        }
        .work-list-item { margin-bottom: 4rem; }
        @media(min-width:768px){.work-list-item{margin-bottom:6rem;}}
      `}</style>
    </div>
  );
};

export default Work;
