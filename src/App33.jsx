import React,{useState} from 'react'

const App33 = () => {
    let[username,setUser]=useState("")
    let [password,setPass]=useState("")

    let handleSubmit=(e)=>{
        e.preventDefault()
        localStorage.getItem('username', username);
        localStorage.getItem('password', password);
        console.log({username,password});
    }
  return (
    <div>
        <form action='' onSubmit={handleSubmit}>
      <label htmlFor='username'>USERNAME</label>
      <br/>
      <input type="text"id='username' onChange={(e)=>{
        setUser({username:e.target.value})
      }}/>
      <br/>
      <label htmlFor='password'>PASSWORD</label>
      <br/>
      <input type="password"id='password' onChange={(e)=>{
        setPass({password:e.target.value})
      }}/>
      <br/>
    <button>SUBMIT</button>
  </form>
    </div>
  )
}

export default App33