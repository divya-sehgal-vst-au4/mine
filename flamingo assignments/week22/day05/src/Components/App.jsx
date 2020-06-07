import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './Navbar';
import HomeCare from './HomeCare';
import Concierge from './Concierge';
import MedicalEquipment from './MedicalEquipment';
import Cart from './Cart';
import Home from './Home';
import './App.css';

function App() {
  const initialCart = [];

  const [cart, setCart] = useState(initialCart);

  const addToCart = (service) => {
    setCart([...cart, service]);
  };
  const checkoutCart = () => {
    setCart([]);
  };
  const deleteItem = (index) => {
    setCart(cart.filter((el, i) => i !== index));
  };

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <main>
          <Route path="/concierge" component={() => <Concierge addToCart={addToCart} />} />
          <Route path="/homecare" component={() => <HomeCare addToCart={addToCart} />} />
          <Route path="/equipment" component={() => <MedicalEquipment addToCart={addToCart} />} />
          <Route path="/" exact component={Home} />
          <Cart deleteItem={deleteItem} checkoutCart={checkoutCart} cart={cart} />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
