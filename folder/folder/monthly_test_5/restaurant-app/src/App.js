import React from "react";

import Table from "./components/table";
import Waiter from "./components/waiter";
import Order from "./components/order";

import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid App">
        <header className="hname  ">
          <h1 className="heading">
            <strong>
              uber<span className="RESTRO">_restro</span>
            </strong>
          </h1>
          <nav
            className="navbar navbar-expand-lg navbar-dark  "
            id="ftco_navbar"
          >
            <a href="#home" className="li">
              Home
            </a>
            <a href="#htable" className="li">
              Table
            </a>
            <a href="#hwaiter" className="li">
              Waiter
            </a>

            <a href="#hmenu" className="li">
              Menu
            </a>
            <a href="#habout" className="li">
              Order
            </a>
          </nav>
        </header>
        <br />
        <br />
        <div id="home" className="homepageImg">
          <div className="content">
            <p className="content-1">
              "Food is everything we are. It's an extension of nationalist
              feeling, ethnic feeling, your personal history, your province,
              your region, your tribe, your grandma. It's inseparable from those
              from the get-go."
            </p>
            <br />
            <br />
            <hr />
            <br />
            <br />
            <p className="content-1">
              "I am not a glutton - I am an explorer of food." "It's fun to get
              together and have something good to eat at least once a day.
              That's what human life is all about - enjoying things." "One
              cannot think well, love well, sleep well, if one has not dined
              well."
            </p>
          </div>
          <img className="img" src="home_page.jpg" alt="foodie" />
        </div>
        <br />
        <br />
        <div className="linklist"></div>
        <div className="routename">
          <div id="htable">
            <Table />
          </div>
          <br />
          <div id="hwaiter">
            <div id="next">
              <Waiter />
            </div>
          </div>
          <div id="hmenu"></div>
          <div id="nextmenu"></div>
          <Order />
        </div>
        <footer id="habout">
          Copyright ©2020 All rights reserved | @UBER
          <span className="footerp">_RESTRO</span>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
