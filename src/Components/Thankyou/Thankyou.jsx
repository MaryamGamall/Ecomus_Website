import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import "./Thank.css";
import { NavLink } from "react-router-dom";

const thankyou = () => {
  return (
    <div className="thank-you-page">
      <AiOutlineCheckCircle className="success-icon" />
      <h1>Thank You! Your Purchase Was Successful.</h1>
      <p>We will process your order as soon as possible.</p>
      <NavLink to={"/home"} className="link home-button ">
        {" "}
        <button> Back to Home</button>
      </NavLink>
    </div>
  );
};

export default thankyou;
