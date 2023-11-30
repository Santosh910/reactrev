import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import { MyContext } from "./GlobalContext";

const Homepage = ()=>{
    const{state,dispatch} = useContext(MyContext)

    const router = useNavigate()

    return(
        <div>
           <h1>Homepage for Awdiz</h1>
           <h1>counter:{state.counter}</h1>
           <button onClick={()=>dispatch({type:"INCR"})}>+</button>
           <button onClick={()=>dispatch({type:"DECR"})}>-</button>
           <button onClick={()=>dispatch({type:"RESET"})}>reset</button>
           <button onClick={()=>router('/login')}>GO to login</button>
           <button onClick={()=>router('/register')}>GO to login</button>
           <button onClick={()=>toast.success('clicked')}>click for toast</button>
        </div> 
    )
}

export default Homepage