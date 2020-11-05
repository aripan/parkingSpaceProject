import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import CityScreen from "./screens/CityScreen";
// import Header from "./components/Header";
// import Signin from "./components/Signin";
import "./App.css";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

function App() {
  // const [path, setPath] = useState("/signin");

  // useEffect(()=>{
  //   setRoute("home")
  // },"signin")

  // const onRouteChange = () => {
  //   setPath("home");
  // };

  return (
    <div className="App">
      {/* {route === "signin" ? (
        <Signin onRouteChange={onRouteChange} />
      ) : (
        <Router>
          <Route exact path="/city/:id" component={CityScreen} />
          <Route
            exact
            path="/search/:keyword"
            component={() => {
              <HomeScreen onRouteChange={onRouteChange} />;
            }}
          />
          <Route exact path="/" component={HomeScreen} />
        </Router>
      )} */}

      <Router>
        {/* <Route exact path="/login" component={LoginScreen} />

        <Route exact path="/city/:id" component={CityScreen} />
        <Route exact path="/search/:keyword" component={HomeScreen} />
        <Route exact path="/" component={HomeScreen} /> */}

        <Route exact path="/register" component={RegisterScreen} />
        <Route exact path="/city/:id" component={CityScreen} />
        <Route exact path="/search/:keyword" component={HomeScreen} />
        <Route exact path="/cities" component={HomeScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route exact path="/" component={LoginScreen} />
      </Router>
    </div>
  );
}

export default App;
