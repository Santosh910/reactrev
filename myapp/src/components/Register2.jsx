import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'

const Register2 = () => {
    const [userData, setUserData] = useState({ name: "", email: "", password: "" });
    const router = useNavigate()

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    const sendDataToBackend = async (event) => {
        event.preventDefault();

        if (userData.name && userData.email && userData.password) {
            if (userData.password.length >= 8) {
                try {
                    const {data} = await axios.post("http://localhost:8000/register",{userData})
                    // const response = { data: { success: true } };
                    if (data.success) {
                        alert("registration successfulll")
                        setUserData({ name: "", email: "", password: "" })
                        router('/login')
                         
                //  console.log(data.success)
                    }else{
                        throw new Error("Something Went wrong")
                    } 

                }catch(error){
                    toast.error(error?.message)
                    console.log(error)
                }
                 
               
            
        } else {
            alert("password must be 8 digit")
        }
    }else {
        alert("please fill the all values")
}
     }
return (
    <div>
        <h1>Register</h1>
        <form onSubmit={sendDataToBackend}>
            <label>Name:</label><br />
            <input type="text" name='name' onChange={handleChange} /><br />
            <label>Email:</label><br />
            <input type="email" name='email' onChange={handleChange} /><br />
            <label>Password:</label><br />
            <input type="password" name='password' onChange={handleChange} /><br />
            <input type="submit" value="register here" />
        </form>
    </div>
)
}

export default Register2