import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about" onClick={() => setMobileToggle(false)}>
          About
        </Link>
      </li>
      <li>
        <Link to="/service/service-details" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
      </li>      
      <li>
        <Link to="/team/team-details" onClick={() => setMobileToggle(false)}>
          Team
        </Link>
      </li>  
      <li>
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
      </li>
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
