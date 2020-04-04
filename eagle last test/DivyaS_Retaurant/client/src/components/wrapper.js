import React, { Component } from 'react'
import '../App.css';
import Menu from './menu'
import Cart from './cart'
import UserDetails from './userDetail';



export default class Wrapper extends Component {

    render() {
        return (
            <div className="wrapper">
                <div className="user">
                    <UserDetails />

                    <Menu />
                </div>

                <Cart />
            </div>
        )
    }
}
