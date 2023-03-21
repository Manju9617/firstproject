import React from 'react'

const App27 = () => {
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

export default App27