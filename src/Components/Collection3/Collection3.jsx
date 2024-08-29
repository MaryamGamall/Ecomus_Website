import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { products3 } from "../../Pages/Api3";
import "./Collection3.css";
const Collection3 = () => {
  const [productList3, setProductList3] = useState([]);

  useEffect(() => {
    setProductList3(products3);
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        {productList3.map((product3) => (
          <Col key={product3.id} md={6} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={product3.image}
                alt={product3.name}
                className="n5"
              />
              <Card.Body>
                <Card.Title className="ProductName3">
                  {product3.name}
                </Card.Title>
                <Card.Text className="Productdes3">
                  {product3.description}
                </Card.Text>
                <Card.Text className="Productprice3">
                  {product3.price}
                </Card.Text>
                <Button
                  variant="primary"
                  href={`/product/${product3.id}`}
                  className="Productbtn3"
                >
                  View Product
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Collection3;
