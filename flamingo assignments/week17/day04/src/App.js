import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Router } from 'react-router-dom'

class App extends Component {
  render() {
    return (


      <BrowserRouter>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/"><a class="navbar-brand" href="#">Home</a></Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link to="/users"><a class="nav-link" href="#">Users</a></Link>
              </li>
              <li class="nav-item">
                <Link to="/products"><a class="nav-link" href="#">Products</a></Link>
              </li>
              <li class="nav-item">
                <Link to="/orders"><a class="nav-link" href="#">Orders</a></Link>
              </li>

            </ul>
          </div>
        </nav>

        <Route path="/">
          <div className="container">
            <h2 className="text-center">Welcome to Home</h2>
          </div>
        </Route>
        <Route path="/users">
          <div className="container">
            <h2 className="text-center">Welcome to Users</h2>
            <ul>
              <Link to="/users/kshitij">
                <li>Kshitij</li>
              </Link>
              <Link to="/users/abdullah">
                <li>Abdullah</li>
              </Link>
              <Link to="/users/chetu">
                <li>Chetu</li>
              </Link>
              <Link to="/users/pranav">
                <li>Pranav</li>
              </Link>
            </ul>
            <div>
              <Route path="/users/kshitij">
                <div>
                  Route for Kshitij
              </div>
              </Route>
              <Route path="/users/abdullah">
                <div>
                  Route for Abdullah
              </div>
              </Route>
              <Route path="/users/chetu">
                <div>
                  Route for Chetu
              </div>
              </Route>
              <Route path="/users/pranav">
                <div>
                  Route for Pranav
              </div>
              </Route>
            </div>
          </div>

        </Route>

        <Route path="/products">
          <div className="container">
            <h2 className="text-center">Welcome to Products</h2>
            <ul>
              <Link to="/products/iphone">
                <li>iPhone</li>
              </Link>
              <Link to="/products/samsung">
                <li>Samsung</li>
              </Link>
              <Link to="/products/oneplus">
                <li>One Plus</li>
              </Link>
              <Link to="/products/mi">
                <li>MI</li>
              </Link>
            </ul>
            <div>
              <Route path="/products/iphone">
                <div>
                  Route for iPhone
              </div>
              </Route>
              <Route path="/products/samsung">
                <div>
                  Route for Samsung
              </div>
              </Route>
              <Route path="/products/oneplus">
                <div>
                  Route for One Plus
              </div>
              </Route>
              <Route path="/products/mi">
                <div>
                  Route for MI
              </div>
              </Route>
            </div>
          </div>

        </Route>

        <Route path="/orders">
          <div className="container">
            <h2 className="text-center">Welcome to Orders</h2>
            <ul>
              <Link to="/orders/samsung">
                <li>Samsung</li>
              </Link>
              <Link to="/orders/oppo">
                <li>Oppo</li>
              </Link>
              <Link to="/orders/vivo">
                <li>Vivo</li>
              </Link>
              <Link to="/orders/asus">
                <li>Asus</li>
              </Link>
            </ul>
            <div>
              <Route path="/orders/samsung">
                <div>
                  Route for Samsung
              </div>
              </Route>
              <Route path="/orders/oppo">
                <div>
                  Route for Oppo
              </div>
              </Route>
              <Route path="/orders/vivo">
                <div>
                  Route for Vivo
              </div>
              </Route>
              <Route path="/orders/asus">
                <div>
                  Route for Asus
              </div>
              </Route>
            </div>
          </div>

        </Route>

      </BrowserRouter>
    )
  }

}

export default App;
