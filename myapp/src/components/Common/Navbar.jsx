import React, { useContext } from 'react'
import { AuthContext } from '../AuthContext'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const router = useNavigate()
  const { state, Logout } = useContext(AuthContext)
  return (
    <div style={{ width: "100%", height: "60px", display: "flex", justifyContent: "space-between", textAlign: "center", border: "1px solid black" }}>
      <div onClick={() => router('/')} style={{ border: "1px solid black", width: "30%", margin: "auto", height: "35px", paddingTop: "15px" }}>home</div>
      <div style={{ border: "1px solid black", width: "30%", margin: "auto", display: "flex", justifyContent: "space-between" }} >

        <div onClick={() => router('/product')}>product</div>
        {state?.user?.id &&
          <div>
            <div onClick={() => router('/your-products')}>Your product</div>
            <div onClick={() => router('/add-product')}>add product</div>

          </div>}

      </div>
      <div style={{ border: "1px solid black", width: "30%", margin: "auto", display: "flex", justifyContent: "space-between" }}>
        {state?.user?.id ? <>
          <div onClick={() => router('/profile')}>profile</div>
          <div onClick={() => router('/cart')}>cart</div>
          <div onClick={Logout}>logout</div>
        </> : <div onClick={() => router('/login')}>login</div>}


      </div>
    </div>
  )
}

export default Navbar