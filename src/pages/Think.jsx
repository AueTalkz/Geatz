import { useEffect } from 'react';

const Think = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page-transition-enter page-transition-enter-active">
      <section className="section" style={{ paddingTop: 'calc(var(--space-xl) * 1.5)' }}>
        <div className="container">
          <h1 className="text-hero font-display text-accent mb-4">
            HOW I THINK<br />ABOUT CONTENT.
          </h1>

          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
            <li>
              <h2 className="text-title font-display">01 UNDERSTAND THE AUDIENCE.</h2>
            </li>
            <li>
              <h2 className="text-title font-display">02 MAKE THE IDEA CLEAR.</h2>
            </li>
            <li>
              <h2 className="text-title font-display">03 BUILD THE STORY.</h2>
            </li>
            <li>
              <h2 className="text-title font-display">04 USE THE EDIT TO SUPPORT IT.</h2>
            </li>
            <li>
              <h2 className="text-title font-display">05 REMOVE WHAT DOESN'T MATTER.</h2>
            </li>
          </ul>

          <div className="mt-4" style={{ borderTop: '1px solid var(--border-color)', paddingTop: 'var(--space-md)' }}>
            <h3 className="text-title text-accent">The edit shouldn't compete with the content.</h3>
            <p className="text-body text-secondary mt-2" style={{ maxWidth: '800px' }}>
              Motion graphics, transitions, B-roll and effects all have a purpose.<br/><br/>
              If they don't help the viewer understand, feel, or stay engaged — why are they there?
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Think;
