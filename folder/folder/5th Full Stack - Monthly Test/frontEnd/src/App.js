import React, {Component} from 'react';
import './App.css';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
import Table from './Components/Table'
import Waiter from './Components/Waiter'
import Order from './Components/Order'


class App extends Component {
  render(){
    return(
      <BrowserRouter>
      <Switch>
            <Route path="/" exact><Redirect to="/table"/></Route>
            <Route path="/table" exact component={Table} />
            <Route path="/waiter" exact component={Waiter} />
            <Route path="/order" exact component={Order} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
