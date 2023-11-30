import React from 'react'

const Mapping = ({ names }) => {
     
    return (
        <div>
            <h1>Mapping</h1>
            {names.map((name,i)=>(<div>
                
                    <h1>student:{name}</h1>
                    <h1>id:{i}</h1>
                
                
                
                

            </div>))}
        </div>
    )
}

export default Mapping