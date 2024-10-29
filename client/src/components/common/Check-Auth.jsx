import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function CheckAuth({ isAuthenticated, user, children }) {
  const location = useLocation();

  // Agar user authenticated nahi hai aur woh login ya signup page pe nahi hai
  if (
    !isAuthenticated &&
    !(
      location.pathname.includes("/login") ||
      location.pathname.includes("/signup")
    )
  ) {
    return <Navigate to="/user/login" />;
  }

  // Agar user authenticated hai aur login ya signup page pe hai
  if (
    isAuthenticated &&
    (location.pathname.includes("/login") ||
      location.pathname.includes("/signup"))
  ) {
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shopping/home" />;
    }
  }

  // Agar authenticated user admin nahi hai lekin admin page pe ja raha hai
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.includes("/admin")
  ) {
    return <Navigate to="/unAuth-page" />;
  }

  // Agar authenticated user admin hai lekin shop page pe ja raha hai
  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.includes("/shopping")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  // Agar sab theek hai toh children ko render karo
  return <>{children}</>;
}

export default CheckAuth;
