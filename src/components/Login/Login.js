import './Login.css';
import React from 'react';
import useFormWithValidation from '../../utils/formValidationHook';

function Login({setSignup}) {

    const { values, handleChange, errors, isValid, resetForm } = useFormWithValidation();

    return (
        <>
        <h3 className="popup__title">Sign in</h3>
            <form className="popup__form">
                <label className="popup__label" htmlFor="email">Email</label>
                <input required className="popup__input" type="email" name="email" id="email" placeholder="Enter email" value={values.email} onChange={handleChange}/>
                <p className="popup__input-error">{errors.email}</p>
                <label className="popup__label" htmlFor="name">Password</label>
                <input required className="popup__input" type="password" minLength="8" name="password" id="password" placeholder="Enter password" value={values.password} onChange={handleChange}/>
                <p className="popup__input-error">{errors.password}</p>
                <button disabled={!isValid} className="popup__button" type="submit">Sign in</button>
                <p className="popup__text">Or <span onClick={() => setSignup(true)}>Sign up</span></p>
            </form> 
        </>
    )
}

export default Login;