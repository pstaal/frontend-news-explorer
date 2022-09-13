import { Route, Routes } from 'react-router-dom';
import React from 'react';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import mainApi from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn ] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    verifyToken();
  }, []);

  React.useEffect(() => {
    if (isLoggedIn) {
      console.log(articles);
      mainApi.getArticles()
      .then((res)=> {
        setArticles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }}, [isLoggedIn]);

  function verifyToken() {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      mainApi.verifyJWT(storedToken)
        .then((res) => {
          setIsLoggedIn(true);
          setCurrentUser(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return;
    }
  }

  const loginUser = (email,password) => {
    mainApi.login(email, password)
    .then((res) => {
        localStorage.setItem('token', res.token);
    })
    .catch((err) => {
        const errorElement = document.querySelector('.popup__submit-error');
        errorElement.textContent = err.message;  
    })
    
}


const registerUser = (email,password, name) => {

  mainApi.addUser(email, password, name)
  .then(() => {
      setShowSuccess(true);
  })
  .catch((err) => {
      const errorElement = document.querySelector('.popup__submit-error');
      errorElement.textContent = err.message;
      console.log(err)
  })
  
}

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const openModal = () => {
    setIsModalOpen(true);
  }

  return (
    <div className="page">
    <div className="overlay"></div>
      <CurrentUserContext.Provider value={currentUser}>
        <Header openModal={openModal}/>
          <Routes>
            <Route exact path="/" element={ <Main />} />
            <Route path="/saved-news" element={<><SavedNewsHeader/><SavedNews articles={articles}/></>} />
          </Routes>
        <Footer />
        <PopupWithForm closeModal={closeModal} isModalOpen={isModalOpen} showSuccess={showSuccess} loginUser={loginUser} setShowSucces={setShowSuccess} registerUser={registerUser}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
