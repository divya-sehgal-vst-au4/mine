
let initialState = {
    allTables: [],
    allWaiters:[],
    allMenus:[],
    tableID: 0,
    waiterID: 0,
    cartItems:[],
    totalPrice:0,
    userName:"",
    userMobile:0,
    paymentMode:""
  };
  

export  let appReducer = (state = initialState, action)=>{
      let stateCopy = JSON.parse(JSON.stringify(state))
      switch(action.type){

        case "getTables":
          stateCopy.allTables = action.payLoad
          return stateCopy

        case "sendTable":
            stateCopy.tableID = action.payLoad
            return stateCopy

        case "getWaiters":
          stateCopy.allWaiters = action.payLoad
          return stateCopy

        case "sendWaiter":
            stateCopy.waiterID = action.payLoad
            return stateCopy
        
        case "getMenus":
            stateCopy.allMenus = action.payLoad
            return stateCopy

        case "addToCart":
          let flag = true
          let cartItems = stateCopy.cartItems
          cartItems = cartItems.map((elem)=>{
            if(elem.id === action.payLoad.id){
              elem.qty = action.payLoad.qty
              flag = false
            }

            return elem
          })
          if(flag){
            cartItems.push(action.payLoad)
          }
            stateCopy.cartItems = cartItems
            return stateCopy

            case "removeFromCart":
              stateCopy.cartItems.splice(action.payLoad,1)
              return stateCopy

              case "sendName":
                stateCopy.userName = action.payLoad
                return stateCopy

                case "sendMobile":
                stateCopy.userMobile = action.payLoad
                return stateCopy

                case "sendPayment":
                stateCopy.paymentMode = action.payLoad
                return stateCopy
        default:
            return stateCopy
      }
  }


