import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Table from './components/table'
import Waiter from './components/waiter'
import 'bootstrap/dist/css/bootstrap.min.css';
import Wrapper from './components/wrapper';
import Home from './components/home'

function App() {
  return (
    <BrowserRouter>

      <div className="App">

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/table" component={Table}></Route>
          <Route exact path="/waiter" component={Waiter}></Route>
          <Route exact path="/order" component={Wrapper}></Route>
        </Switch>
      </div>
    </BrowserRouter >
  );
}

export default App;
