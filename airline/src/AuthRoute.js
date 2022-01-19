import React from "react";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = (props) => {
  console.log(props);
  const Component = props.component;
  const isAuthRoute = localStorage.getItem("Token");
  console.log(isAuthRoute);

  return (
    <Route
      render={(props) =>
        isAuthRoute ? <Redirect to={"/dashboard"} /> : <Component {...props} />
      }
    />
  );
};

export default AuthRoute;
