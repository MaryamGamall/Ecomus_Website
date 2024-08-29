import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { products } from "../../Pages/Api";
import "./Collection2.css";
const Collection2 = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(products);
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        {productList.map((product) => (
          <Col key={product.id} md={6} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                className="n5"
              />
              <Card.Body>
                <Card.Title className="ProductName">{product.name}</Card.Title>
                <Card.Text className="Productdes">
                  {product.description}
                </Card.Text>
                <Card.Text className="Productprice">{product.price}</Card.Text>
                <Button
                  variant="primary"
                  href={`/product/${product.id}`}
                  className="Productbtn"
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

export default Collection2;
