import React from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import IMG from './picture.webp'

const App30 = () => {
    let [photo,setPhoto]=useState(IMG)
    let [loading,setLoading]=useState(true)
    let imgRef=useRef()
    let handleChange=()=>{
        if(loading==true)
        {
            setLoading(!true)
            imgRef.current.style.borderRadius="25%"
            imgRef.current.style.border="2px solid green"
        }else
        {
            setLoading(!false)
            imgRef.current.style.borderRadius="10%"
            imgRef.current.style.border="2px solid brown"
        }
    }
  return (
    <div>
<img src={photo} alt="lord" ref={imgRef} height="200px" width="200px"/>
<button onClick={handleChange}>{loading ? "ON" : "OFF"}</button>
    </div>
  )
}

export default App30