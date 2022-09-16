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
import articlesSort from '../../utils/articlesSort';

function App() {

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    console.log("run once");
    verifyToken();
  }, []);

  React.useEffect(() => {
    if (isLoggedIn) {
      console.log("runs a lot");
      mainApi.getArticles()
      .then((res)=> {
        const newArticles = res.data.map((article) => {
          return {
            id: article._id,
            urlToImage: article.image,
            category: article.keyword,
            title: article.title,
            publishedAt: article.date,
            description: article.text,
            source: {name : article.source}
          }
        })

        setArticles(articlesSort(newArticles));
        console.log("these are the articles", articles);
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
          console.log('inside tokencheck', res.data);
          setIsLoggedIn(true);
          setCurrentUser(res.data);
          console.log("this is a user", currentUser);
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
        verifyToken();
        closeModal();
        console.log("user here",currentUser);
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

  const deleteCard = (id) => {
    mainApi.deleteArticle(id)
    .then((res) => {
      const removedArticleId = res.data._id;
      const newArticles = articles.filter((article)=> {return article.id !== removedArticleId});
      setArticles(articlesSort(newArticles));
    }).catch((err) => {
      console.log(err);
    });
  }

  const saveCard = (keyword, title, text, date, source, link, image) => {
    mainApi.addArticle(keyword, title, text, date, source, link, image)
    .then((res) => {
      const newArticle = {
        id: res.data._id,
        urlToImage: res.data.image,
        category: res.data.keyword,
        title: res.data.title,
        publishedAt: res.data.date,
        description: res.data.text,
        source: {name : res.data.source}
      };
      const newArticles = [...articles, newArticle];
      setArticles(articlesSort(newArticles));
    }).catch((err) => {
      console.log(err);
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowSuccess(false);
  }

  const openModal = () => {
    setIsModalOpen(true);
    setShowSuccess(false);
  }

  return (
    <div className="page">
    <div className="overlay"></div>
      <CurrentUserContext.Provider value={currentUser}>
        <Header openModal={openModal} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
          <Routes>
            <Route exact path="/" element={ <Main openModal={openModal} deleteCard={deleteCard} saveCard={saveCard} isLoggedIn={isLoggedIn} articles={articles}/>} />
            <Route path="/saved-news" element={<><SavedNewsHeader articles={articles}/><SavedNews deleteCard={deleteCard} articles={articles}/></>} />
          </Routes>
        <Footer />
        <PopupWithForm closeModal={closeModal} isModalOpen={isModalOpen} showSuccess={showSuccess} loginUser={loginUser} setShowSuccess={setShowSuccess} registerUser={registerUser}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
