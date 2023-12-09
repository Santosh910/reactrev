import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import api from './AxiosConfig'

const YourProducts = () => {
    const router = useNavigate()
    const { state } = useContext(AuthContext)
    const [youerroducts, setYourProducts] = useState([])

    console.log(youerroducts, "yourproduct")

    async function getYourProduct() {
        try {
            const response = await api.post('/product/your-products', { id: state?.user?.id })
            if (response.data.success) {
                setYourProducts(response.data.products)
            }
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }

    async function deleteProduct(id) { 
        try {
            const response = await api.delete('/product/delete-products', { params:{id}})
            if (response.data.success) {
                getYourProduct()
                toast.success(response.data.message)
            }
        } catch (error) {
            toast.error(error?.response.data.message)
        }
    }


    useEffect(() => {
        if (state?.user && state?.user?.name === undefined) {
            router('/login')
            toast.error("please login to access this page")
        }
        if (state?.user && state?.user?.name !== undefined) {
            getYourProduct()

        }
    }, [state])

    return (
        <div>
            {youerroducts.map((pro) => (
                <div key={pro._id}>
                    <img src={pro.image} alt="" />
                    <button onClick={() => router(`/update-product/${pro._id}`)}>update</button>
                    <button onClick={()=>deleteProduct(pro._id)}>delete</button>
                </div>
            ))}
        </div>
    )
}


export default YourProducts