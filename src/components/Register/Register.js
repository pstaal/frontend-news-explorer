import "./Register.css";
import React from "react";
import useFormWithValidation from "../../utils/formValidationHook";
import PopupWithForm from "../PopupWithForm/PopupWithForm";

function Register({
  setSignup,
  showSuccess,
  registerUser,
  setShowSuccess,
  closeModal,
  isModalOpen,
}) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const handleRegistration = (event) => {
    event.preventDefault();
    //registering the user in the backend
    const { email, password, name } = values;
    registerUser(email, password, name);
  };

  if (showSuccess) {
    return (
      <>
        <h3 className="popup__title">Registration successfully completed!</h3>
        <p className="popup__text">
          <span
            onClick={() => {
              setSignup(false);
              setShowSuccess(false);
            }}
          >
            Sign in
          </span>
        </p>
      </>
    );
  }

  if (!showSuccess) {
    return (
      <PopupWithForm
        closeModal={closeModal}
        isModalOpen={isModalOpen}
        setShowSuccess={setShowSuccess}
        setSignup={setSignup}
      >
        <h3 className="popup__title">Sign up</h3>
        <form onSubmit={handleRegistration} className="popup__form">
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
            onChange={handleChange}
            value={values.email || ""}
          />
          <p className="popup__input-error">{errors.email}</p>
          <label className="popup__label" htmlFor="name">
            Password
          </label>
          <input
            required
            className="popup__input"
            type="password"
            name="password"
            minLength="8"
            id="password"
            placeholder="Enter password"
            onChange={handleChange}
            value={values.password || ""}
          />
          <p className="popup__input-error">{errors.password}</p>
          <label className="popup__label" htmlFor="name">
            Username
          </label>
          <input
            required
            className="popup__input"
            type="text"
            name="name"
            minLength="2"
            maxLength="30"
            id="name"
            placeholder="Enter your username"
            onChange={handleChange}
            value={values.name || ""}
          />
          <p className="popup__input-error">{errors.name}</p>
          <p className="popup__submit-error"></p>
          <button disabled={!isValid} className="popup__button" type="submit">
            Sign up
          </button>
          <p className="popup__text">
            Or <span onClick={() => setSignup(false)}>Sign in</span>
          </p>
        </form>
      </PopupWithForm>
    );
  }
}

export default Register;
