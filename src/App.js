import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Website/components/Navbar.js";
import Footer from "./Website/components/pages/Footer/Footer";
import Home from "./Website/components/pages/HomePage/Home";
import About from "./Website/components/pages/About/About";
import Services from "./Website/components/pages/Services/Services";
import Contact from "./Website/components/pages/Contact/Contact";



function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/services' component={Services}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
