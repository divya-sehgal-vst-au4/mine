import React, {Component} from 'react';
import Input from './Input'
import Menu from './Menu'
import Cart from './Cart'

class Order extends Component {
  render(){
    return(
      <div className="container mt-5">
      <div className="row">
        <div className="col-md-6" >
          <Input/>
          <Menu/>
        </div>
        <div className="col-md-6" >
          <Cart/>
        </div>
      </div>
      </div>
    )
  }
}

export default Order;
