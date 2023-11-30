import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProductNew = () => {
    const [productData, setProductData] = useState({})
    const { id } = useParams();
    useEffect(() => {
        async function getSingleProduct() {
            try {
                const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
                if (data) {
                    setProductData(data)
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
        <div>{productData?.id ?
            <div style={{ display: "flex", justifyContent: "space-around" }}>
                <div><img src={productData.image} alt="" /></div>
                <div>
                    <h1>Name:{productData.title}</h1>
                </div>
            </div>
            :
            <div>Loading....</div>
        } </div>
    )
}

export default SingleProductNew