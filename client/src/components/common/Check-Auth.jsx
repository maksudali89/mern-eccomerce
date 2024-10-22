import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
function CheckAuth(isAuthenticated, user, children) {
  console.log(isAuthenticated);
  console.log(user)
  const location = useLocation();
  const navigate = useNavigate();
  if (
    isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/signup")
    )
  ) {
    return <Navigate to='/user/login'></Navigate>
  }
  return <>{children}</>;
}

export default CheckAuth;
