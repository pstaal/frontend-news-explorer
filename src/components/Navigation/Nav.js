import './Nav.css';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import logoutWhiteIcon from '../../images/logout-white.png';
import logoutBlackIcon from '../../images/logout-black.png';

function Nav({isSavedArticlesUrl, openModal, isLoggedIn, setIsLoggedIn }) {
   
  const value = useContext(CurrentUserContext);

    const removeMobileStyling = () => {
        document.querySelector('.header').classList.remove('header__menu-active');
        document.querySelector('.overlay').classList.remove('header__menu-active');
    };

    const logout = (event) => {
      event.preventDefault();
      localStorage.clear();
      setIsLoggedIn(false);
    }

    return (
     <nav>
        <ul className={`nav ${isSavedArticlesUrl ? 'nav-black' : ''}`}>
            {isLoggedIn && <NavLink to={'/saved-news'} onClick={removeMobileStyling} className={({ isActive }) => "nav__item" + (isSavedArticlesUrl ? ' nav-black' : '') + (isActive ? " nav-item-active" : "")}>Saved articles</NavLink>}
            <NavLink to={'/'} onClick={removeMobileStyling} className={({ isActive }) => "nav__item" + (isSavedArticlesUrl ? ' nav-black' : '') + (isActive ? " nav-item-active" : "")}>Home</NavLink>
            {isLoggedIn ? 
              <li className={`nav__button ${isSavedArticlesUrl? 'nav-black' : ''}`} onClick={logout}>{value.name} <img alt="log out" className="nav__logout-icon" src={isSavedArticlesUrl ? logoutBlackIcon : logoutWhiteIcon}/></li> :
              <li className={`nav__button nav__button-loggedout ${isSavedArticlesUrl? 'nav-black' : ''}`} onClick={openModal}>Sign in</li>
            }
        </ul>
      </nav>
    )
  }
  
  export default Nav;