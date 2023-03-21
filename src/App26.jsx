import React, { Component } from 'react'

export default class  extends Component {
  render() {
    return (
      <div>
        <form action=''>
            <label htmlFor='username'>USERNAME</label>
            <br/>
            <input type="text"id='username'/>
            <br/>
            <label htmlFor='password'>PASSWORD</label>
            <br/>
            <input type="text"id='password'/>
            <br/>
            <button onClick={(e)=>{
            e.preventDefault()
            let username=document.getElementById("username").value
            let password=document.getElementById("password").value
            }}>SUBMIT</button>
        </form>
      </div>
    )
  }
}
