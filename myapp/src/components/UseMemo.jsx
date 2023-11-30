import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    const[counter,setCounter] = useState(0)
    const[todos,setTodos] = useState([])


    function addTodo(){
        setTodos([...todos,"New todo"])
    }

    const lengthyCalculation = useMemo(()=>calculate(counter),[counter])

  return (
    <div>
        <h1>lengthyCalculation :{lengthyCalculation}</h1>
        <h1>counter:{counter}</h1>
        <button onClick={()=>setCounter((s)=>s+1)}>counter +</button>
        <button onClick={addTodo}>add todo</button>
        {todos.map((todo)=>(
            <div>{todo} </div>
        ))}

    </div>
  )
}

const calculate = (counter) =>{
    for(var i = 0;i<1000000000;i++){
        counter += 1 
    }
    return counter;
}

export default UseMemo