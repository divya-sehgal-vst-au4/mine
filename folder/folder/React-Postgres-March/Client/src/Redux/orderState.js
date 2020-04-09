let orderState = {
    menu: [],
    cart: [],
    cartTotal: 0
}

function orderReducer(state = orderState, action) {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        default:
            return newState
        case 'get_menu':
            newState.menu = action.payload
            return newState
        case 'add_to_cart':
            let item = action.payload.item
            let quantity = action.payload.quantity
            newState.cartTotal += (item.itemPrice * Number(quantity))
            newState.cart = newState.cart.map(e=>{
                if(e.item.id === item.id){
                    e.quantity = Number(e.quantity) + Number(quantity)
                    e.item.itemPrice += (item.itemPrice * quantity)
                    item = false
                }
                return e
            })
            if(item){  
                item.itemPrice = item.itemPrice*quantity
                newState.cart.push({quantity, item})
            }
            
            return newState
        case 'delete_from_cart':
            newState.cartTotal -= newState.cart[action.payload].item.itemPrice
            newState.cart.splice(action.payload, 1)
            return newState
        case 'get_bill':
            newState.menu = []
            newState.cart = []
            newState.cartTotal = 0
            return newState

    }
}

export default orderReducer