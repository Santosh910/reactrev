import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import api from './AxiosConfig'

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([])
  console.log(cartProducts, "cartproducts")
  const { state } = useContext(AuthContext)
  const router = useNavigate()

  async function getYourCartProducts() {
    try {
      const response = await api.post('/user/cart', { id: state?.user?.id })
      if (response.data.success) {
        setCartProducts(response.data.products)
      }
    } catch (error) {
      console.log(error)
    }
  }

  async function deleteProduct(productId) {
    try {
      const response = await api.post('/user/delete-cart', { productId, userId: state?.user?.id })
      if (response.data.success) {
        toast.success(response.data.message)
        setCartProducts(response.data.products)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (state?.user && state?.user?.id === undefined) {
      toast.error("please login to access your cart products")
      setTimeout(() => {
        router("/login")
      }, 3000)
    } else {
      if (state?.user?.id) {
        getYourCartProducts()
      }
    }
  }, [state])
  return (
    <div>
      <h1>Cart</h1>
      {cartProducts.length ?
        <div>
          {cartProducts.map((product) => (<div>
            <img src={product.image} alt="" />
            <h1>{product.name}</h1>
            <h1>${product.price}/-</h1>
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
          </div>))}
        </div>
        :
        <div></div>}
    </div>
  )
}

export default Cart