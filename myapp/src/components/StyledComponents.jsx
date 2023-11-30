import React from 'react'
import styled from 'styled-components'

const StyledComponents = () => {
    const Button = styled.button`
    color:red;
    `
  return (
    <div>
        <Button>styled component</Button>
    </div>
  )
}

export default StyledComponents