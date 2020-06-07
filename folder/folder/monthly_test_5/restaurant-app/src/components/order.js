import React, { Component } from "react";
import { connect } from "react-redux";
import {
  orderFetch,
  fetchMenus,
  addToCart,
  handleName,
  handleMobile,
  handlePayment,
  postOrder
} from "../action/action";
import { bindActionCreators } from "redux";

class Order extends Component {
  componentDidMount = () => {
    this.props.orderFetch();
    this.props.fetchMenus();
  };

  handleSubmit(e) {
    e.preventDefault();
    const {
      user_name,
      user_mobile,
      tableId,
      waiterId,
      total_price,
      payment_mode
    } = this.props;
    console.log("generatebill :", this.props);
    const order = {
      user_name,
      user_mobile,
      tableId,
      waiterId,
      total_price,
      payment_mode
    };
    this.props.postOrder(order);
  }

  render() {
    console.log(this.props.orderList);

    return (
      <div className="container">
        <hr />
        <h2 className="tableHeading mt-5 mb-5">
          order<span className="RESTRO">_info</span>
        </h2>
        <form onSubmit={e => this.handleSubmit(e)} className="   shadow">
          <div className="row  ">
            <div className="col-md-6 border shade   ">
              <h2 className="tableHeading mt-2 mb-2">
                user<span className="RESTRO">_info</span>
              </h2>
              <hr />
              <input
                type="text"
                value={this.props.user_name}
                onChange={e => this.props.handleName(e.target.value)}
                className="form-control ml-2"
                placeholder="Enter UserName"
                required
              />
              <br />
              <input
                type="number"
                value={this.props.user_mobile}
                onChange={e => this.props.handleMobile(e.target.value)}
                className="form-control ml-2"
                placeholder="Enter Mobile Number"
                required
              />
              <h2 className="tableHeading mt-2 mb-2">
                our<span className="RESTRO">_menu</span>
              </h2>
              <hr className="mb-5" />
              <ul>
                {this.props.menuList.map((menu, index) => {
                  return (
                    <div key={index} className="menulistnone">
                      <li onClick={() => this.props.addToCart(menu)}>
                        {menu.name}____{menu.cuisine}____{menu.foodtype}____
                        {menu.price}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="col-md-6 border shade   shadow">
              <h2 className="tableHeading mt-2 mb-2">
                cart<span className="RESTRO">_item</span>
              </h2>
              <hr />
              <ul className="flow">
                {this.props.addToCarts.map((item, index) => {
                  return (
                    <div key={index} className="menulistnone">
                      <li>
                        {item.name}
                        <span className="notshow">_______</span>
                        {item.food_type}
                        {item.price}
                      </li>
                    </div>
                  );
                })}
              </ul>
              <div className="bill">
                Restaurant_Bill :
                <span className="price"> {this.props.total_price}</span>
              </div>
              {this.props.isPayment && (
                <select
                  className="btn btn-block mt-3 payment"
                  onChange={e => this.props.handlePayment(e.target.value)}
                >
                  <option className="pay" value="cc">
                    Credit Card
                  </option>
                  <option className="pay" value="dc">
                    Debit Card
                  </option>
                  <option className="pay" value="cash">
                    Cash
                  </option>
                  <option className="pay" value="online">
                    Online{" "}
                  </option>
                </select>
              )}
              <br />
              <button className=" btn btn-success btn-block ">
                Generate Bill
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orderList: state.orderList,
    menuList: state.menuList,
    addToCarts: state.addToCarts,
    total_price: state.total_price,
    user_name: state.user_name,
    user_mobile: state.user_mobile,
    tableId: state.tableId,
    waiterId: state.waiterId,
    isPayment: state.isPayment,
    payment_mode: state.payment_mode
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      orderFetch,
      fetchMenus,
      addToCart,
      handleName,
      handleMobile,
      handlePayment,
      postOrder
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
