import React, { Component } from 'react'
import '../App.css';
import { connect } from 'react-redux'




class UserDetails extends Component {

    handleNameChange = (event) => {
        this.props.dispatch({ type: "name", payload: event.target.value })
    }
    handleMobileChange = (event) => {
        this.props.dispatch({ type: "mobile", payload: event.target.value })
    }
    render() {
        return (
            <div>
                <div className="Input">
                    <div>Customer Name:<input type="text" placeholder="Enter your Name" value={this.props.name} onChange={(event) => this.handleNameChange(event)} required></input></div>
                    <div>Customer Mobile:<input type="number" placeholder="Enter Mobile Number" value={this.props.mobile} onChange={(event) => this.handleMobileChange(event)}></input></div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {

    return {
        name: state.name,
        mobile: state.mobile

    }
}

export default connect(mapStateToProps)(UserDetails);

