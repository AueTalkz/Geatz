import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ children, to, href, onClick, className = '' }) => {
  const classes = `btn ${className}`;

  if (to) {
    return <Link to={to} className={classes}>{children}</Link>;
  }

  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>{children}</a>;
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
