


import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../../Pages/Api.js";
import { useCart } from "../CartContext/CartContext.jsx"; // تأكد من صحة المسار
import "./SinglePage.css";

const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, removeFromCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ ...product, quantity });
      navigate("/cart");
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value) || 1);
  };

  const handleRemove = () => {
    if (product) {
      removeFromCart(product.id);
    }
  };

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="single-page">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="pn">{product.name}</h2>
      <p className="pd">{product.description}</p>
      <p className="pp">{product.price}</p>
      <button onClick={handleAddToCart} className="pba">
        Add to Cart
      </button>
      <button onClick={handleRemove} className="pbr">
        Remove from Cart
      </button>
    </div>
  );
};

export default SinglePage;







 


