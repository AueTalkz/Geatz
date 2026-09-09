import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

const Home = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = [
    {
      id: 'pal-vs-nari',
      title: 'Pal VS Nari',
      category: 'Entertainment · Short-form · Visual Editing',
      image: null
    },
    {
      id: 'basic-mistake',
      title: 'Basic Mistake Done By All',
      category: 'Creator Content · Educational · Storytelling',
      image: null
    },
    {
      id: 'day-1',
      title: 'Day 1',
      category: 'Creator Content · Short-form · Talking Head',
      image: null
    },
    {
      id: 'before-after-day-1',
      title: 'Before / After — Day 1',
      category: 'Social Content · Visual Design · Series',
      image: null
    }
  ];

  return (
    <div className="page-transition-enter page-transition-enter-active">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <p className="text-meta text-secondary mb-2">VIDEO EDITOR · CONTENT CREATOR</p>
          <h1 className="hero-heading">
            I TURN IDEAS INTO <br />
            CONTENT WORTH WATCHING.
          </h1>
          <p className="hero-subtext text-secondary mt-2">
            I work across video editing, scripting, and content development — helping ideas become clear, engaging, and built for the audience.
          </p>
          <div className="hero-ctas mt-3">
            <Button to="/work">VIEW MY WORK ↗</Button>
            <Button to="/contact" className="btn-outline">LET'S TALK ↗</Button>
          </div>
          <div className="hero-motion-text text-meta text-secondary mt-4">
            EDIT · CREATE · THINK · REPEAT
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="text-heading">Some things I've made.</h2>
            <p className="section-desc text-secondary">
              A collection of edits, experiments, and content projects built around one simple idea — make the content worth watching.
            </p>
          </div>
          <div className="grid work-grid mt-4">
            {featuredProjects.map((project, idx) => (
              <div key={project.id} className="work-grid-item">
                <ProjectCard 
                  title={project.title} 
                  category={project.category} 
                  image={project.image} 
                  link={`/work/${project.id}`} 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="section bg-alt">
        <div className="container">
          <h2 className="text-heading mb-4">Three things. One purpose.</h2>
          <div className="grid services-grid">
            <div className="service-col">
              <h3 className="text-title text-accent">EDIT</h3>
              <p className="font-display mt-1">Make it worth watching.</p>
              <p className="text-secondary mt-1">From raw footage to the final cut, I focus on pacing, clarity, visual hierarchy, sound, and the details that keep the viewer engaged.</p>
            </div>
            <div className="service-col">
              <h3 className="text-title text-accent">CREATE</h3>
              <p className="font-display mt-1">Build the idea before the timeline.</p>
              <p className="text-secondary mt-1">Scripts, hooks, concepts, content structures, and creative direction — because a good edit starts long before the edit.</p>
            </div>
            <div className="service-col">
              <h3 className="text-title text-accent">THINK</h3>
              <p className="font-display mt-1">Understand why it should work.</p>
              <p className="text-secondary mt-1">Who is watching? What do they need? Where will they lose interest? I think about the audience before thinking about the effect.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section philosophy-section">
        <div className="container">
          <h2 className="philosophy-heading">
            GOOD CONTENT <br />
            DOESN'T NEED <br />
            MORE EFFECTS. <br />
            IT NEEDS <br />
            <span className="text-accent">MORE INTENT.</span>
          </h2>
          <div className="philosophy-subtext text-secondary mt-3">
            <p>Trends change. Effects change. Platforms change.</p>
            <p>But people still connect with content that understands them.</p>
            <p>That's what I try to build into every project.</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section process-section">
        <div className="container">
          <h2 className="text-heading mb-4">From idea to upload.</h2>
          <ul className="process-list">
            <li>
              <span className="process-num text-accent font-display">01 — UNDERSTAND</span>
              <p className="text-secondary">What's the idea? Who is it for? What's the point?</p>
            </li>
            <li>
              <span className="process-num text-accent font-display">02 — BUILD</span>
              <p className="text-secondary">Shape the concept, hook and structure.</p>
            </li>
            <li>
              <span className="process-num text-accent font-display">03 — SCRIPT</span>
              <p className="text-secondary">Turn the idea into something that can actually be communicated.</p>
            </li>
            <li>
              <span className="process-num text-accent font-display">04 — EDIT</span>
              <p className="text-secondary">Build the visual rhythm, pacing, sound and supporting elements.</p>
            </li>
            <li>
              <span className="process-num text-accent font-display">05 — REFINE</span>
              <p className="text-secondary">Remove what doesn't help. Strengthen what does.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section bg-alt text-center">
        <div className="container">
          <h2 className="text-title">Have an idea?<br/>Let's make it worth watching.</h2>
          <div className="mt-3">
            <Button to="/contact">LET'S TALK ↗</Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
