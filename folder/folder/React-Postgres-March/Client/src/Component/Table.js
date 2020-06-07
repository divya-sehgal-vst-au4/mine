import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import {getTables, selectTable} from '../Action/action'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'

class Table extends Component {
    state = {
        selectedTable: '',
        disabled: true
    }
    setTable = (data) => {
        this.setState({
            selectedTable: data,
            disabled: false
        })
    }
    componentDidMount = () => {
        this.props.getTables();
    }
    render() {
        console.log(this.state)
        return (
            <div className="container text-center">
                <h1>Select Table</h1>
                <div className="row justify-content-center p-5">
                    {
                        this.props.tables.map((e,i)=>{
                        return <div onClick={()=>this.setTable(e.id)} className="col-2 p-5 m-1 bg-warning" key={i}>
                            <p>Table-{i+1}</p>
                            <p>Seats {e.seatingStrength}</p>
                            
                            </div>
                        })
                    }
                </div>
                <div className="">
                    <Link to ='/waiter'><button onClick={()=>this.props.selectTable(this.state.selectedTable)}  className="btn btn-outline-info float-right m-5" disabled={this.state.disabled}>Next </button>
                    </Link>
                    
                </div>
                
            </div>
        );
    }
}

const stateToProps = (state) => {
    return {
        tables: state.table.tables
    }

}

const changesToState = (dispatch) => {
 return bindActionCreators ({getTables, selectTable}, dispatch)
}

export default connect(stateToProps, changesToState)(Table);