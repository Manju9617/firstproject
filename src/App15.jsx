
import React, { Component } from 'react'
import JSON from "./users.json"
import Users from "./Users.jsx";


class App15 extends Component {

    constructor(){
      super()
        this.state={
            json:JSON
        }
    }
  render() {
    return (
      <div>
        <Users data={this.state.json}/>
      </div>
    )
  }
}
export default App15