import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

let initialState = {
  tableList: [],
  waiterList: [],
  menuList: [],
  orderList: [],
  addToCarts: [],
  tableId: "",
  waiterId: "",
  user_name: "",
  user_mobile: "",
  total_Price: 0,
  isPayment: false,
  payment_mode: "cash"
};

function appReducer(state = initialState, action) {
  let stateCopy = { ...state };
  switch (action.type) {
    case "get_table":
      stateCopy.tableList = [...stateCopy.tableList, ...action.payload];
      console.log(stateCopy);
      return stateCopy;
    case "get_waiter":
      stateCopy.waiterList = [...stateCopy.waiterList, ...action.payload];
      console.log(stateCopy);
      return stateCopy;
    case "get_order":
      stateCopy.orderList = [...stateCopy.orderList, ...action.payload];
      console.log(stateCopy);
      return stateCopy;
    case "get_menu":
      stateCopy.menuList = [...stateCopy.menuList, ...action.payload];
      console.log(stateCopy);
      return stateCopy;
    case "add_to_carts":
      stateCopy.addToCarts = [...stateCopy.addToCarts, action.payload];
      stateCopy.total_price = stateCopy.addToCarts.reduce((acc, b) => {
        return acc + b.price;
      }, 0);
      stateCopy.isPayment = true;
      console.log(stateCopy);
      return stateCopy;
    case "get_table_id":
      stateCopy.tableId = action.payload;
      return stateCopy;
    case "get_waiter_id":
      stateCopy.waiterId = action.payload;
      console.log(stateCopy);
      return stateCopy;
    case "get_name":
      stateCopy.user_name = action.payload;
      return stateCopy;
    case "get_mobile":
      stateCopy.user_mobile = action.payload;
      return stateCopy;
    case "get_payment_mode":
      stateCopy.payment_mode = action.payload;
      return stateCopy;
    case "post":
      stateCopy.user_name = "";
      stateCopy.user_mobile = "";
      stateCopy.addToCarts = [];
      return stateCopy;
    default:
      return stateCopy;
  }
}

const store = createStore(appReducer, applyMiddleware(thunk));

export default store;
