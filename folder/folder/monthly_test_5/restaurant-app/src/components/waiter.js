import React, { Component } from "react";
import { connect } from "react-redux";
import { waiterFetch, getWaiterId } from "../action/action";
import { bindActionCreators } from "redux";

class Waiter extends Component {
  componentDidMount = () => {
    this.props.waiterFetch();
  };

  render() {
    console.log(this.props.waiterList);
    return (
      <div>
        <hr />
        <h2 className="tableHeading mt-5 mb-5">
          select<span className="RESTRO">_waiter</span>
        </h2>
        <div className="row tablelist">
          {this.props.waiterList.map((waiter, index) => {
            return (
              <div
                onClick={() => this.props.getWaiterId(waiter.id)}
                className="table col-md-3"
                key={index}
              >
                <a className="linkmodify" href="#nextmenu">
                  <ul className="listnone">
                    <li className="borderb mb-3">{waiter.name}</li>
                    {/* <li className="notshow">age : {waiter.age}</li> */}
                    {/* <li className="notshow">Mo. : {waiter.mobile}</li> */}
                    <li className="notshow">rating : {waiter.rating} </li>
                    <li className="notshow">
                      experience : {waiter.experience}
                    </li>
                  </ul>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    waiterList: state.waiterList
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ waiterFetch, getWaiterId }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Waiter);
