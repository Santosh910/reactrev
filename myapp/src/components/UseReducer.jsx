import React, { useReducer } from 'react'

const initialState = { count: 0 }
const reducer = (state, action) => {
    switch (action.type) {
        case "INCR":
            return { ...state, count: state.count + 1 }
        case "DECR":
            return { ...state, count: state.count - 1 }
        case "RESET":
            return{...state,count:0}
        default:
            return state;
    }
}



const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const Increment = ()=>{
        dispatch({type:"INCR"})
    }

    const Decrement = ()=>{
        dispatch({type:"DECR"})
    }

    const Reset = ()=>{
        dispatch({type:"RESET"})
    }

    return (
        <div>
            <h1>counter:{state.count}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default UseReducer