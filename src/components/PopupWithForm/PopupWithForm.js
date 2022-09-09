import './PopupWithForm.css';
import React from 'react';
import Register from '../Register/Register';
import Login from '../Login/Login';

function PopupWithForm({closeModal, isModalOpen}) {

    const [ signup, setSignup ] = React.useState(false);
    const [message, setMessage] = React.useState({ show: false, message: ''});


    const closePopup = () => {
        closeModal();
        setSignup(false);
        setMessage({show: false, message: ''});
    }

    const registerUser = () => {
        //registering the user in the backend
        setMessage({show: true, message: 'Registration successfully completed!'});
        setSignup(false);
    }
 
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
    },[closeModal])

    return (
       <div className={`popup ${isModalOpen? 'popup_opened' : ''}`}>
           <div className="popup__container">
               <button type="button" className="popup__close" onClick={closePopup}></button>
               { signup ? 
               (<Register registerUser={registerUser} setSignup={setSignup}/>) 
               : 
               ( !message.show ? (<Login setSignup={setSignup}/>) :
               (<><h3 className="popup__title">Registration successfully completed!</h3>
               <p className="popup__text"><span onClick={() => setMessage({show: false, message: ''})}>Sign in</span></p></>)
               )
               }
           </div>
       </div>
    )
   
   };
   
   
   export default PopupWithForm;