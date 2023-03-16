import React,{useState} from 'react'
import './global.css'

const App18 = () => {
    let[count,setCount]=useState(0)
    let handleIncrement=()=>{
        setCount(count+1)
    }
    let handleDecrement=()=>{
        setCount(count-1)
    }
    let handleReset=()=>{
        setCount(0)
    }
    return (
        <div className='mainBlock'>
        <h1>{count}</h1>
        <div className='btngroup'>
          <button onClick={handleIncrement}>+ increment</button>
          <button onClick={handleDecrement}>- decrement</button>
          <button onClick={handleReset}>reset</button>
        </div>
        </div>
      )
}

export default App18
