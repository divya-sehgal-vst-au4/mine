import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import '../App.css';

class Table extends Component {

    handleTableSelect(ele) {
        this.props.tableData.map(e => {
            e.selected = false;
            return e
        })
        ele.selected = true
        this.props.dispatch({ type: "table_select", payload: ele })

    }
    componentDidMount() {
        axios.get("/table/all")
            .then(res => this.props.dispatch({
                type: "Tables", payload: res.data.message.map(e => {
                    e.selected = false;
                    return e;
                })
            }))
    }
    render() {

        return (
            <div >
                <h3 style={{ "color": "blue", "margin-left": "20px" }}>Select Your Table</h3>
                <div className="table">
                    {
                        this.props.tableData ? this.props.tableData.map((ele, index) => {

                            let backgoundCss = ele.selected ? 'btn btn-success' : 'btn btn-info';


                            return (

                                <div className="subTable" style={{ "width": "18rem", "height": "15rem" }} >

                                    <h5 className="badge badge-primary" style={{ "margin-left": "7px" }}>{ele.table_name}</h5>
                                    <p style={{ "float": "right", "margin-right": "7px" }} className="badge badge-secondary">{ele.seating_strength} People</p><br />
                                    <p style={{ "margin-top": "60%", "margin-left": "10px" }} className="badge badge-warning">Floor Number:{ele.floor_number}</p>
                                    <button style={{ "float": "right", "margin-top": "55%" }} onClick={() => this.handleTableSelect(ele)} className={backgoundCss}>Select</button>


                                </div>
                            )
                        }) : null
                    }

                </div>
                <div>
                    <Link to='/waiter'><button className="btn btn-info" style={{ "float": "right", "margin-right": "20px" }} disabled={this.props.tableSelect == ""}>Next</button></Link>
                </div>
            </div>

        )
    }

}
const mapStateToProps = (state) => {
    //console.log(state, "in table")
    return {
        tableData: state.tableData,
        tableSelect: state.tableSelect
    }
}

export default connect(mapStateToProps)(Table);