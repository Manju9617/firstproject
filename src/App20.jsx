import React, { createRef } from "react";
import { Component } from "react";
class App20 extends Component{
    constructor(){
        super()
        this.state={name:"otta"}
        this.h1ref=createRef()
    }
    componentDidMount()
    {
        let h1=document.querySelector("bye")
        console.log(h1,"dom way");
        console.log(this.h1ref.current,"react way");

    }
    render()
    {
        return(
            <>
            <h1 ref={this.h1ref}>{this.state.name}</h1>
            </>
        )
    }
}
export default App20