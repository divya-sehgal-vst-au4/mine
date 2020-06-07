import React, { Component } from 'react';

class CartList extends Component {
    render() {
        return (
            <div className="col-md-4 ml-3 shadow bg-dark">
                <div className="tableScroll2 mb-2">
                    <table className="table rounded bg-light">
                        <thead className="bg-dark text-white">
                            <th>Item</th>
                            <th>Cost</th>
                            <th className="text-center">Action</th>
                        </thead>
                        <tbody>
                            {this.props.cartListitems.map((elem, index) => {
                                return <tr key={index}>
                                    <td><small className="font-weight-bold text-secondary">{elem.itemName}</small></td>
                                    <td><small className="font-weight-bold text-secondary">&#8377; {elem.cost}</small></td>
                                    <td><button className="ml-5 btn btn-sm btn-danger" onClick={() => { this.props.deleteItem(index) }}><i class="fa fa-trash" aria-hidden="true"> Remove from cart</i></button></td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="row">
                    <div className="ml-3 font-weight-bold col-md-8 text-white">Total: &#8377; {this.props.cartListitems.reduce((acc, curr) => acc + curr.cost, 0)}</div>
                    <div className="col-md-2 ml-1"><button className="btn btn-warning btn-sm text-white" onClick={() => this.props.checkout()}>Checkout</button></div>
                </div>
            </div>
        )
    }
}

export default CartList;

