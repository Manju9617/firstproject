import { render } from '@testing-library/react'
import react,{Component}from 'react'
import { createRef } from 'react'
class App19 extends Component{
    constructor(){
        super()
        this.state={
            company:"QSPIDERS"
        }
        this.spanRef=createRef()
    this.btnRef=createRef()
    }
    
render(){
return(
    <div>
        <span ref={this.spanRef}>{this.state.company}</span>
        <br></br>
        <button ref={this.btnRef}onClick={()=>{
            this.setState({company:"jspiders"})
            this.spanRef.current.style.color="orange"
            this.spanRef.current.style.border="2px black"
            this.btnRef.current.style.color="red"
            this.btnRef.current.style.backgroundcolor="black"

        }}>change company</button>
    </div>
)
    }}
    export default App19