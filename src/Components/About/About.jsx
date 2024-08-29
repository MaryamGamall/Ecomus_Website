import React from "react";
import i from "../../Assets/logo_white.svg";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container className="about-container AF">
      <Row>
        <Col>
          <Card className="about-card">
            <Card.Body>
              <Card.Title>
                About <img src={i} alt="" className="i-about" />{" "}
              </Card.Title>
              <Card.Text>
                Welcome to <img src={i} alt="" className="img-about" /> , your
                number one source for the latest electronics. We are dedicated
                to providing you with the best of smartphones, headphones,
                cameras, and televisions, with a focus on quality, fair prices,
                and exceptional customer service.
              </Card.Text>
              <Card.Text>
                Founded in [2024] by Maryam Gamal,{" "}
                <img src={i} alt="" className="img-about" /> has come a long way
                from its beginnings. When Maryam first started out, her passion
                for providing high-quality electronics at competitive prices
                drove her to quit her day job, and gave her the impetus to turn
                hard work and inspiration into a booming online store. We now
                serve customers all over [country/world], and are thrilled to be
                a part of the [eco-friendly, fair trade] wing of the electronics
                industry.
              </Card.Text>
              <Card.Text>
                We hope you enjoy our products as much as we enjoy offering them
                to you. If you have any questions or comments, please don't
                hesitate to contact us.
              </Card.Text>
              <Card.Text>
                Sincerely,
                <br />
                Maryam Gamal, Founder
                <br />
              </Card.Text>
              <Card.Text>
                If you have any inquiries, feel free to{" "}
                <Link to="/contact" className="about-contact">
                  {" "}
                  Contact Us
                </Link>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
