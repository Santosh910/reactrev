import React, { memo } from 'react'

const Todos = ({todos,addTodo}) => {
  return (
    <div>
        <h1>Todos</h1>
        <button onClick={addTodo}>add todo</button>
        {
            todos.map((todo)=>(
                <h1>{todo}</h1>
            ))
        }
    </div>
  )
}

export default memo(Todos); 