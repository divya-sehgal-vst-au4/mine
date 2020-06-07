import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeftColumn extends Component {

    render() { console.log(this.props)
        return (
            <div className="tableScroll col-md-5 shadow offset-md-1">


                <table className="table table-hover">
                    <thead className="thead-dark">
                        <th>Name</th>
                        <th>Cost</th>
                        <th>Add to Cart</th>
                    </thead>
                    <tbody>
                        {this.props.list.map(item => {
                            return (
                                <tr>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.cost}
                                    </td>
                                    <td>
                                        <button onClick={() => this.props.dispatch({type:"add_to_cart",payload:item})} className="btn btn-info">Add to cart</button>
                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        )
    }
}

let getDataFromRedux = state => {
    return {
        list: state.items
    }
}

let sendDataToRedux = dispatch => {
    return{
        dispatch: dispatch
    }
}

export default connect(getDataFromRedux, sendDataToRedux)(LeftColumn)