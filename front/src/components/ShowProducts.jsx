import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const endpoint = "http://localhost:8000/api";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    const response = await axios.get(`${endpoint}/products`);
    setProducts(response.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${endpoint}/products/${id}`);
    getAllProducts();
  };

  return (
    <div>
      <div className="d-grid gap-2">
        <Link
          to="/create"
          className="btn btn-success btn-lg mt-2 mb-2 text-white"
        >
          Create
        </Link>
      </div>
      <table className={"table table-striped table-bordered table-responsive-sm table-hover"}>
        <thead class="table-dark">
          <tr>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>
                <Link
                  to={`/edit/${product.id}`}
                  className={"btn btn-warning btn-sm"}
                >
                  Edit
                </Link>
                <button onClick={() => deleteProduct(product.id)} className={'btn btn-danger btn-sm'}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className="table-dark">
        <tr>
          <th>Description</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Actions</th>
        </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ShowProducts;
