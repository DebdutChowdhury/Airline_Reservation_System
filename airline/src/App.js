import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Confirmation from "./components/Confirmation/Confirmation";
import Dashboard from "./Pages/Dashboard/Dashboard";
import SignUpContainer from "./Pages/SignUpContainer/SignUpContainer";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <Route exact path="/" component={SignUpContainer} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/confirm" component={Confirmation} />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
