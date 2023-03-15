import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/product'

const CreateProduct = () => {

    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {description: description, price: price, stock: stock})
        navigate('/')
    }
    return (
        <div>
            <h1>Add Product</h1>
        </div>
    )
}

export default CreateProduct
