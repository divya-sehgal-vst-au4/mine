import React, { Component } from 'react'


class UserList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.list.map(item => {
                        return (
                            <li>{item.name},{item.email},{item.city}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default UserList
