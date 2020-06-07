import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {addToCart} from '../ActionCreator/Action'



class MenuItem extends Component{
    state={
        counter:0,
        disabled:true
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.counter!== this.state.counter){
            if(this.state.counter>0){
                this.setState({
                    disabled:false
                })
            }
            else this.setState({
                disabled:true
            })
        }
    }

    

    increment = ()=>{
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        })); 
    }
    decrement = ()=>{
        if(this.state.counter!==0){
            this.setState((prevState) => ({
                counter: prevState.counter - 1
            })); 
        }
    }


    render() {
        let {element} = this.props
        return (
            
                 <tr >
                    <td><b> {element.cuisineName} </b></td>
                    <td> <b>₹ {element.itemPrice} </b></td>
                    <td> <div><i className="fa fa-minus-circle" aria-hidden="true" onClick={()=> this.decrement()} ></i><b> {this.state.counter} </b><i className="fa fa-plus-circle" aria-hidden="true" onClick={()=> this.increment()} ></i></div></td>
                    <td><button className="btn btn-sm btn-warning" disabled={this.state.disabled} onClick={()=>this.props.addToCart(element,this.state.counter)} >Add to Cart</button></td>
                </tr>
            
        )
    }
}


const mapStateToProps = state => {
    return {
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({addToCart},dispatch);
  };

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem)