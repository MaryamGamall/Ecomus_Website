import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import products from "../../Pages/Api.js"; 
import img1 from "../../Assets/rendering-smart-home-device (1).jpg";
import imgmobile from "../../Assets/rendering-smart-home-device_23-2151039324.jpg";
import imgearbuds from "../../Assets/rendering-smart-home-device (14).jpg";
import "./Home.css";
import Collection2 from "../Collection2/Collection2.jsx";
import Collection from "../Collection/Collection.jsx";
import Collection3 from "../Collection3/Collection3.jsx";

import imgwatch from "../../Assets/rendering-smart-home-device (12).jpg";

const Home = () => {
  const navigate = useNavigate();

  const viewProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <Fragment>
      <div>
        <div className="div-h">
          {" "}
          <h2 className="h-div">
            Enjoy FREE delivery, exclusive deals, award-winning Headphone and
            more Join today. Cancel anytime.
          </h2>
        </div>

        <div className="div-home">
          <img src={img1} alt="" className="img1" />
        </div>
      </div>

      <h3 className="h3-p"> Our Products </h3>
      <h3 className="h3-p2"> Mobiles </h3>
      <div>
        <div className="div-home2">
          <img src={imgmobile} alt="" className="imgmobile" />
        </div>
        <Collection2 />
        <h3 className="h3-p3"> Smart Watches </h3>
        <div className="div-home3">
          <img src={imgwatch} alt="" className="imgwatch" />
        </div>
        <Collection />

        <h3 className="h3-p4">Ear buds</h3>
        <div className="div-home4">
          <img src={imgearbuds} alt="" className="imgearbuds" />
        </div>
        <Collection3 />
      </div>
    </Fragment>
  );
};

export default Home;
