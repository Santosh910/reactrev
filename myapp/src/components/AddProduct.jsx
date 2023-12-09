
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import api from './AxiosConfig'
import { AuthContext } from './AuthContext'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
    const { state } = useContext(AuthContext)
    const [productData, setProductData] = useState({ name: "", price: "", category: "", image: "" })
    const router = useNavigate()
    const handleChange = (event) => {
        setProductData({ ...productData, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (productData.name && productData.price && productData.category && productData.image) {
            try {
                const { data } = await api.post('/product/add-product', { name: productData.name, price: productData.price, category: productData.category, image: productData.image, id: state?.user?.id })
                console.log(data)
                if (data.success) {
                    router('/your-products')
                    toast.success(data.message)
                    setProductData({ name: "", price: "", category: "", image: "" })
                }

            } catch (error) {
                console.log(error)
                toast.error(error?.response.data.message)
            }

        } else {
            toast.error("All field are mandotory and price must be greater than 0..")
        }
    }

    useEffect(() => {
        if (state?.user && state?.user?.name === undefined) {
            // router('/login')
            toast.error("please login to access this page")
        }
    }, [state])
    return (
        <div>
            <h1>Add product</h1>
            <form onSubmit={handleSubmit}>
                <label>Product Name</label><br />
                <input type="text" name="name" onChange={handleChange} value={productData.name} /><br />
                <label>Product Price</label><br />
                <input type="number" name='price' onChange={handleChange} value={productData.price} /><br />
                <label>Product category</label><br />
                <input type="text" name='category' onChange={handleChange} value={productData.category} /><br />
                <label>Product Image</label><br />
                <input type="url" name='image' onChange={handleChange} value={productData.image} /><br />
                <input type="submit" value="submit" />
            </form>

        </div>
    )
}

export default AddProduct