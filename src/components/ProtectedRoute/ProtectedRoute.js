// ProtectedRoute.js

import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children, openModal }) {
  if (!isLoggedIn) {
    openModal();
    return <Navigate to={"/"} />;
  }
  return children;
}

export default ProtectedRoute;
