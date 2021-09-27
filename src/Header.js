import React, { Component } from "react";
import { ReactDOM } from "react";
import "./App.css";

class Header extends Component {
  render() {
    return (
      <div>
        <header id="Header">
          <nav>
            <img class="logo" src="icons/Funcbox.png" />
            <a class="main" href="#">
              FuncBox
            </a>
          </nav>
          <nav>
            <ul class="nav__links">
              <li>
                <img class="icon" src="icons/home.png" />
                <br />
                <a href="#">Home</a>
              </li>
              <li>
                <img class="icon" src="icons/about.png" />
                <br />
                <a href="#">About</a>
              </li>
              <li>
                <img class="icon" src="icons/shop.png" />
                <br />
                <a href="#">Shop</a>
              </li>
              <li>
                <img class="icon" src="icons/login.png" />
                <br />
                <a href="#">Login/Sign Up</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
