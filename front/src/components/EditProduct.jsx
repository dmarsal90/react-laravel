import React, {useState, useEffect} from 'react'
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";


const endpoint = 'http://localhost:8000/api/products';

const EditProduct = () => {
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const navigate = useNavigate();
    const {id} = useParams();

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}/${id}`, {
            description: description,
            price: price,
            stock: stock,
        });
        navigate('/');
    };
    useEffect(() => {
        const getProductById = async (e) => {
            const response = await axios.get(`${endpoint}/${id}`)
            setDescription(response.data.description)
            setPrice(response.data.price)
            setStock(response.data.stock)
        }
        getProductById();
    }, []);
    
    return (
        <div>
            <h3>Edit product</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className={'form-label'}>Description</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}
                           className={'form-control'}/>
                </div>
                <div className='mb-3'>
                    <label className={'form-label'}>Price</label>
                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}
                           className={'form-control'}/>
                </div>
                <div className='mb-3'>
                    <label className={'form-label'}>Stock</label>
                    <input type="text" value={stock} onChange={(e) => setStock(e.target.value)}
                           className={'form-control'}/>
                </div>
                <button type="submit" className={'btn btn-success btn-lg'}>Save</button>
            </form>
        </div>
    )
}

export default EditProduct;