import './PopupWithForm.css';
import React from 'react';

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
               (<><h3 className="popup__title">Sign up</h3>
               <form onSubmit={registerUser} className="popup__form">
                <label className="popup__label" htmlFor="email">Email</label>
                <input className="popup__input" type="text" name="email" id="email" placeholder="Enter email"/>
                <label className="popup__label" htmlFor="name">Password</label>
                <input className="popup__input" type="password" name="password" id="password" placeholder="Enter password"/>
                <label className="popup__label" htmlFor="name">Email</label>
                <input className="popup__input" type="text" name="name" id="name" placeholder="Enter your username"/>
                <button className="popup__button" type="submit">Sign up</button>
                <p className="popup__text">Or <span onClick={() => setSignup(false)}>Sign in</span></p>
               </form> </>) 
               : 
               ( !message.show ? (<><h3 className="popup__title">Sign in</h3>
               <form className="popup__form">
                <label className="popup__label" htmlFor="email">Email</label>
                <input className="popup__input" type="text" name="email" id="email" placeholder="Enter email"/>
                <label className="popup__label" htmlFor="name">Password</label>
                <input className="popup__input" type="password" name="password" id="password" placeholder="Enter password"/>
                <button className="popup__button" type="submit">Sign in</button>
                <p className="popup__text">Or <span onClick={() => setSignup(true)}>Sign up</span></p>
               </form> </>) :
               (<><h3 className="popup__title">Registration successfully completed!</h3>
               <p className="popup__text"><span onClick={() => setMessage({show: false, message: ''})}>Sign in</span></p></>)
               )
               }
           </div>
       </div>
    )
   
   };
   
   
   export default PopupWithForm;