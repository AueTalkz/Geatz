import { useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

const Work = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
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
      <section className="section" style={{ paddingTop: 'calc(var(--space-xl) * 1.5)' }}>
        <div className="container">
          <h1 className="text-hero font-display text-accent mb-4">WORK</h1>
          
          <div className="grid mt-4">
            {projects.map((project, idx) => (
              <div key={project.id} className="work-grid-item" style={{ gridColumn: 'span 12' }}>
                <ProjectCard 
                  title={project.title} 
                  category={project.category} 
                  image={project.image} 
                  link={`/work/${project.id}`} 
                  featured={true}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
