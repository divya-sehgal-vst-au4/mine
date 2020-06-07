import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {sendName,sendMobile,sendPayment} from '../ActionCreator/Action'



class Input extends Component {


  render(){
    return(
        <div >
          <h3 className="text-center mb-4" >Customer Detail's</h3>
      <div className="form-group" >
          <input type="text" className="form-control" placeholder="Customer's Name" onChange={(elem)=> this.props.sendName(elem.target.value) } />
      </div>
      <div className="form-group" >
          <input type="number" className="form-control" placeholder="Customer's Mobile Number" onChange={(elem)=> this.props.sendMobile(elem.target.value) } />
      </div>
      <div>
          <strong> PAYMENT METHOD :</strong><br/>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="UPI" onChange={(elem)=> this.props.sendPayment(elem.target.value)}/>
                <label className="form-check-label" for="inlineRadio1">UPI</label>
           </div>
           <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Credit/Debit" onChange={(elem)=> this.props.sendPayment(elem.target.value)} />
                <label className="form-check-label" for="inlineRadio2">Credit/Debit</label>
           </div>
           <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="Card" onChange={(elem)=> this.props.sendPayment(elem.target.value)} />
                <label className="form-check-label" for="inlineRadio3">Card</label>
           </div>
            </div>
            <hr/>
        </div>
    )
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({sendName,sendMobile,sendPayment},dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Input);
