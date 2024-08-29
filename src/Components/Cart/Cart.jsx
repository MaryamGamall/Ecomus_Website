import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Components/CartContext/CartContext";
import { Container, Row, Col, ListGroup, Button, Card } from "react-bootstrap";
import "./Cart.css";
const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <Container className="my-5">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ListGroup>
            {cart.map((product) => (
              <ListGroup.Item key={product.id}>
                <Row>
                  <Col md={3}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="cart-product-image"
                    />
                  </Col>
                  <Col md={6}>
                    <h5 className="ppn">{product.name}</h5>
                    <p className="ppd">{product.description}</p>
                    <p className="ppp">{product.price}</p>
                  </Col>
                  <Col md={3} className="text-center">
                    <Button
                      variant="secondary"
                      onClick={() => decreaseQuantity(product.id)}
                    >
                      -
                    </Button>
                    <span className="mx-2">{product.quantity}</span>
                    <Button
                      variant="secondary"
                      onClick={() => increaseQuantity(product.id)}
                    >
                      +
                    </Button>
                    <Button
                      variant="danger"
                      className="mt-2"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Button className="mt-3" onClick={handleCheckout}>
            Proceed to Checkout
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
