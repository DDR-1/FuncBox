import React, { Component } from "react";
import { ReactDOM } from "react";
import "./App.css";

class Footer extends Component {
  render() {
    return (
      <div>
        <div class="footer">
          <div class="box">
            <p>Get in Touch</p>
            <input type="text" />
          </div>
          <p class="footerinfo">
            Join Our Team
            <br />
            Privacy
            <br />
            Terms
            <br />
          </p>
          <div class="footerlinks">
            <p>Made with ❤️ by Team FuncBox</p>
            <div>
              <a href="#">{/* <FaBeer /> */}</a>
              <a href="#">{/* <FaBeer /> */}</a>
              <a href="#">{/* <FaBeer /> */}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
