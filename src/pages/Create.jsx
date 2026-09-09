import { useEffect } from 'react';

const Create = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition-enter page-transition-enter-active">
      <section className="section" style={{ paddingTop: 'calc(var(--space-xl) * 1.5)' }}>
        <div className="container">
          <h1 className="text-hero font-display text-accent">
            BEFORE I EDIT IT,<br />
            I THINK ABOUT IT.
          </h1>
          <p className="text-title text-secondary mt-2" style={{ maxWidth: '800px' }}>
            Some of my work starts with footage. Some starts with a blank page.<br /><br />
            Here's where I explore scripts, hooks, concepts, and the thinking behind content.
          </p>

          <div className="grid mt-4">
            <div style={{ gridColumn: 'span 6' }}>
              <h2 className="text-heading font-display">THE INTRO</h2>
              <p className="text-secondary mt-1">Personal storytelling / creator introduction.</p>
            </div>
            <div style={{ gridColumn: 'span 6' }}>
              <h2 className="text-heading font-display">THINGS TO FOCUS ON</h2>
              <p className="text-secondary mt-1">Creator education / audience-first content.</p>
            </div>
            <div style={{ gridColumn: 'span 6', marginTop: 'var(--space-md)' }}>
              <h2 className="text-heading font-display">SCRIPTING</h2>
              <p className="text-secondary mt-1">AI-assisted scripting workflow.</p>
            </div>
            <div style={{ gridColumn: 'span 6', marginTop: 'var(--space-md)' }}>
              <h2 className="text-heading font-display">THE PLAN</h2>
              <p className="text-secondary mt-1">Series planning and content structure.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Create;
