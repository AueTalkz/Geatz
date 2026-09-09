import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ title, category, image, link, featured = false }) => {
  return (
    <Link to={link} className={`project-card ${featured ? 'featured' : ''}`}>
      <div className="project-image-wrapper">
        {image ? (
          <img src={image} alt={title} className="project-image" loading="lazy" />
        ) : (
          <div className="project-image-placeholder"></div>
        )}
      </div>
      <div className="project-meta">
        <h3 className="project-title font-display">{title}</h3>
        <p className="project-category text-meta text-secondary">{category}</p>
        <div className="project-arrow">↗</div>
      </div>
    </Link>
  );
};

export default ProjectCard;
