import React from 'react'
import json from './userdata.json'
import "./global.css"
import Movie from './Movie';

const App5 = () => {
  return (
    <div>
    <Movie payload={json}/>
    </div>
  )
}

export default App5