import {combineReducers} from 'redux'
import tableReducer from './tableState'
import waiterReducer from './waiterState'
import orderReducer from './orderState'

const rootReducer = combineReducers({
    table: tableReducer,
    waiter: waiterReducer,
    order: orderReducer

})

export default rootReducer