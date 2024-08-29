import React, { Fragment } from "react";
import "../Home/Home.css";
import Collection from "../Collection/Collection";
import Collection2 from "../Collection2/Collection2";
import Collection3 from "../Collection3/Collection3";

const Product = () => {
  return (
    <Fragment>
      <h3 className="h3-p"> Our Products </h3>

      <div>
        <h3 className="h3-p2"> Mobiles </h3>
        <div className="div-home2"></div>
        <Collection2 />
        <h3 className="h3-p3"> Smart Watches </h3>
        <div className="div-home3"></div>
        <Collection />

        <h3 className="h3-p4">Ear buds</h3>
        <div className="div-home4"></div>
        <Collection3 />
      </div>
    </Fragment>
  );
};

export default Product;
