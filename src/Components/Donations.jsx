import React from "react";
import { Container, Row, Col, Form, Button, ProgressBar } from "react-bootstrap";

const Donations = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col sm={12} md={6} data-aos="fade-right">
          <h6 className="text-danger fw-bold" style={{letterSpacing:"10px"}}>DONATIONS</h6>
          <h2 className="fw-bold fs-1">Donate Us To Help</h2>
          <p style={{color:"grey"}}>
            Your generous donations help us preserve the temple’s sacred environment, organize festivals, and support community services like free meals, yoga sessions, and spiritual programs. Every contribution, big or small, becomes an offering of love and devotion. By donating, you are not only serving the temple but also uplifting countless lives. 
            Together, let us keep the flame of faith, service, and spirituality burning bright.
          </p>
          
        </Col>

        <Col sm={12} md={6} data-aos="fade-left">  
          <h4 className="fw-bold text-primary fs-1">$0</h4>
          <p>of <b>$16,000</b> raised</p>
          <ProgressBar now={0} className="mb-4" />  
          <Form.Control type="number" placeholder="$ 100.00" className="mb-3" />
          <div className="d-flex gap-2 mb-4 flex-wrap">
            <Button variant="outline-secondary">$25</Button>
            <Button variant="outline-secondary">$50</Button>
            <Button variant="outline-secondary">$100</Button>
            <Button variant="outline-secondary">Custom</Button>
          </div>
          <h5 className="fw-bold">Personal Info</h5>
          <Row className="mb-3">
            <Col>
              <Form.Control placeholder="First Name" />
            </Col>
            <Col>
              <Form.Control placeholder="Last Name" />
            </Col>
          </Row>
          <Form.Control type="email" placeholder="Email Address" className="mb-3" />
          <Form.Check
            type="checkbox"
            label="I agree that my submitted data is being collected and stored"
            className="mb-3"
          />
          <Button variant="danger" className="w-45 ms-5 rounded-pill">
            Donate Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Donations;
