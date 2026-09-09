import { useEffect, useState } from 'react';
import useReveal from '../hooks/useReveal';
import './About.css';

const EN = [
  "Not too long ago, I was just another fresher trying to figure out what came next.",
  "School was done. College was done. But knowing what to do next wasn't exactly part of the syllabus.",
  "I started experimenting.",
  "Editing. Content. Scripts. Ideas. Projects. A lot of things that worked — and a lot that didn't.",
  "Somewhere along the way, I realized I wasn't interested in just making things look good.",
  "I wanted to understand why people watch, what makes content connect, and how an idea can become something real.",
  "That's what I'm building now.",
];

const TA = [
  "Konjam naal munnadi varaikum, naanum oru ordinary fresher thaan — next enna panrathu nu puriyama suthitu irunthen.",
  "School mudinjithu. College mudinjithu. Aana life-la next enna panrathu nu entha syllabus layum illaye.",
  "Appo thaan experiment panna start pannen.",
  "Editing. Content. Scripts. Ideas. Projects. Neraya try pannen — sila vishayam workout aachu, neraya aagala.",
  "Poga poga oru vishayam purinjithu: Enakku chumma paaka nalla irukku-nu video edit panrathula interest illa.",
  "Makkal yen oru video paakuranga? Oru content eppadi connect aaguthu? Atha purinjikka aasa patten.",
  "Ippo atha thaan build pannitu irukken.",
];

const skills  = ['VIDEO EDITING','CONTENT CREATION','SCRIPT WRITING','SHORT-FORM CONTENT','STORYTELLING','CONTENT STRATEGY','AI-ASSISTED CREATIVE WORKFLOWS'];
const tools   = ['Premiere Pro','Filmora','Photoshop','AI Creative Tools'];

const About = () => {
  const [lang, setLang] = useState('en');
  const [fading, setFading] = useState(false);
  useReveal();
  useEffect(() => { window.scrollTo(0,0); }, []);

  const toggleLang = () => {
    setFading(true);
    setTimeout(() => {
      setLang(l => l === 'en' ? 'ta' : 'en');
      setFading(false);
    }, 280);
  };

  const lines = lang === 'en' ? EN : TA;

  return (
    <div className="page-enter" style={{ paddingTop:'120px' }}>
      <section className="section" style={{ paddingTop:0 }}>
        <div className="container">
          <div className="about-top reveal">
            <div>
              <p className="section-label">ABOUT</p>
              <h1 style={{ fontSize:'var(--hero)', letterSpacing:'-0.04em', lineHeight:'0.9', textTransform:'uppercase' }}>
                SO, WHO<br />IS<br /><span className="text-accent">GEATZ?</span>
              </h1>
            </div>
            <button className="lang-toggle" onClick={toggleLang} aria-label="Toggle language">
              <span className={lang === 'en' ? 'active' : ''}>EN</span>
              <span className="divider">↔</span>
              <span className={lang === 'ta' ? 'active' : ''}>TA</span>
            </button>
          </div>

          <div className={`about-text reveal ${fading ? 'fading' : ''}`}>
            {lines.map((line, i) => (
              <p key={`${lang}-${i}`}>{line}</p>
            ))}
            <p className="text-accent" style={{ marginTop:'1rem' }}>
              Still learning. Still experimenting. Still building.
            </p>
          </div>
        </div>
      </section>

      <div className="marquee-wrap">
        <div className="marquee-track">
          {Array(12).fill(0).map((_, i) => (
            <span key={i} className="marquee-item">STILL BUILDING <span className="dot">·</span></span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-grid">
            <div className="reveal">
              <p className="section-label">SKILLS</p>
              <ul className="about-list">
                {skills.map(s => <li key={s}>{s}</li>)}
              </ul>
            </div>
            <div className="reveal reveal-delay-2">
              <p className="section-label">TOOLS</p>
              <ul className="about-list">
                {tools.map(t => <li key={t}>{t}</li>)}
              </ul>
              <p style={{ fontSize:'var(--small)', letterSpacing:'0.06em', color:'var(--accent)', marginTop:'1.5rem', textTransform:'uppercase' }}>
                Tools are secondary to outcomes and creative thinking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
