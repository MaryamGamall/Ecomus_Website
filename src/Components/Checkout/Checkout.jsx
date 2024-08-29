import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function handleLogin() {
    navigate("/thankyou");
  }

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={userData.fullName}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={userData.address}
          onChange={handleChange}
          required
        />

        <label htmlFor="city">City:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={userData.city}
          onChange={handleChange}
          required
        />

        <label htmlFor="zipCode">Zip Code:</label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={userData.zipCode}
          onChange={handleChange}
          required
        />

        <button type="submit" onClick={handleLogin}>
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
