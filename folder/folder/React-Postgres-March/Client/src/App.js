import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Component/Table'
import Waiter from './Component/Waiter'
import Order from './Component/Order'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Route path="/*" exact><Redirect to="/table"/></Route>
      <Route path="/table" component={Table} exact/>
      <Route path="/waiter" component={Waiter} exact/>
      <Route path="/order" component={Order} exact/>
      </BrowserRouter>
    );
  }
}

export default App;

