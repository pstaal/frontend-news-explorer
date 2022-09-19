import "./Login.css";
import React from "react";
import useFormWithValidation from "../../utils/formValidationHook";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Login({
  setSignup,
  loginUser,
  closeModal,
  isModalOpen,
  setShowSuccess,
}) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const handleLogin = (event) => {
    event.preventDefault();
    const { email, password } = values;
    loginUser(email, password);
  };

  return (
    <PopupWithForm
      closeModal={closeModal}
      isModalOpen={isModalOpen}
      setShowSuccess={setShowSuccess}
      setSignup={setSignup}
    >
      <h3 className="popup__title">Sign in</h3>
      <form className="popup__form" onSubmit={handleLogin}>
        <label className="popup__label" htmlFor="email">
          Email
        </label>
        <input
          required
          className="popup__input"
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          value={values.email || ""}
          onChange={handleChange}
        />
        <p className="popup__input-error">{errors.email}</p>
        <label className="popup__label" htmlFor="name">
          Password
        </label>
        <input
          required
          className="popup__input"
          type="password"
          minLength="8"
          name="password"
          id="password"
          placeholder="Enter password"
          value={values.password || ""}
          onChange={handleChange}
        />
        <p className="popup__input-error">{errors.password}</p>
        <p className="popup__submit-error"></p>
        <button disabled={!isValid} className="popup__button" type="submit">
          Sign in
        </button>
        <p className="popup__text">
          Or <span onClick={() => setSignup(true)}>Sign up</span>
        </p>
      </form>
    </PopupWithForm>
  );
}

export default Login;
