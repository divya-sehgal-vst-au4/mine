import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import {getWaiters,sendWaiter} from '../ActionCreator/Action'

class Waiter extends Component {

  state={
    waiterID : ""
}

componentDidMount(){
    this.props.getWaiters()
}


render(){
return(
  <div>
  <div className="text-center m-4"><h2>Select Waiter</h2></div>
  <div className="row">
      {this.props.allWaiters.map((element,index)=>{
          return <div onClick={()=>this.setState({waiterID : element.id})} className="col d-flex" key={index}>
              <div className="p-5 m-5 bg-dark text-white">{element.waiterName} <br/> Age : {element.waiterAge} <br/> Mobile : {element.waiterMobile} <br/> Ratng: {element.waiterRating}/5 <br/> Experience: {element.waiterExperience}yrs </div>
          </div>
      })}
  </div>
  <Link to="/order" >
    <button className="btn btn-primary btn-lg" onClick={()=> this.props.sendWaiter(this.state.waiterID)} >NEXT</button>
  </Link>
  </div>

)
}
}

const mapStateToProps = state => {
  return {
      allWaiters : state.app.allWaiters
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({getWaiters,sendWaiter},dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
