import { Link } from 'react-router-dom';

const ProjectCard = ({ title, category, image, link }) => (
  <Link to={link} className="project-card" data-cursor="VIEW">
    <div className="card-media">
      {image
        ? <img src={image} alt={title} loading="lazy" />
        : <div className="card-media-placeholder">{title.charAt(0)}</div>
      }
      <div className="card-overlay">
        <span className="card-overlay-btn">VIEW PROJECT ↗</span>
      </div>
    </div>
    <div className="card-meta">
      <div className="card-info">
        <h3 className="card-title">{title}</h3>
        <p className="card-cat">{category}</p>
      </div>
      <span className="card-arrow">↗</span>
    </div>
  </Link>
);

export default ProjectCard;
