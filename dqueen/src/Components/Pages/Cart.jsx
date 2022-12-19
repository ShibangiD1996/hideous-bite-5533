import { useContext } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { CartContext } from "../Context/CartContext";

export default function Cart() {
  const [state, dispatch] = useContext(CartContext);
  console.log(state.cartItem);
  return (
    <div className="addedItem">
      <ListGroup>
        {state.cartItem.map((prod) => {
          <ListGroup.Item key={prod.id}>
            <Row>
              <Col md={2}>
                <Image src={prod.image} alt={prod.brand} />
              </Col>
              <Col md={2}>
                <span class="text">{prod.brand}</span>
                
              </Col>
              <Col
                md={2}
                style={{ color: "RGB(14 160 10)", fontWeight: "bold" }}
              >
                {prod.price}
              </Col>
              <Col md={2}>
                
              </Col>
            
              <Col md={2}>
                <Button
                  type="button"
                  variant="light"
                 
                >
                 
                </Button>
              </Col>
            </Row>
          </ListGroup.Item>
        })}
      </ListGroup>
    </div>
  );
}
