import githubIcon from '../../images/github-icon.svg';
import facebookIcon from '../../images/facebook-icon.svg';
import './Footer.css';

function Footer() {
    return (
      <section className="footer">
        <p className="footer__title">&copy; 2021 Supersite, Powered by News API</p>
        <div className="footer__container">
            <div className="footer__links">
                <a href="#">Home</a>
                <a href="https://practicum.com/">Practicum by Yandex</a>
            </div>
            <div className="footer__links">
                <a href="https://github.com/Yandex-Practicum"><img src={githubIcon} alt="github logo"/></a>
                <a href="https://www.facebook.com/PracticumBootcamp"><img src={facebookIcon} alt="facebook logo"/></a>
            </div>
        </div>
      </section>
    )
  }
  
  export default Footer;