import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import CityScreen from "./screens/CityScreen";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/city/:id" component={CityScreen} />
        <Route exact path="/search/:keyword" component={HomeScreen} />
        <Route exact path="/" component={HomeScreen} />
      </Router>
    </div>
  );
}

export default App;
