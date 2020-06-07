import React, { Component } from 'react'
import City from './City'
import Name from './Name'

class UserInput extends Component {
    state = {
        name: "",
        email: "",
        city: ""
    }

    enterName = (name) => {
        this.setState({ name })
    }
    enterEmail = (email) => {
        this.setState({ email })
    }
    enterCity = (city) => {
        this.setState({ city })
    }
    clicked(user) {
        this.props.addData(user)
        this.setState({name: "",
        email: "",
        city: ""})
    }

    render() {
        return (
            <div className="container">
                <Name enterName={this.enterName} enterEmail={this.enterEmail} name={this.state.name} email={this.state.email} className="mt-2" />
                <City enterCity={this.enterCity} city={this.state.city} />
                <button onClick={() => this.clicked(this.state)} className="btn btn-success mt-2">Send Details</button>
            </div>
        )
    }
}

export default UserInput