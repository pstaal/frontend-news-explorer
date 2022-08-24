import { Route, Routes } from 'react-router-dom';
import React from 'react';

import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SavedNews from '../SavedNews/SavedNews';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

function App() {

  const [isModalOpen, setIsModalOpen] = React.useState(false);

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
      <PopupWithForm closeModal={closeModal} isModalOpen={isModalOpen}/>
    </div>
  );
}

export default App;
