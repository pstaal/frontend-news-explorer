import './PopupWithForm.css';
import React from 'react';
import Register from '../Register/Register';
import Login from '../Login/Login';

function PopupWithForm({closeModal, isModalOpen, loginUser, registerUser, showSuccess, setShowSuccess}) {

    const [ signup, setSignup ] = React.useState(false);


    const closePopup = React.useCallback(() => {
        closeModal();
        setSignup(false);
        setShowSuccess(false);
    },[closeModal, setShowSuccess])
 
    React.useEffect(() => {
        const closeOnEscape = (e) => {
          if(e.keyCode === 27){
            closePopup()
          }
        }

        const closeOnClick = (e) => {
            if(e.target.classList.contains('popup') && !e.target.classList.contains('popup__container')){
                closePopup()
            }
        }

        window.addEventListener('click', closeOnClick);
        window.addEventListener('keydown', closeOnEscape);

      return () => {
        window.removeEventListener('click', closeOnClick);
        window.removeEventListener('keydown', closeOnEscape)
      };
    },[closeModal, closePopup])

    return (
       <div className={`popup ${isModalOpen? 'popup_opened' : ''}`}>
           <div className="popup__container">
               <button type="button" className="popup__close" onClick={closePopup}></button>
               { signup ? <Register setShowSuccess={setShowSuccess} setSignup={setSignup} registerUser={registerUser} showSuccess={showSuccess} /> : <Login setSignup={setSignup} loginUser={loginUser}/> }
           </div>
       </div>
    )
   
   };
   
   
   export default PopupWithForm;