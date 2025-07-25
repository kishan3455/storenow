import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = ({ token }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) {
      setError("User not authenticated. Token missing.");
      return;
    }

    axios
      .get("http://localhost:5000/api/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setProducts(res.data);
        setError("");
      })
      .catch((err) => {
        setError(
          `Error fetching products: ${
            err.response?.data?.message || err.message
          }`
        );
        setProducts([]);
      });
  }, [token]);

  return (
    <div className="product-list">
      {error && <p style={{ color: "red" }}>{error}</p>}
      {products.length === 0 && !error ? (
        <p>No products found.</p>
      ) : (
        products.map((p) => <ProductCard key={p._id} product={p} />)
      )}
    </div>
  );
};

export default ProductList;
