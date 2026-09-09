import { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition-enter page-transition-enter-active">
      <section className="section" style={{ paddingTop: 'calc(var(--space-xl) * 1.5)', minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="container">
          <h1 className="text-hero font-display text-accent mb-4" style={{ lineHeight: '1' }}>
            HAVE AN IDEA?<br />
            LET'S MAKE IT<br />WORTH WATCHING.
          </h1>
          
          <p className="text-title text-secondary mt-2 mb-4" style={{ maxWidth: '800px' }}>
            Whether you have a video that needs editing, an idea that needs shaping, or content that needs a direction — let's talk.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }} className="mt-4">
            <a href="mailto:hello@example.com" className="text-title font-display hover-accent">EMAIL ↗</a>
            <a href="#" className="text-title font-display hover-accent">INSTAGRAM ↗</a>
            <a href="#" className="text-title font-display hover-accent">YOUTUBE ↗</a>
          </div>
        </div>
      </section>
      <style>{`
        .hover-accent {
          transition: color var(--transition-fast);
        }
        .hover-accent:hover {
          color: var(--accent-color);
        }
      `}</style>
    </div>
  );
};

export default Contact;
