// ProtectedRoute.js

import React from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, children, openModal, pageLoading}) {
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!isLoggedIn && !pageLoading) {
      openModal();
      navigate('/');
    }
  }, [isLoggedIn, openModal, pageLoading]);

  return children;
}

export default ProtectedRoute;
