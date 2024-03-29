import React from "react";
import { Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  const Component = props.component;
  const isAuthenticated = localStorage.getItem("Token");
  return isAuthenticated ? (
    <Component {...props} />
  ) : (
    <Redirect to={{ pathname: "/" }} />
  );
};

export default ProtectedRoute;
