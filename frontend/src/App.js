import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Particles from "react-particles-js";
import HomeScreen from "./screens/HomeScreen";
// import CityScreen from "./screens/CityScreen";
import UserScreen from "./screens/UserScreen";
import "./App.css";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const particleOptions = {
  particles: {
    number: {
      value: 80,
    },
    size: {
      value: 3,
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
    },
  },
};

function App() {
  return (
    <div className="App">
      <Particles className="particles" params={particleOptions} />
      <Router>
        <Route exact path="/register" component={RegisterScreen} />
        {/* <Route exact path="/city/:id" component={CityScreen} /> */}
        <Route exact path="/city/:id" component={UserScreen} />
        {/* <Route exact path="/search/:keyword" component={HomeScreen} /> */}
        <Route exact path="/parkinglots" component={HomeScreen} />
        <Route path="/login" component={LoginScreen} />
        {/* <Route exact path="/" component={LoginScreen} /> */}
        <Route exact path="/" component={HomeScreen} />
      </Router>
    </div>
  );
}

export default App;
