import React, { Component } from 'react';
import ItemList from './ItemsList'
import CartList from './Cart'
import './App.css'



class App extends Component {

  state = {
    cartList: [],
    items: [{
      itemName: 'Apple AirPods 2',
      cost: 4000,
    },
    {
      itemName: 'iphone 11',
      cost: 50000,
    },
    {
      itemName: 'iphone 11Pro',
      cost: 70000,
    },
    {
      itemName: 'MacBook Air',
      cost: 45000,
    },
    {
      itemName: 'MacBook Pro 15 Retina',
      cost: 170000,
    },
    {
      itemName: 'Apple Magic Mouse',
      cost: 7000,
    },
    {
      itemName: 'Apple iMac Pro',
      cost: 130000,
    },
    {
      itemName: 'iPad Pro',
      cost: 70000,
    },
    {
      itemName: 'iPad Mini',
      cost: 40000,
    },
    {
      itemName: 'Apple Watch',
      cost: 11000,
    }],
  }



  checkout(){
      this.setState({
        cartList: []
      })
  }

  addtocart(data) {
    let newcartList = this.state.cartList.slice()
    newcartList.push(data)
    this.setState({
      cartList: newcartList,
    })
  }

  deleteItem(index) {
    this.setState({ cartList: this.state.cartList.filter((el, i) => i !== index) })
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-dark"><span className="navbar-brand font-weight-light text-white">Welcome to Apple World!</span></nav>
        <div className="jumbotron text-center text-secondary font-weight-bold"><h2>Shopping App.</h2></div>
        <div className="row">
          <ItemList items={this.state.items} addToCart={(data) => this.addtocart(data)} />
          <CartList cartListitems={this.state.cartList} checkout={()=>this.checkout()} deleteItem={(data) => this.deleteItem(data)} />
        </div>
      </div>
    )
  }
}

export default App;
