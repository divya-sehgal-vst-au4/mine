import React, { Component } from 'react'
import { connect } from 'react-redux'

class RightColumn extends Component {


    render() {
        return (
            <div className="col-md-5 shadow ml-3">
                <div className="tableScroll2">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <th>Name</th>
                            <th>Cost</th>
                            <th>Remove</th>
                        </thead>
                        <tbody>
                            {this.props.cart.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.cost}
                                        </td>
                                        <td>
                                            <button onClick={() => this.props.dispatch({type:"remove_item",payload:index})} className="btn btn-danger">Remove item</button>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
                <div className="row ml-4 mt-3">
                    <div className="col-md-8">
                        Total Cost: {this.props.cart.reduce((acc, curr) => acc + curr.cost, 0)}

                    </div>
                    <div>
                        <button onClick={()=>this.props.dispatch({type:"checkout"})} className="btn btn-primary">Checkout</button>
                    </div>
                </div>
            </div>
        )
    }
}

let getDataFromRedux = state => {
    return {
        cart: state.cartItems
    }
}

let sendDataToRedux = dispatch => {
    return{
        dispatch:dispatch
    }
}



export default connect(getDataFromRedux,sendDataToRedux)(RightColumn)