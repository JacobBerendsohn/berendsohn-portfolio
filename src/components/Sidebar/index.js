import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoJB from '../../assets/images/logo-jb.png';
import LogoSubtitle from '../../assets/images/my_name.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoJB} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="Jacob Berendsohn" />
        </Link>
        <nav>
            <NavLink exact="true" activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color="4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jacob-berendsohn/">
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/JacobBerendsohn">
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar