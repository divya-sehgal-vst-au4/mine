import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import {getTables,sendTable} from '../ActionCreator/Action'


class Table extends Component {

    state={
        tableID : ""
    }

    componentDidMount(){
        this.props.getTables()
    }


    render(){
    return(
        <div >
        <div className="text-center m-4"><h2>Select Table</h2></div>
        <div className="row">
            {this.props.allTables.map((element,index)=>{
                return <div onClick={()=>this.setState({tableID : element.id})} className="col d-flex" key={index}>
                    <div className="p-5 m-5 bg-dark text-white">{element.tableName} <br/> Table Strength : {element.seatingStrength} <br/> Floor Number : {element.floorNumber} </div>
                </div>
            })}
        </div>
        <Link to="/waiter" >
          <button className="btn btn-primary btn-lg" onClick={()=> this.props.sendTable(this.state.tableID)} >NEXT</button>
        </Link>
        </div>
      
    )
  }
}

const mapStateToProps = state => {
    return {
        allTables : state.app.allTables
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({getTables,sendTable},dispatch);
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Table);
  