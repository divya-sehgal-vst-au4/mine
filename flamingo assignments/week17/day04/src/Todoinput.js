import React, { Component } from 'react';

class Todoinput extends Component {

    render() {
        return (
            <div>
                <input type="text" value={this.props.inputVal.title} onChange={(event)=>this.props.gettodo(event.target.value)} className="form-control mt-2" placeholder="Add To-do"></input>
                <input type="date" value={this.props.inputVal.deadline} onChange={(event)=>this.props.getdeadline(event.target.value)} className="form-control mt-2" placeholder="Deadline"></input>
            </div>
        )
    }
}

export default Todoinput;