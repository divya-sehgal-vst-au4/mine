import React, { Component } from 'react';

class ItemList extends Component {

    render() {
        return (
            <div className="col-md-4 offset-md-2 tableScroll shadow bg-dark">
                <table className="table bg-light rounded">
                    <thead className="bg-dark text-white">
                        <th className="bg-dark">Item</th>
                        <th className="bg-dark">Cost</th>
                        <th className="text-center bg-dark">Buy</th>
                    </thead>
                    <tbody>
                        {this.props.items.map((elem, index) => {
                            return <tr key={index}>
                                <td><small className="font-weight-bold text-secondary">{elem.itemName}</small></td>
                                <td><small className="font-weight-bold text-secondary">&#8377; {elem.cost}</small></td>
                                <td><button className="ml-4 btn btn-sm btn-primary text-white" onClick={() => { this.props.addToCart(elem) }}><i class="fa fa-cart-plus" aria-hidden="true"> Add to cart</i></button></td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ItemList;