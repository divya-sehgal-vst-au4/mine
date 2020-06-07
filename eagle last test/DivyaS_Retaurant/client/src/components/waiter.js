import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import '../App.css';

class Waiter extends Component {
    componentDidMount() {
        axios.get("/waiter/all")
            .then(res => this.props.dispatch({
                type: "waiter", payload: res.data.message.map(e => {
                    e.selected = false;
                    return e;
                })
            }))
    }

    handleWaiterSelect = (ele) => {
        this.props.waiterData.map(e => {
            e.selected = false;
            return e
        })
        ele.selected = true
        this.props.dispatch({ type: "waiter_select", payload: ele })

    }

    render() {
        return (
            <div >
                <h3 style={{ "color": "blue", "margin-left": "20px" }} >Select Your Waiter</h3>
                <div className="table">

                    {
                        this.props.waiterData ? this.props.waiterData.map((ele, index) => {

                            let backgoundCss = ele.selected ? 'btn btn-success' : 'btn btn-info';
                            return (

                                <div className="subWaiter" style={{ "width": "18rem", "height": "15rem" }} >

                                    <h5 className="badge badge-primary">{ele.waiter_name}</h5>
                                    <p style={{ "float": "right", "margin-right": "7px" }} className="badge badge-secondary" >Age:{ele.waiter_age}</p>
                                    <p style={{ "margin-left": "10px" }} className="badge badge-warning"> Mobile Number:{ele.waiter_mobile}</p>
                                    < p className="badge badge-dark"> Experience:{ele.waiter_experience}</p>
                                    <p style={{ "margin-top": "170px" }} className="badge badge-pill badge-success" > Ratings: {ele.waiter_ratings}</p>
                                    <button style={{ "float": "right", "margin-top": "55%" }} onClick={() => this.handleWaiterSelect(ele)} className={backgoundCss}>Select</button>


                                </div>
                            )
                        }) : null
                    }

                </div>
                <div>
                    <Link to='/order'><button className="btn btn-info" style={{ "float": "right", "margin-right": "20px" }} disabled={this.props.waiterSelect === ""}>Next</button></Link>
                </div>
            </div >


        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state, "in table")
    return {
        waiterData: state.waiterData,
        waiterSelect: state.waiterSelect
    }
}

export default connect(mapStateToProps)(Waiter);