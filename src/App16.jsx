
import React, { Component } from 'react'
import './global.css'

export default class App16 extends Component {
    constructor()
    {
        super()
        this.state={
            count:0
        }
    }
    handleincrement=()=>{
        this.setState({count:this.state.count+1})
    }
    handledecrement=()=>{
        this.setState({count:this.state.count-1})
    }
    handleReset=()=>{
        this.setState({count:0})
    }
  render() {
    return (
      <div className='mainBlock'>
      <h1>{this.state.count}</h1>
      <div className='btngroup'>
        <button onClick={this.handleincrement}>+ increment</button>
        <button onClick={this.handledecrement}>- decrement</button>
        <button onClick={this.handleReset.bind(this)}>reset</button>
      </div>
      </div>
    )
  }
}
