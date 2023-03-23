import React from 'react'
import { useRef } from 'react'

const App29 = () => {
  let userRef=useRef()
    let passRef=useRef()

 let handleSubmit=(e)=>{
    e.preventDefault()
    let username=userRef.current.value
    let password=passRef.current.value
    console.log({username,password});

  return (
    <div>
        <form action='' onSubmit={handleSubmit}>
            <label htmlFor='username'>USERNAME</label>
            <br/>
            <input type="text"id='username' ref={userRef}/>
            <br/>
            <label htmlFor='password'>PASSWORD</label>
            <br/>
            <input type="text"id='password' ref={passRef}/>
            <br/>
          <button>SUBMIT</button>
        </form>
    </div>
  )}
}
export default App29