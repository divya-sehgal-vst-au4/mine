import React, { Component } from 'react';

class TodolistComp extends Component {

    state = {
        dropdown: "all"
    }


    render() {
        return (
            <div className="p-4">
                <div>
                    <div class="dropdown">
                        <button type="button" className="btn text-secondary pr-4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-chevron-down"></i>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#" onClick={() => this.setState({ dropdown: "all" })}>All</a>
                            <a class="dropdown-item" href="#" onClick={() => this.setState({ dropdown: "completed" })}>Completed</a>
                            <a class="dropdown-item" href="#" onClick={() => this.setState({ dropdown: "active" })}>Active</a>
                        </div>
                    </div>
                </div>

                <ul>
                    {this.props.todoEntries.filter((todo, index) => {
                        console.log(todo)
                        if (this.state.dropdown === "all") {
                            return true
                        }
                        if (this.state.dropdown === "completed") {
                            return todo.isCompleted
                        }
                        if (this.state.dropdown === "active") {
                            return !todo.isCompleted
                        }
                    })
                        .map((elem, index) => {
                            return <li className={"text-secondary w3-animate-zoom alert list-unstyled " + (elem.isCompleted? "alert-success": "alert-danger")} key={index}><small className="ml-5">{elem.title}  {elem.deadline} </small>
                                <button className="btn  m-1 ml-5 pt-1 px-2 " onClick={()=>this.props.setEditIndex(elem)}><i class="fa fa-pencil-square-o"></i></button> <i class="fa fa-check-circle-o ml-5"  aria-hidden="true" onClick={()=>this.props.completed(elem)}></i> 
                            <i class="fa fa-trash ml-5" onClick={() => { this.props.deleteItem(elem) }} aria-hidden="true"></i>
                            </li>
                        })}
                </ul>
            </div>
        )
    }
}

export default TodolistComp;