import React, { Component } from "react";
import { connect } from "react-redux";
import { tableFetch, getTableId } from "../action/action";
import { bindActionCreators } from "redux";

class Table extends Component {
  componentDidMount = () => {
    this.props.tableFetch();
  };

  render() {
    console.log(this.props.tableList);
    return (
      <div>
        <hr />
        <h2 className="tableHeading mt-5 mb-5">
          BOOK<span className="RESTRO">_TABLE</span>
        </h2>
        <div className="row tablelist">
          {this.props.tableList.map((table, index) => {
            return (
              <div
                onClick={() => this.props.getTableId(table.id)}
                className="table col-md-3"
                key={index}
              >
                <a className="linkmodify" href="#next">
                  <ul className="listnone">
                    <li className="borderb mb-3">{table.name}</li>

                    <li className="notshow">strength : {table.strength}</li>
                    <li className="notshow">floor : {table.floor}</li>
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
    tableList: state.tableList
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ tableFetch, getTableId }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
