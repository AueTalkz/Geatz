import { useEffect, useState } from 'react';
import './About.css';

const About = () => {
  const [lang, setLang] = useState('en');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleLang = () => {
    setLang(prev => prev === 'en' ? 'ta' : 'en');
  };

  return (
    <div className="page-transition-enter page-transition-enter-active">
      <section className="section" style={{ paddingTop: 'calc(var(--space-xl) * 1.5)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 'var(--space-sm)' }}>
            <h1 className="text-hero font-display text-accent">SO, WHO IS GEATZ?</h1>
            <button className="lang-toggle text-meta font-display" onClick={toggleLang}>
              ENGLISH ↔ TANGLISH
            </button>
          </div>

          <div className="about-content mt-4" style={{ position: 'relative', minHeight: '60vh' }}>
            <div className={`lang-content ${lang === 'en' ? 'active' : ''}`}>
              <p>Not too long ago, I was just another fresher trying to figure out what came next.</p>
              <p>School was done. College was done. But knowing what to do next wasn't exactly part of the syllabus.</p>
              <p>I started experimenting.</p>
              <p>Editing. Content. Scripts. Ideas. Projects. A lot of things that worked — and a lot that didn't.</p>
              <p>Somewhere along the way, I realized I wasn't interested in just making things look good.</p>
              <p>I wanted to understand why people watch, what makes content connect, and how an idea can become something real.</p>
              <p>That's what I'm building now.</p>
              <p className="mt-2 text-accent">Still learning. Still experimenting. Still building.</p>
            </div>
            
            <div className={`lang-content ${lang === 'ta' ? 'active' : ''}`}>
              <p>Konjam naal munnadi varaikum, naanum oru ordinary fresher thaan — next enna panrathu nu puriyama suthitu irunthen.</p>
              <p>School mudinjithu. College mudinjithu. Aana life-la next enna panrathu nu entha syllabus layum illaye.</p>
              <p>Appo thaan experiment panna start pannen.</p>
              <p>Editing. Content. Scripts. Ideas. Projects. Neraya try pannen — sila vishayam workout aachu, neraya aagala.</p>
              <p>Poga poga oru vishayam purinjithu: Enakku chumma paaka nalla irukku-nu video edit panrathula interest illa.</p>
              <p>Makkal yen oru video paakuranga? Oru content eppadi connect aaguthu? Oru chinna idea eppadi perusaa maaruthu? Itha purinjikka aasa patten.</p>
              <p>Ippo atha thaan build pannitu irukken.</p>
              <p className="mt-2 text-accent">Innum kathukittu thaan irukken. Innum try pannitu thaan irukken. Innum build pannitu thaan irukken.</p>
            </div>
          </div>

          <div className="grid mt-4">
            <div style={{ gridColumn: 'span 6' }}>
              <h2 className="text-title font-display text-accent">SKILLS</h2>
              <ul style={{ listStyle: 'none', padding: 0 }} className="text-secondary mt-1 text-body">
                <li>VIDEO EDITING</li>
                <li>CONTENT CREATION</li>
                <li>SCRIPT WRITING</li>
                <li>SHORT-FORM CONTENT</li>
                <li>STORYTELLING</li>
                <li>CONTENT STRATEGY</li>
                <li>AI-ASSISTED CREATIVE WORKFLOWS</li>
              </ul>
            </div>
            <div style={{ gridColumn: 'span 6' }}>
              <h2 className="text-title font-display text-accent">TOOLS</h2>
              <ul style={{ listStyle: 'none', padding: 0 }} className="text-secondary mt-1 text-body">
                <li>Premiere Pro</li>
                <li>Filmora</li>
                <li>Photoshop</li>
                <li>AI Creative Tools</li>
              </ul>
              <p className="text-meta text-accent mt-2">TOOLS ARE SECONDARY TO OUTCOMES AND CREATIVE THINKING.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
