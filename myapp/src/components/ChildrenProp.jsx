import React from 'react'

const ChildrenProp = () => {
  return (
    <>
        <Button>message</Button>
        <H1>this is h1</H1>
    </>
    
  )
}
const Button = ({children}) =>{
    return(
       <button>{children}</button> 
    )
}
const H1 = ({children}) =>{
    return(
        <h1>{children}</h1>
    )
}

export default ChildrenProp