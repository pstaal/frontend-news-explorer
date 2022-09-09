import './Login.css';

function Login({setSignup}) {

    return (
        <>
        <h3 className="popup__title">Sign in</h3>
            <form className="popup__form">
                <label className="popup__label" htmlFor="email">Email</label>
                <input required className="popup__input" type="text" name="email" id="email" placeholder="Enter email"/>
                <label className="popup__label" htmlFor="name">Password</label>
                <input required className="popup__input" type="password" name="password" id="password" placeholder="Enter password"/>
                <button className="popup__button" type="submit">Sign in</button>
                <p className="popup__text">Or <span onClick={() => setSignup(true)}>Sign up</span></p>
            </form> 
        </>
    )
}

export default Login;