import React from "react";
import {Component} from "react";
class App21 extends Component{
    constructor()
    {
        super()
        this.state={
            username:"yash"
        }
    }
    componentDidMount()
    {
        let btn=document.querySelector('button')
        btn.addEventListener('click',()=>{
            this.setState({username:this.state.username="KGF"})
        })
    }
    render(){
        return(
            <>
            <div>{this.state.username}</div>
            <button>CHANGE</button>
            </>
        )
    }
}
export default App21