import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {removeFromCart,generateBill} from '../ActionCreator/Action'



class Cart extends Component {



  render(){

    const {userName,userMobile,paymentMode,waiterID,tableID}= this.props

    let total = 0
     this.props.cartItems.forEach(e => {
       total= total + (e.itemPrice*e.qty)
     });

     let order = {
      userName,userMobile,paymentMode,waiterID,tableID,totalPrice:total
    }

    return(
      <div>
        <div className="shadow rounded">
            <div className="table-scroll">
                <table className="table table-hover">
                    <thead className="bg-dark" style={{"color":"white"}} >
                        <tr>
                            <th>Item Name</th>
                            <th>Price (₹)</th>
                            <th>Qty</th>
                            <th>Total Price (₹)</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cartItems.map((element,index)=>{return <tr key={index} >
                              <td><b> {element.cuisineName} </b></td>
                              <td><b>₹ {element.itemPrice} </b></td>
                              <td><b> {element.qty} </b></td>
                              <td><b>₹ {element.itemPrice * element.qty} </b></td>
                              <td><button className="btn btn-sm btn-danger" onClick={()=> this.props.removeFromCart(index)} >Remove from Cart</button></td>
                          </tr>})}
                    </tbody>
                </table>
                 <div className="p-5" ><b> Total Price: ₹  {total} </b> <button className="btn btn-lg btn-success float-right" onClick={()=> this.props.generateBill(order)} >Generate Bill </button> </div> 
            </div>
        </div>

      </div>
    )
  }
}


const mapStateToProps = state => {
  const {cartItems,userName,userMobile,paymentMode,waiterID,tableID}= state.app
  return {
   cartItems,userName,userMobile,paymentMode,waiterID,tableID
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({removeFromCart,generateBill},dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Cart);
