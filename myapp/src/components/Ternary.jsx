import React from 'react'

const Ternary = ({isUserLoggedIn,setIsLoggedIn}) => {
  return (
    <div>
        <h1>Ternary Quarter</h1>
        {isUserLoggedIn ? <h1 onClick={()=>setIsLoggedIn((prevValue)=>!prevValue)}>welcome</h1>:<h1 onClick={()=>setIsLoggedIn((prevValue)=>!prevValue)}>please login</h1>}
    </div>
  )
}

export default Ternary