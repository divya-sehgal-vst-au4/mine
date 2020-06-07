import { createStore } from 'redux'

let initialState = {
    cartItems: [],
    items: [
        {
            name: "iPhone",
            cost: 35000

        },
        {
            name: "Power Bank",
            cost: 3500

        },
        {
            name: "Speaker",
            cost: 2000

        },
        {
            name: "Samsung",
            cost: 25000

        },
        {
            name: "One Plus",
            cost: 35000

        },
        {
            name: "Charger",
            cost: 1200

        },
        {
            name: "Soap",
            cost: 25

        },
        {
            name: "Brush",
            cost: 100

        },
        {
            name: "Water",
            cost: 20

        },
        {
            name: "Oil",
            cost: 140

        }
    ]
}

let appReducer = (state = initialState, action = "hello") => {
    let stateCopy = JSON.parse(JSON.stringify(state))
    console.log(action, "action")
    switch (action.type) {
        case "add_to_cart":
            return addToCart(stateCopy, action.payload)
        case "remove_item":
            return removeFromCart(stateCopy, action.payload)
        case "checkout":
            return Checkout(stateCopy)
        default:
            return stateCopy
    }
}

appReducer(initialState)

let store = createStore(appReducer)
export default store


let addToCart = (state, item) => {
    state.cartItems.push(item)
    return state
}

let removeFromCart = (state, item) => {
    let cartList = state.cartItems.filter((elem, index) => index !== item)
    state.cartItems= cartList
    return state
}

let Checkout = (state) => {
    state.cartItems = []
    return state
    
  }
