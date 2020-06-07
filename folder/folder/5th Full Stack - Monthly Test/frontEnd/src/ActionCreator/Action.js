import axios from 'axios'

export function getTables(){
   let tables = axios.get("http://localhost:3010/table");
   return (dispatch) => {
       tables
       .then(res => {
           dispatch({type: "getTables", payLoad : res.data})
       })
       .catch('error');
   }
}

export function sendTable(data){
    return{
        type: "sendTable",
        payLoad: data
    }
}

export function getWaiters(){
    let tables = axios.get("http://localhost:3010/waiter");
    return (dispatch) => {
        tables
        .then(res => {
            dispatch({type: "getWaiters", payLoad : res.data})
        })
        .catch('error');
    }
 }

 export function sendWaiter(data){
    return{
        type: "sendWaiter",
        payLoad: data
    }
}

export function getMenus(){
    let tables = axios.get("http://localhost:3010/menu");
    return (dispatch) => {
        tables
        .then(res => {
            dispatch({type: "getMenus", payLoad : res.data})
        })
        .catch('error');
    }
 }

 export function addToCart(data,qty){
     data.qty = qty
     return{
         type: "addToCart",
         payLoad: data
     }
 }

 export function removeFromCart(index){
     return{
         type: "removeFromCart",
         payLoad: index
     }
 }

 export function sendName(data){
    return{
        type: "sendName",
        payLoad: data
    }
}

export function sendMobile(data){
    return{
        type: "sendMobile",
        payLoad: data
    }
}

export function sendPayment(data){
    return{
        type: "sendPayment",
        payLoad: data
    }
}


export function generateBill(order){
    let request = axios.post("http://localhost:3010/order",order);
    return (dispatch) => {
        request
        .then(res => {console.log("Request", res.data)
            dispatch({type: "generateBill", payLoad : res.data})
        })
        .catch('error');
    }
 }
 