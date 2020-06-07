import React, { Component } from 'react'

class Name extends Component {
    render() {
        return (
            <div className={this.props.className}>
                <input onChange={(event)=> this.props.enterName(event.target.value)} value={this.props.name} className="form-control mt-2" placeholder="Enter Name"></input>
                <input onChange={(event)=> this.props.enterEmail(event.target.value)} value={this.props.email} className="form-control mt-2" placeholder="Enter Email"></input>
            </div>
        )
    }
}

export default Name