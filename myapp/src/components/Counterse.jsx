import React, { useState } from 'react'

const Counterse = () => {
    const[counter,setCounter] = useState(0)

  return (
    <div>
        <h1>counter :{counter}</h1>
        <button onClick={()=>setCounter((r)=>r+1)}>counter+</button>
    </div>
  )
}

export default Counterse