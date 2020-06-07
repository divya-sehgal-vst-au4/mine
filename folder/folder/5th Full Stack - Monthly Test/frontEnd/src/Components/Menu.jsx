import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getMenus} from '../ActionCreator/Action'
import MenuItem from './MenuItem';


class Menu extends Component {

   
    componentDidMount(){
        this.props.getMenus()
    }

  render(){
    return(
      <div>
          <h3 className="text-center mt-4 mb-2" >Menu List</h3>
          <div className="shadow rounded">
              <div className="table-scroll">
                  <table className="table table-hover">
                      <thead className="bg-dark" style={{"color":"white"}} >
                          <tr>
                              <th>Item Name</th>
                              <th>Price (₹)</th>
                              <th>Qty</th>
                              <th>Action</th>
                          </tr>
                      </thead>
                      <tbody>
                          {this.props.allMenus.map((element,index)=>{return <MenuItem  element={element} key={index} /> })}
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
    )
  }
}


const mapStateToProps = state => {
    return {
        allMenus : state.app.allMenus
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({getMenus},dispatch);
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Menu);