import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const AddProduct = () => {
    const [productData, setProductData] = useState({ name: "", price: "", category: "", image: "" })
    const handleChange = (event) => {
        setProductData({ ...productData, [event.target.name]: event.target.value })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (productData.name && productData.price && productData.category && productData.image) {
            try {
                const { data } = await axios.post('https://fakestoreapi.com/products', { title: productData.name, price: productData.price, category: productData.category, image: productData.image })
                console.log(data)
                toast.success("product added successfully now you can add another product")
                setProductData({ name: "", price: "", category: "", image: "" })
            } catch (error) {
                console.log(error)
            }

        } else {
            toast.error("All field are mandotory and price must be greater than 0..")
        }
    }
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