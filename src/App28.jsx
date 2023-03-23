import React, { Component } from 'react'
import { createRef } from 'react';

export default class App28 extends Component {
    constructor(){
        super()
        this.userRef=createRef()
        this.passRef=createRef()
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        let username=this.userRef.current.value
        let password=this.passRef.current.value
        console.log({username,password});
    }
  render() {
    return (
      <div>
        <form action='' onSubmit={this.handleSubmit}>
            <label htmlFor='username'>USERNAME</label>
            <br/>
            <input type="text"id='username' ref={this.userRef}/>
            <br/>
            <label htmlFor='password'>PASSWORD</label>
            <br/>
            <input type="text"id='password' ref={this.passRef}/>
            <br/>
          <button>SUBMIT</button>
        </form>
      </div>
    )
  }
}
