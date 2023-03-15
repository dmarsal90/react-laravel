import React, {useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const endpoint = "http://localhost:8000/api/product";
const EditProduct = () => {
    return (
        <div>
            <h1>Edit Product</h1>
        </div>
    );

}


export default EditProduct;
