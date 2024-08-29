import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css"; // تأكد من إنشاء هذا الملف للتنسيق
import iimg from "../../Assets/logo_white.svg";
const Footer = () => {
  return (
    <footer className="footer">
      <Container className="oter">
        <img src={iimg} className="iimg" />
        <p>
          is a comprehensive e-commerce platform designed to provide an
          exceptional and seamless shopping experience for all our customers. We
          offer a wide range of high-quality products, from the latest
          electronics and fashionable clothing to home essentials and décor. We
          are here to make your shopping experience enjoyable and efficient.
        </p>

        <h4>
          Design and User Interface Development by Maryam Gamal. All rights
          reserved.
        </h4>
      </Container>
    </footer>
  );
};

export default Footer;
