import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from './AxiosConfig';
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const UpdateProduct = () => {
  const [productData, setProductData] = useState({})
  const { id } = useParams();
  const router = useNavigate()


  async function getProductData() {
    try {
      const response = await api.get(`/product/get-single-product?id=${id}`)
      if (response.data.success) {
        setProductData(response.data.product)
      }
    } catch (error) {
      console.log(error)
    }
  }

  function handleChange(event) {
    setProductData({ ...productData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await api.post('/product/update-product', { productData })
      if (data.success) {
        toast.success(response.data.message)
        router('/your-products')

      }
    } catch (error) {
      //  console.log(error)
      toast.error(error.response.data.message)
    }
  }

 

  useEffect(() => {
    if (id) {
      getProductData()
    }
  }, [id])
  return (
    <div>
      <h1>Upadate Product</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label><br />
        <input type='text' value={productData.name} name='name' onChange={handleChange} /><br />
        <label>Price</label><br />
        <input type='number' value={productData.price} name='price' onChange={handleChange} /><br />
        <label>Image</label><br />
        <input type='url' value={productData.image} name='image' onChange={handleChange} /><br />
        <label>Category</label><br />
        <input type='text' value={productData.category} name='category' onChange={handleChange} /><br />
        <input type="submit" value="Updats ?" />
      </form>
    </div>
  )
}

export default UpdateProduct