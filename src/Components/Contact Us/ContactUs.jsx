import React, { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaBehance,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import "./ContactUS .css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
    setSubmitted(true);
  };

  return (
    <Container className="contactus-container ">
      <h2>Contact Us</h2>
      {!submitted ? (
        <Form onSubmit={handleSubmit} className="CF">
          <Form.Group controlId="formName">
            <Form.Label className="FT">Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="fl"
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label className="FT">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="fl"
            />
          </Form.Group>
          <Form.Group controlId="formMessage">
            <Form.Label className="FTm">Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="fl"
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="fbtn">
            Send Message
          </Button>
        </Form>
      ) : (
        <div className="thank-you-message">
          <h4>
            Thank you for your message, {formData.name}. We will get back to you
            soon.
          </h4>
        </div>
      )}
      <Row className="developer-info mt-5">
        <Col>
          <h3>About the Developer</h3>
          <p>
            <span> Maryam Gamal</span> is a passionate developer with expertise
            in creating user-friendly web applications.{" "}
            <span> Follow her on:</span>
          </p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/in/maryam-el-eraky-984106211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://github.com/MaryamGamall"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="social-icon" />
            </a>
            <a
              href="https://x.com/Maryam_Gamal26?t=iZaGdRHTIa-DmRAorsCEtg&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" />
            </a>
            <a
              href="https://www.behance.net/maryamgamal26"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBehance className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/_maryam.gamal_?igsh=bnF5dm05MmIzY2sy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="https://www.facebook.com/mimy.gamal.7?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="social-icon" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
