

import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { products2 } from "../../Pages/Api2";
import "./Collection.css";
const Collection = () => {
  const [productList2, setProductList2] = useState([]);

  useEffect(() => {
    setProductList2(products2);
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        {productList2.map((product2) => (
          <Col key={product2.id} md={6} className="mb-4">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={product2.image}
                alt={product2.name}
                className="n5"
              />
              <Card.Body>
                <Card.Title className="ProductName2">
                  {product2.name}
                </Card.Title>
                <Card.Text className="Productdes2">
                  {product2.description}
                </Card.Text>
                <Card.Text className="Productprice2">
                  {product2.price}
                </Card.Text>
                <Button
                  variant="primary"
                  href={`/product/${product2.id}`}
                  className="Productbtn2"
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

export default Collection;