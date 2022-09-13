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

function App() {

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);


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
      console.log("it worked!!")
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
      <Header openModal={openModal}/>
        <Routes>
          <Route exact path="/" element={ <Main />} />
          <Route path="/saved-news" element={<><SavedNewsHeader/><SavedNews/></>} />
        </Routes>
      <Footer />
      <PopupWithForm closeModal={closeModal} isModalOpen={isModalOpen} showSuccess={showSuccess} loginUser={loginUser} setShowSucces={setShowSuccess} registerUser={registerUser}/>
    </div>
  );
}

export default App;
