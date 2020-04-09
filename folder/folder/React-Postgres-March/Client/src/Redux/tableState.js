let tableState = {
 tables: [],
 selectedTable : ''
}

function tableReducer(state=tableState,action){
    let newState = {...state}
    switch (action.type){
        default:
            return newState
        case 'get_tables':
            newState.tables = action.payload
            return newState
        case 'select_table':
            newState.selectedTable = action.payload
            return newState
    }
}

export default tableReducer