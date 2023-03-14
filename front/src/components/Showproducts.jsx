import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const endpoint = "http://127.0.0.1:8000/api";

const Showproducts = () => {
  const [products, Setproducts] = useState([]);
  useEffect(() => {
    getAllProducts();
  });

  const getAllProducts = async () => {
    const response = await axios.get(`$(endpoint)/products`);
    Setproducts(response.data);
  };

  const deleteProduct = () => {};

  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};

export default Showproducts;
