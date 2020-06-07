import axios from "axios";

export function tableFetch() {
  return function(dispatch) {
    return axios.get("http://localhost:3005/table/all").then(({ data }) => {
      dispatch(setTable(data));
    });
  };
}

function setTable(data) {
  return {
    type: "get_table",
    payload: data
  };
}

export function waiterFetch() {
  return function(dispatch) {
    return axios.get("http://localhost:3005/waiter/all").then(({ data }) => {
      dispatch(setWaiter(data));
    });
  };
}

function setWaiter(data) {
  return {
    type: "get_waiter",
    payload: data
  };
}

export function orderFetch() {
  return function(dispatch) {
    return axios.get("http://localhost:3005/order/all").then(({ data }) => {
      dispatch(setOrder(data));
    });
  };
}

function setOrder(data) {
  return {
    type: "get_order",
    payload: data
  };
}

export function fetchMenus() {
  return function(dispatch) {
    return axios.get("http://localhost:3005/menu/all").then(({ data }) => {
      dispatch(setMenu(data));
    });
  };
}

function setMenu(data) {
  return {
    type: "get_menu",
    payload: data
  };
}

export function getTableId(id) {
  return {
    type: "get_table_id",
    payload: id
  };
}

export function getWaiterId(id) {
  return {
    type: "get_waiter_id",
    payload: id
  };
}

export function handleName(val) {
  return {
    type: "get_name",
    payload: val
  };
}

export function handleMobile(val) {
  return {
    type: "get_mobile",
    payload: val
  };
}

export function handlePayment(val) {
  return {
    type: "get_payment_mode",
    payload: val
  };
}

export function addToCart(menu) {
  return {
    type: "add_to_carts",
    payload: {
      name: menu.name,
      cuisine: menu.cuisine,
      foodtype: menu.foodtype,
      price: menu.price
    }
  };
}

export function postOrder(order) {
  let request = axios({
    method: "POST",
    url: "http://localhost:3005/order/add",
    data: order
  });
  return dispatch => {
    request.then(res => {
      console.log(res);
      return dispatch({
        type: "post",
        payload: res.data.data
      });
    });
  };
}
