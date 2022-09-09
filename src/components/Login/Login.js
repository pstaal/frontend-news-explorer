import './Login.css';
import React from 'react';

function Login({setSignup}) {

    const [user, setUser] = React.useState({email: '', password: ''});

    const changeInput = (event) => {
      setUser({...user, [event.target.name]: event.target.value})
    };

    return (
        <>
        <h3 className="popup__title">Sign in</h3>
            <form className="popup__form">
                <label className="popup__label" htmlFor="email">Email</label>
                <input required className="popup__input" type="email" name="email" id="email" placeholder="Enter email" value={user.email} onChange={changeInput}/>
                <label className="popup__label" htmlFor="name">Password</label>
                <input required className="popup__input" type="password" name="password" id="password" placeholder="Enter password" value={user.password} onChange={changeInput}/>
                <button className="popup__button" type="submit">Sign in</button>
                <p className="popup__text">Or <span onClick={() => setSignup(true)}>Sign up</span></p>
            </form> 
        </>
    )
}

export default Login;