import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Product = () => {
    const [product, setProduct] = useState([])
    const router = useNavigate()
    // const handleChange = (event)=>{
    //     // setProduct({...product,[event.target.name]:event.target.value})
    // }
    useEffect(() => {
        async function getProducts() {
            try {
                const { data } = await axios.get('https://fakestoreapi.com/products');
                setProduct(data)
            } catch (error) {
                  toast.error(error.message)
            }

        }
        getProducts()
    }, [])
    return (
        <div>
            {product?.length ?
                <div style={{ display: "flex", width: "100%", flexWrap: "wrap", justifyContent: "space-between" }}>
                    {product.map((pro) => (
                        <div onClick={()=>router(`/single-product/${pro.id}`)} style={{ width: "24%", marginTop: "50px", border: "1px solid black" }}>
                            <img style={{ width: "200px", height: "300px", }} src={pro.image} alt="img" />
                            <h2>Name:{pro.title}</h2>
                            <h3>Price:${pro.price}</h3>
                            <button>Add to Cart</button>
                        </div>
                    ))}
                </div>
                :
                <div>Loading......</div>}

        </div>
    )
}

export default Product