import React, { Component } from "react";
import { ReactDOM } from "react";
import "./App.css";

class Info extends Component {
  render() {
    return (
      <div>
        <div class="info">
          <a href="/shop">
            <button onClick="">
              <img src="icons/cart.png" />
              Go to Cart
            </button>
          </a>
          <br />
          <img src="icons/kids.png" />
          <div class="boximage">
            FuncBox is a box full of surprises which will teach you educational
            concepts and coding with a revolutionary twist.
            <br />
            <br />
            <span>></span> Perfect for age-group 6-12 years.
            <br />
            <span>></span> Build your own fun games.
            <br />
            <span>></span> Learn to code and explore.
            <br />
            <span>></span> Share your game with your friends.
            <br />
          </div>
        </div>
        <div class="banner-1">
          <div>
            <img src="icons/shipping.png" />
            <span>Free shipping</span>
          </div>
          <div>
            <img src="icons/new.png" />
            <span>No Experience Necessary</span>
          </div>
          <div>
            <img src="icons/cancel.png" />
            <span>Cancel anytime</span>
          </div>
        </div>
        <div class="info-2">
          <span>
            <p>Plans</p>
          </span>
          <div class="cards">
            <div class="red">
              <span>Basic</span>
              <ul>
                <li>FuncBox Binder</li>
                <li>3 mathematical apps</li>
                <li>3 scientific apps</li>
                <li>3 game apps</li>
                <li>Stickers</li>
                <li>Kickstart guide</li>
                <li>Interactive website</li>
              </ul>
            </div>
            <div class="yellow">
              <span>Premium</span>
              <ul>
                <li>FuncBox Binder</li>
                <li>8 mathematical apps</li>
                <li>8 scientific apps</li>
                <li>8 game apps</li>
                <li>2 Surprise goodies</li>
                <li>Mystery toy</li>
                <li>Stickers</li>
                <li>Mini fun deck</li>
                <li>Kickstart guide</li>
                <li>Interactive website</li>
              </ul>
            </div>
            <div class="green">
              <span>Standard</span>
              <ul>
                <li>FuncBox Binder</li>
                <li>5 mathematical apps</li>
                <li>5 scientific apps</li>
                <li>5 game apps</li>
                <li>Stickers</li>
                <li>Mini fun deck</li>
                <li>Kickstart guide</li>
                <li>Interactive website</li>
              </ul>
            </div>
          </div>
          <div class="background">
            <img class="alien" src="icons/alien.png" />
            <img class="birds" src="icons/birds.png" />
          </div>
        </div>
        <div class="banner-2">
          <div>
            <img src="icons/box2.png" />
            <span>
              Searching for a one-time gift or corporate?{" "}
              <a href="#">You're in luck »</a>
            </span>
          </div>
        </div>
        <div class="faq">
          <span>
            <p>Frequently Asked Questions</p>
          </span>
          <p>
            <b>What age is Funcbox for?</b>
            <br />
            Funcbox is designed for kids 6-12 years in age.
          </p>
          <p>
            <b>What age is Funcbox for?</b>
            <br />
            Funcbox is designed for kids 6-12 years in age.
          </p>
          <p>
            <b>What age is Funcbox for?</b>
            <br />
            Funcbox is designed for kids 6-12 years in age.
          </p>
          <p>
            <b>What age is Funcbox for?</b>
            <br />
            Funcbox is designed for kids 6-12 years in age.
          </p>
        </div>
        <div class="schools">
          <span>
            <p>For Schools</p>
          </span>
          <div>
            <img src=".//icons/school.png" />
            <p>
              Yay! FuncBox brings special discount for all the School Tie-ups.
              FuncBox can be easily incorporated in all the school grades. To
              make your students outperform and help your institute gain an edge
              over the others contact our team NOW!
              <br />
              <br />
              <a href="#">Know More</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
