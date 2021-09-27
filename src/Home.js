import React, { Component } from "react";
import { ReactDOM } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Info from "./Info";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Info />
        <Footer />
      </div>
    );
  }
}

export default App;
