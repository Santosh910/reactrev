import React, { useState } from 'react'

const Counter = () => {
    const[counter,setCounter] = useState(0)
    const[liked,setLiked] = useState(false)
    
    console.log(liked)
    

    const flag = ()=>{
        setLiked((car)=>!car)
        setCounter((rev)=>rev+1)
    }

  return (
    <div>
        <h1>counter:{counter}</h1>
        <button onClick={()=>setCounter((rev)=>rev+1)}>+</button>
        <button onClick={()=>setCounter((rev)=>rev-1)}>-</button>
        <button onClick={()=>setCounter((rev)=>rev+10)}>+10</button>
        <button onClick={flag}>like?</button>
    </div>
  )
}

export default Counter