import './Register.css';
import React from 'react';

function Register({setSignup, showSuccess, setShowSuccess}) {

const registerUser = () => {
    //registering the user in the backend
    setShowSuccess(true);
}

const [user, setUser] = React.useState({email: '', password: '', name: ''});

    
const changeInput = (event) => {
    setUser({...user, [event.target.name]: event.target.value})
};

if (showSuccess) {
    return (
        <>
        <h3 className="popup__title">Registration successfully completed!</h3>
        <p className="popup__text"><span onClick={() => setSignup(false)}>Sign in</span></p>
        </>  
    )
}

if (!showSuccess) {
    return (
        <> 
        <h3 className="popup__title">Sign up</h3>
        <form onSubmit={registerUser} className="popup__form">
            <label className="popup__label" htmlFor="email">Email</label>
            <input required className="popup__input" type="email" name="email" id="email" placeholder="Enter email" onChange={changeInput} value={user.email}/>
            <label className="popup__label" htmlFor="name">Password</label>
            <input required className="popup__input" type="password" name="password" id="password" placeholder="Enter password" onChange={changeInput} value={user.password}/>
            <label className="popup__label" htmlFor="name">Username</label>
            <input required className="popup__input" type="text" name="name" id="name" placeholder="Enter your username" onChange={changeInput} value={user.name}/>
            <button className="popup__button" type="submit">Sign up</button>
            <p className="popup__text">Or <span onClick={() => setSignup(false)}>Sign in</span></p>
        </form>
        </>
    )
}

}

export default Register