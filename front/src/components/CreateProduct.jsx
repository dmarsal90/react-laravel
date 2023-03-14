import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/product'

const CreateProduct = () => {
  return (
    <div>
      <h1>Add Product</h1>
    </div>
  )
}

export default CreateProduct
