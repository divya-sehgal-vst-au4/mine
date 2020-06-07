import React, { Component } from 'react';
class MenuItem extends Component {
    state = {
        quantity : "",
        disabled: true
    }
    
    changeQ = (val) => {
        this.setState({
            quantity: val
        })
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(prevState.quantity != this.state.quantity){
            if(this.state.quantity > 0){
                this.setState({
                    disabled: false
                })
            }
            else{
                this.setState({
                    disabled: true
                })
            }
        }
    }

    render() {
        return (
            <tr>
                <td>{this.props.e.itemName}</td>
                <td><input type="text" className="w-100" value={this.state.quantity} onChange={(event)=>this.changeQ(event.target.value)}/></td>
                <td>{this.props.e.itemPrice}</td>
                <td><button className="btn btn-sm btn-success" onClick={() => this.props.addToCart(this.props.e, this.state.quantity)} disabled={this.state.disabled}>Add</button></td>
            </tr>
        );
    }
}

export default MenuItem;