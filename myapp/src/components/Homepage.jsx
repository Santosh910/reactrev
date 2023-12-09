import React, { useContext } from "react";
import {useNavigate} from 'react-router-dom'
import toast from 'react-hot-toast'
// import { MyContext } from "./GlobalContext";
import { AuthContext } from "./AuthContext";

const Homepage = ()=>{
    // const{state,dispatch} = useContext(MyContext)
    const{state,Logout} = useContext(AuthContext)

    const router = useNavigate()

    return(
        <div>
           <h1>Homepage for Awdiz</h1>
           {/* <h1>counter:{state.counter}</h1> */}
            <h1>User :{state?.user?.name}</h1>
           {/* <button onClick={()=>dispatch({type:"INCR"})}>+</button> */}
           {/* <button onClick={()=>dispatch({type:"DECR"})}>-</button> */}
           {/* <button onClick={()=>dispatch({type:"RESET"})}>reset</button> */}
           <button onClick={()=>router('/login')}>GO to login</button>
           <button onClick={()=>router('/register')}>GO to login</button>
           <button onClick={()=>toast.success('clicked')}>click for toast</button>
           <button onClick={Logout} >Logout?</button>
        </div> 
    )
}

export default Homepage