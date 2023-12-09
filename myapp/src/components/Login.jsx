import React,{ useContext, useState }  from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast'
import api from './AxiosConfig'
import { AuthContext } from './AuthContext'

const Login = () => {
  const [userData, setUserData] = useState({  email: "", password: "" });
 
  const router = useNavigate()

  const{Login} = useContext(AuthContext)

  const handleChange = (event) => {
      setUserData({ ...userData, [event.target.name]: event.target.value })
  }

  const sendDataToBackend = async (event) => {
      event.preventDefault();

      if ( userData.email && userData.password) {
          if (userData.password.length >= 6) {
              try {
                  const response = await api.post("/auth/login",{userData})
                  // const response = { data: { success: true } };
                  if (response.data.success) {
                    localStorage.setItem("my-token",JSON.stringify(response.data.token))
                    Login(response.data.user)
                    // console.log(response.data,"response data")
                      toast.success("login successfulll")
                      setUserData({  email: "", password: "" })
                      router('/')
                       
            //    console.log(response.data.success)
                  }else{
                      throw new Error("Something Went wrong")
                  } 

              }catch(error){
                  toast.error(error?.response.data.message)
                  console.log(error)
              }
               
             
          
      } else {
          alert("password must be 6 digit")
      }
  }else {
      alert("please fill the all values")
}
   }
return (
  <div>
      <h1>Login</h1>
      <form onSubmit={sendDataToBackend}>
        
          <label>Email:</label><br />
          <input type="email" name='email' onChange={handleChange} /><br />
          <label>Password:</label><br />
          <input type="password" name='password' onChange={handleChange} /><br />
          <input type="submit" value="Login here" />
      </form>
  </div>
)
}

export default Login