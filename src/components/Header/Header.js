import Nav from '../Navigation/Nav';
import './Header.css';
import { useLocation, Link } from 'react-router-dom';

function Header(props) {

    const openMobileMenu = () => {
        document.querySelector('.header').classList.toggle('header__menu-active');
        document.querySelector('.overlay').classList.toggle('header__menu-active');
    };

    const location = useLocation();
    const isSavedArticlesUrl = location.pathname === '/saved-news';

    return (
      <div className={`header ${isSavedArticlesUrl ? 'header-black' : ''}`}>
        <div className={`header__wrapper ${isSavedArticlesUrl ? 'header-black' : ''}`}>
            <Link to={'/'} className={`header__logo ${isSavedArticlesUrl ? 'header-black' : ''}`}>NewsExplorer</Link>
            <div className="header__hamburger" onClick={openMobileMenu}>
                <span className={`header__hamburger-bar ${isSavedArticlesUrl ? 'header-black' : ''}`}></span>
                <span className={`header__hamburger-bar ${isSavedArticlesUrl ? 'header-black' : ''}`}></span>
            </div>
        </div>
        <Nav isSavedArticlesUrl={isSavedArticlesUrl} openModal={props.openModal} setIsLoggedIn={props.setIsLoggedIn} isLoggedIn={props.isLoggedIn}/>
      </div>
    )
  }
  
  export default Header;