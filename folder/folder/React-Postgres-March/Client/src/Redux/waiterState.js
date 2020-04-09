let waiterState = {
    waiters: [],
    selectedWaiter: ''
}

function waiterReducer(state=waiterState, action){
    let newState = {...state}
    switch (action.type){
        default:
            return newState
        case 'get_waiters':
            newState.waiters = action.payload
            return newState
        case 'set_waiter':
            newState.selectedWaiter = action.payload
            return newState
    }
}

export default waiterReducer