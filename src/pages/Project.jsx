import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/Button';

// Mock data based on 03_PROJECTS.md
const projectsData = {
  'pal-vs-nari': {
    title: 'Pal VS Nari',
    role: 'Editor',
    type: 'Entertainment · Short-form',
    focus: ['Compositing', 'VFX', 'Visual Storytelling', 'Short-form'],
    idea: 'A fast-paced visual edit built around character interaction, compositing, visual effects, and comedic timing.',
    approach: 'Focus on primary visual-editing showcase.',
    video: null,
    editingDecisions: 'I prioritized comedic timing over complex transitions, making sure every effect served a punchline.',
    learned: 'Visual effects are useless if the pacing is off.'
  },
  'basic-mistake': {
    title: 'Basic Mistake Done By All',
    role: 'Editor & Strategist',
    type: 'Creator Content · Educational',
    focus: ['Script', 'Storytelling', 'Content Strategy', 'Editing'],
    idea: 'A creator-focused piece exploring why flashy edits shouldn\'t come before clear, useful content.',
    approach: 'Focus on content-first editing, relying on structure rather than effects.',
    video: null,
    editingDecisions: 'I removed unnecessary B-roll and let the dialogue drive the video.',
    learned: 'Silence and pauses are as powerful as sound design.'
  },
  'day-1': {
    title: 'Day 1',
    role: 'Editor',
    type: 'Creator Content · Talking Head',
    focus: ['Talking Head', 'Typography', 'Pacing', 'Social Content'],
    idea: 'A short-form creator edit focused on pacing, typography, visual emphasis, and turning talking-head footage into engaging social content.',
    approach: 'Core creator-editing showcase.',
    video: null,
    editingDecisions: 'Used kinetic typography to emphasize keywords without overwhelming the frame.',
    learned: 'Less is more when dealing with complex talking points.'
  }
};

const Project = () => {
  const { id } = useParams();
  const project = projectsData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="container section" style={{ paddingTop: 'calc(var(--space-xl) * 1.5)' }}>
        <h1 className="text-title">Project not found</h1>
        <Button to="/work" className="mt-2">BACK TO WORK ↗</Button>
      </div>
    );
  }

  return (
    <div className="page-transition-enter page-transition-enter-active">
      <section className="section" style={{ paddingTop: 'calc(var(--space-xl) * 1.5)' }}>
        <div className="container">
          <Link to="/work" className="text-meta text-accent">← BACK TO WORK</Link>
          
          <h1 className="text-hero font-display mt-2">{project.title}</h1>
          
          <div className="grid mt-4">
            <div style={{ gridColumn: 'span 4' }}>
              <p className="text-meta text-secondary">ROLE</p>
              <p className="text-body">{project.role}</p>
            </div>
            <div style={{ gridColumn: 'span 4' }}>
              <p className="text-meta text-secondary">TYPE</p>
              <p className="text-body">{project.type}</p>
            </div>
            <div style={{ gridColumn: 'span 4' }}>
              <p className="text-meta text-secondary">FOCUS</p>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {project.focus.map(f => <li key={f} className="text-body">{f}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-4" style={{ backgroundColor: '#1a1a1a', width: '100%', aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p className="text-secondary">[ VIDEO PLACEHOLDER ]</p>
          </div>

          <div className="grid mt-4">
            <div style={{ gridColumn: '1 / -1' }}>
              <h2 className="text-title text-accent">THE IDEA</h2>
              <p className="text-body mt-2" style={{ maxWidth: '800px' }}>{project.idea}</p>
            </div>
          </div>

          <div className="grid mt-4">
            <div style={{ gridColumn: '1 / -1' }}>
              <h2 className="text-title text-accent">MY APPROACH</h2>
              <p className="text-body mt-2" style={{ maxWidth: '800px' }}>{project.approach}</p>
            </div>
          </div>

          <div className="grid mt-4">
             <div style={{ gridColumn: '1 / -1' }}>
              <h2 className="text-title text-accent">EDITING DECISIONS</h2>
              <p className="text-body mt-2" style={{ maxWidth: '800px' }}>{project.editingDecisions}</p>
            </div>
          </div>

          <div className="grid mt-4 mb-4">
             <div style={{ gridColumn: '1 / -1' }}>
              <h2 className="text-title text-accent">WHAT I LEARNED</h2>
              <p className="text-body mt-2" style={{ maxWidth: '800px' }}>{project.learned}</p>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <Button to="/work">MORE WORK ↗</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
