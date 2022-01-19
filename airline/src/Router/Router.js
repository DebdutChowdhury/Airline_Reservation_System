import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Confirmation from "../components/Confirmation/Confirmation";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SignUpContainer from "../Pages/SignUpContainer/SignUpContainer";
import Navbar from "../components/Navbar/Navbar";
import Auth from "../AuthRoute";
import ProtectedRoute from "../ProtectedRoute";

const Router = () => {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Auth exact path="/" component={SignUpContainer} />
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/confirm" component={Confirmation} />
        </BrowserRouter>
      </div>
    </>
  );
};

export default Router;
