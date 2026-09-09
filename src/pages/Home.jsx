import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import useReveal from '../hooks/useReveal';

const TICKER_ITEMS = ['EDIT','CREATE','THINK','REPEAT','EDIT','CREATE','THINK','REPEAT','EDIT','CREATE','THINK','REPEAT','EDIT','CREATE','THINK','REPEAT'];

const projects = [
  { id:'pal-vs-nari',        title:'Pal VS Nari',              category:'Entertainment · Short-form · Visual Editing' },
  { id:'basic-mistake',      title:'Basic Mistake Done By All', category:'Creator Content · Educational · Storytelling' },
  { id:'day-1',              title:'Day 1',                    category:'Creator Content · Short-form · Talking Head' },
  { id:'before-after-day-1', title:'Before / After — Day 1',   category:'Social Content · Visual Design · Series' },
];

const Home = () => {
  useReveal();
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo(0,0);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="page-enter">

      {/* ── HERO ── */}
      <section className="home-hero" ref={heroRef}>
        <div
          className="hero-bg-text"
          style={{ transform:`translateY(${scrollY * 0.3}px)` }}
        >GEATZ</div>
        <div className="container home-hero-inner">
          <p className="section-label reveal">VIDEO EDITOR · CONTENT CREATOR</p>
          <h1 className="home-heading reveal reveal-delay-1">
            I TURN<br />
            IDEAS INTO<br />
            <span className="text-accent">CONTENT<br />WORTH<br />WATCHING.</span>
          </h1>
          <p className="home-sub reveal reveal-delay-2">
            I work across video editing, scripting, and content development —<br />
            helping ideas become clear, engaging, and built for the audience.
          </p>
          <div className="hero-ctas reveal reveal-delay-3">
            <Link to="/work" className="btn btn-primary">VIEW MY WORK ↗</Link>
            <Link to="/contact" className="btn btn-outline">LET'S TALK ↗</Link>
          </div>
        </div>
        <div className="hero-scroll-hint reveal reveal-delay-4">SCROLL</div>
      </section>

      {/* ── TICKER ── */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} className="marquee-item">
              {item} <span className="dot">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── SELECTED WORK ── */}
      <section className="section">
        <div className="container">
          <div className="work-header reveal">
            <p className="section-label">SELECTED WORK</p>
            <h2 className="home-section-title">Some things<br />I've made.</h2>
            <p className="home-section-desc text-muted">
              A collection of edits, experiments, and content projects built around one simple idea — make the content worth watching.
            </p>
          </div>

          {/* Featured first project — full width */}
          <div className="work-featured reveal">
            <ProjectCard {...projects[0]} link={`/work/${projects[0].id}`} />
          </div>

          {/* Remaining in 2-col grid */}
          <div className="work-grid">
            {projects.slice(1).map((p, i) => (
              <div key={p.id} className={`reveal reveal-delay-${i+1}`}>
                <ProjectCard {...p} link={`/work/${p.id}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT I DO ── */}
      <section className="section services-section">
        <div className="container">
          <p className="section-label reveal">WHAT I DO</p>
          <h2 className="home-section-title reveal">Three things.<br />One purpose.</h2>
          <div className="services-grid">
            {[
              { slug:'EDIT', label:'Make it worth watching.', desc:'From raw footage to the final cut, I focus on pacing, clarity, visual hierarchy, sound, and the details that keep the viewer engaged.' },
              { slug:'CREATE', label:'Build the idea before the timeline.', desc:'Scripts, hooks, concepts, content structures, and creative direction — because a good edit starts long before the edit.' },
              { slug:'THINK', label:'Understand why it should work.', desc:'Who is watching? What do they need? Where will they lose interest? I think about the audience before thinking about the effect.' },
            ].map((s, i) => (
              <div key={s.slug} className={`service-card reveal reveal-delay-${i+1}`}>
                <h3 className="service-slug text-accent font-display">{s.slug}</h3>
                <p className="service-label font-display">{s.label}</p>
                <p className="service-desc text-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="section philosophy-section">
        <div className="container">
          <h2 className="philosophy-text reveal">
            GOOD CONTENT<br />
            DOESN'T NEED<br />
            MORE EFFECTS.<br />
            IT NEEDS<br />
            <em className="text-accent">MORE INTENT.</em>
          </h2>
          <div className="philosophy-sub reveal">
            <p>Trends change. Effects change. Platforms change.</p>
            <p>But people still connect with content that understands them.</p>
            <p className="text-accent">That's what I try to build into every project.</p>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section">
        <div className="container">
          <p className="section-label reveal">PROCESS</p>
          <h2 className="home-section-title reveal">From idea<br />to upload.</h2>
          <div style={{ marginTop:'3rem' }}>
            {[
              { num:'01', title:'UNDERSTAND', desc:"What's the idea? Who is it for? What's the point?" },
              { num:'02', title:'BUILD',      desc:'Shape the concept, hook and structure.' },
              { num:'03', title:'SCRIPT',     desc:'Turn the idea into something that can actually be communicated.' },
              { num:'04', title:'EDIT',       desc:'Build the visual rhythm, pacing, sound and supporting elements.' },
              { num:'05', title:'REFINE',     desc:"Remove what doesn't help. Strengthen what does." },
            ].map((p, i) => (
              <div key={p.num} className={`process-item reveal reveal-delay-${i % 3 + 1}`}>
                <span className="process-num">{p.num} —</span>
                <div>
                  <h3 className="process-title">{p.title}</h3>
                  <p className="process-desc">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section cta-band">
        <div className="container text-center reveal">
          <p className="section-label" style={{ justifyContent:'center' }}>GET IN TOUCH</p>
          <h2 className="home-section-title">Have an idea?<br />Let's make it<br /><span className="text-accent">worth watching.</span></h2>
          <div style={{ display:'flex', justifyContent:'center', gap:'1rem', marginTop:'2.5rem', flexWrap:'wrap' }}>
            <Link to="/contact" className="btn btn-primary">LET'S TALK ↗</Link>
            <Link to="/work"    className="btn btn-outline">SEE MY WORK ↗</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
