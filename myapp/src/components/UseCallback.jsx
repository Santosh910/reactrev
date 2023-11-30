import React, { useCallback, useState } from 'react'
import Todos from './Todos'

const UseCallback = () => {
    const[counter,setCounter] = useState(0)

    const[todos,setTodos] = useState([])

    const addTodo= useCallback(()=>{
        setTodos([...todos,"new todo"])
    },[todos])
    
  return (
    <div>
        <h1>counter- {counter}</h1>
        <button onClick={()=>setCounter((s)=>s+1)}>+</button>
        <Todos todos={todos} addTodo={addTodo}/>
    </div>
  )
}

export default UseCallback
