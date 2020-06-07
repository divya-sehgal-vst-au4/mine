import { createStore } from 'redux'

// 1. Save all the channels at one place - Application State
let initialState = {
    order: [],
    currentItems: [],
    name: "",
    mobile: "",
    tableSelect: "",
    waiterSelect: "",

}

// 2. function - expose that function - to raise/trigger change requests - dispatch function - already present in redux
// dispatch(action)

// 3. function - make the necessary changes - reducer function

export function appRuducerFunction(state = initialState, action) {
    //console.log("redux state here", state)
    //console.log("redux action here", action)
    let stateCopy = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "Tables":
            stateCopy.tableData = action.payload
            return stateCopy;
        case "waiter":
            stateCopy.waiterData = action.payload
            return stateCopy
        case "menu":
            stateCopy.menuData = JSON.parse(JSON.stringify(action.payload))
            return stateCopy
        case "name":
            stateCopy.name = action.payload
            return stateCopy
        case "mobile":
            stateCopy.mobile = action.payload
            return stateCopy
        case "add_to_cart":
            stateCopy.order = JSON.parse(JSON.stringify(action.payload))
            return stateCopy
        case "count_items":
            stateCopy.currentItems = JSON.parse(JSON.stringify(action.payload))
            return stateCopy
        case "table_select":
            stateCopy.tableSelect = action.payload
            return stateCopy
        case "waiter_select":
            stateCopy.waiterSelect = action.payload
            return stateCopy
        case "clear":
            stateCopy.name = ""
            stateCopy.mobile = ""
            stateCopy.order = []
            stateCopy.currentItems = []
            stateCopy.tableSelect = ""
            stateCopy.waiterSelect = ""
            return stateCopy
        default:
            return state
    }

}

// 4. Create a package - (state, dispatch) - store - there should be a way to create this store - already present in redux
const store = createStore(appRuducerFunction)

export default store;