import githubIcon from '../../images/github-icon.svg';
import facebookIcon from '../../images/facebook-icon.svg';
import './Footer.css';

import { Link } from 'react-router-dom';

function Footer() {
    return (
      <footer className="footer">
        <p className="footer__title">&copy; 2021 Supersite, Powered by News API</p>
        <div className="footer__container">
            <nav className="footer__links">
                <Link to="/">Home</Link>
                <a href="https://practicum.com/" rel="noreferrer" target="_blank">Practicum by Yandex</a>
            </nav>
            <nav className="footer__links">
                <a href="https://github.com/Yandex-Practicum" rel="noreferrer" target="_blank"><img src={githubIcon} alt="github logo"/></a>
                <a href="https://www.facebook.com/PracticumBootcamp" rel="noreferrer" target="_blank"><img src={facebookIcon} alt="facebook logo"/></a>
            </nav>
        </div>
      </footer>
    )
  }
  
  export default Footer;