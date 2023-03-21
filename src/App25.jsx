import React, {useState, useRef } from "react";
import VIDEO from "./movie.mp4"


const App25 = () => {
    
    let[video,setVideo]=useState(VIDEO)
    let[loading,setLoading]=useState(false)
    let videoRef=useRef()
    let playorpause=()=>{
        if(!loading)
        {
            setLoading(true)
            videoRef.current.play()

        }else
        {
            setLoading(false)
            videoRef.current.pause()
        }
    }
  return (
    <div>
        <video src={video} onClick={playorpause} ref={videoRef} ></video>

    </div>
  )
}

export default App25