import { createContext, useEffect, useReducer } from "react";
import {toast} from 'react-hot-toast'
import api from "./AxiosConfig";

export const AuthContext = createContext()
const reducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, user: action.payload }
        case "LOGOUT":
            return { ...state, user: null }
        default:
            return state;
    }
}
const ParentAuthContext = ({ children }) => {
    const initialState = { user: null }
    const [state, dispatch] = useReducer(reducer, initialState)

    const Login = (data) => {
        dispatch({ type: "LOGIN", payload: data })
    }

    const Logout = () => {
        localStorage.removeItem("my-token")
        dispatch({ type: "LOGOUT" })
        toast.success("logout successfull...")
    }

    useEffect(() => {
        async function getCurrentUser() {
            try {
                const response = await api.post('/auth/get-user',{token})
                if(response.data.success){
                   Login(response.data.user) 
                }
            } catch (error) {
               toast.error(error.response.data.message)
            }

        }
        const token = JSON.parse(localStorage.getItem("my-token"))
        if(token){
            getCurrentUser()
        }
    }, [])

    return (
        <AuthContext.Provider value={{ state, Login, Logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default ParentAuthContext