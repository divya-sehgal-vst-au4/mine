import axios  from 'axios'

export const getTables = () => {
    let req = axios.get('http://localhost:3001/table')
    return dispatch => {
        req.then(res=>{
            dispatch({
                type:'get_tables',
                payload:res.data
            })
        })
    }
}

export const selectTable = (id) => {
    return {
        type: 'select_table',
        payload: id
    }
}

export const getWaiters = () => {
    let req = axios.get('http://localhost:3001/waiter')
    return dispatch => {
        req.then(res=>{
            dispatch({
                type:'get_waiters',
                payload:res.data
            })
        })
    }
}

export const setWaiter = (id) => {
    return {
        type: 'set_waiter',
        payload: id
    }
}

export const getMenu = () => {
    let req = axios.get('http://localhost:3001/menu')
    return dispatch => {
        req.then(res=>{
            dispatch({
                type:'get_menu',
                payload:res.data
            })
        })
    }
}

export const addToCart = (item, quantity) => {
    return {
        type: 'add_to_cart',
        payload: {
            item: item,
            quantity: quantity
        }
    }
}

export const deleteCart = (index) => {
    return {
        type: 'delete_from_cart',
        payload: index
    }
}

export const getBill = (order) => {
    let req = axios.post('http://localhost:3001/order', order)
    return dispatch => {
        req.then(res=>{
            dispatch({
                type: 'get_bill',
                payload: res.data
            })
        })
    }
}