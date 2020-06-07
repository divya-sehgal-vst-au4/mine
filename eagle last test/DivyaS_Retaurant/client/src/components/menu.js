import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import '../App.css';

class Menu extends Component {



    handleItemCountChange(ele, index, event) {
        //console.log('in onchange')
        ele.item_qty = event.target.value
        //console.log(ele)
        let currentMenuData = this.props.menuData
        currentMenuData[index] = ele;
        this.props.dispatch({
            type: "menu", payload: currentMenuData
        })

    }


    componentDidMount() {


        axios.get("/menu/all")
            .then(res => {
                this.props.dispatch({ type: "menu", payload: res.data.message })

            })
    }

    handleAddToCart(item, index) {

        let currentOrder = this.props.order
        let order = currentOrder.find(order => order.id === item.id)

        if (order) {
            let itemIndex = currentOrder.indexOf(order)
            currentOrder[itemIndex] = item
        } else {
            currentOrder.push(item)
        }
        this.props.dispatch({ type: "add_to_cart", payload: currentOrder })

    }
    render() {
        return (
            <div>
                <div className="menuData">
                    <h4 style={{ "color": "blue", "margin-left": "20px", "margin-top": "5px" }}>Menu</h4>
                    <table>
                        <thead>
                            <th> Item</th>
                            <th> Price</th>
                            <th> Qty</th>
                            <th> Add to cart</th>
                        </thead>
                        <tbody>

                            {
                                this.props.menuData ? this.props.menuData.map((ele, index) => {
                                    return (

                                        <tr>
                                            <td>{ele.item_name}</td>
                                            <td>{ele.item_price}</td>
                                            <td><input type="number" min="0" onChange={(event) => this.handleItemCountChange(ele, index, event)}></input></td>
                                            <td><button className="btn btn-info" onClick={() => this.handleAddToCart(ele, index)} disabled={ele.item_qty === 0}>Add to Cart</button></td>
                                        </tr>
                                    )
                                }) : null

                            }
                        </tbody>
                    </table>
                </div>
            </div >

        )
    }
}

const mapStateToProps = (state) => {

    return {
        menuData: state.menuData,
        name: state.name,
        mobile: state.mobile,
        order: state.order,
        currentItems: state.currentItems
    }
}

export default connect(mapStateToProps)(Menu);