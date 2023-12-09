// import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from './AxiosConfig';
import { AuthContext } from './AuthContext';
import  toast  from 'react-hot-toast'

const SingleProductNew = () => {
    const [productData, setProductData] = useState({})
    const { id } = useParams();

    const { state } = useContext(AuthContext)

    async function Cart(id) {
        if (state.user.id && id) {
            try {
                const response = await api.post('/user/add-cart', { userId: state.user.id, productId: id })
                if (response.data.success) {  
                    toast.success(response.data.message)}
                    
                }catch (error) {
                    console.log(error)
                }

            
         } else {
            toast.error("please login to add to cart")
        }
    }


    useEffect(() => {
        async function getSingleProduct() {
            try {
                // const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
                const { data } = await api.get(`/product/get-single-product?id=${id}`)
                if (data.success) {
                    setProductData(data.product)
                }
            } catch (error) {
                console.log(error)
            }

        }
        if (id) {
            getSingleProduct()
        }

    }, [id])
    console.log(productData, "productData")
    return (
        <div>{productData?._id ?
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div><img src={productData.image} alt="" />
                </div>
                <div>
                    <h1>Name:{productData.name}</h1>
                    <h1>category:{productData.category}</h1>
                    <h1>price:{productData.price}</h1>
                    <button onClick={() => Cart(productData._id)}>Cart</button>
                </div>
            </div>
            :
            <div>Loading....</div>
        } </div>
    )
}

export default SingleProductNew