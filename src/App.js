import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.js";
import Footer from "./components/pages/Footer/Footer";
import Home from "./components/pages/HomePage/Home";
import About from "./components/pages/About/About";
import Services from "./components/pages/Services/Services";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/services' component={Services}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
