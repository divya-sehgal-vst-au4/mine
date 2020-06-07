import React, { Component } from 'react';

import './App.css'
import RightColumn from './RightColumn'
import LeftColumn from './LeftColumn'

class App extends Component {
  
  


  render() {
    return (
      <div className="container">
        <header>
          <h2 className="text-center mt-2 shadow p-2">Shopping Cart</h2>
        </header>
        <div className="row mt-5">

          <LeftColumn />


          <RightColumn  />

        </div>

      </div>
    )
  }

}

export default App;
