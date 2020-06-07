import React, { Component } from 'react'
import UserInput from './UserInput'
import UserList from './UserList'
import Cities from './Cities'

class App extends Component {
  state= {
    userList:[],
    cities:[]
  }

  userData= (user)=> {
    var city = this.state.cities.slice()
    if(!(city.includes(user.city))){
      city.push(user.city)
    }
    var newUserList = this.state.userList.slice()
    newUserList.push(user)
    this.setState({
      userList:newUserList,
      cities:city
    })

  }

  render() { console.log(this.state)
    return (
      <div className="container">
        <div className="row">
          <UserInput addData= {this.userData} />
        </div>
        <div className="row">
          <div>
            <UserList list={this.state.userList} />
          </div>
          <div>
            <Cities cityList={this.state.cities}/>
          </div>

        </div>
      </div>

    )
  }
}

export { App }