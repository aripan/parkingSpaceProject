import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import ParkingLotScreen from "./components/ParkingLotScreen/ParkingLotScreen";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/data" component={ParkingLotScreen} />
        <Route exact path="/search/:keyword" component={HomeScreen} />
        <Route exact path="/" component={HomeScreen} />
      </Router>
    </div>
  );
}

export default App;
