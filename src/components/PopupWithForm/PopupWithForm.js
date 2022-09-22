import "./PopupWithForm.css";
import React from "react";

function PopupWithForm({
  closeModal,
  isModalOpen,
  setShowSuccess,
  setSignup,
  children,
}) {
  const closePopup = React.useCallback(() => {
    closeModal();
    setSignup(false);
    setShowSuccess(false);
  }, [closeModal, setShowSuccess]);

  React.useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    const closeOnClick = (event) => {
      if (
        event.target.classList.contains("popup") &&
        !event.target.classList.contains("popup__container")
      ) {
        closePopup();
      }
    };

    window.addEventListener("click", closeOnClick);
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("click", closeOnClick);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [closeModal, closePopup]);

  return (
    <div className={`popup ${isModalOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <button
          type="button"
          className="popup__close"
          onClick={closePopup}
        ></button>
        {children}
      </div>
    </div>
  );
}

export default PopupWithForm;
