import React from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const router = useNavigate()
    const goToHome = () => {
        router('/')
    }
  return (
    <div>
        <h1>Login</h1>
        <button onClick={goToHome}>Go to Homepage</button>
    </div>
  )
}

export default Login