import React from "react";
import {Component} from "react";
class App22 extends Component{
    constructor()
    {
        super()
        this.state={
            username:""
        }
    }
    componentDidMount()
    {
        let input=document.querySelector('input')
        input.addEventListener('keypress',(e)=>{
            this.setState({username:e.target.value})
        })
    }
    render(){
        return(
            <>
            <h1>{this.state.username}</h1>
            <input type="text"/>
            </>
        )
    }
}
export default App22