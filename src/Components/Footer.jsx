import React from "react";
import { Container, Row, Col, Form, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <section className="join-section text-center">
        <Container>
          <Row>
            <Col sm={12} md={12} data-aos="fade-left">
          <span className="join-subtitle">JOIN</span>
        <h2 className="join-title">Learn To Be Sustainably Happy!</h2>
        <p className="join-subtext">
          Join the Happiness Program. Experience a calm mind, reduced anxiety,
          increased energy levels and sustainable happiness everyday!
        </p>   
            </Col>
          </Row>
        </Container>
    
        <Container>
          <Form className="join-form" data-aos="fade-right">
            <Row className="justify-content-center g-3">
              <Col xs={12} md={4} >
                <Form.Control type="text" placeholder="Name*" />
              </Col>
              <Col xs={12} md={4}>
                <Form.Control type="text" placeholder="Mobile Number*" />
              </Col>
              <Col xs={12} md={4}>
                <Form.Control type="email" placeholder="Email Address*" />
              </Col>
            </Row>

            <Row className="justify-content-center mt-3">
              <Col xs={12} md={8} className="text-start text-md-center">
                <Form.Check
                  type="checkbox"
                  id="agree"
                  label="I agree that my submitted data is being collected and stored."
                />
              </Col>
            </Row>

            <Button type="submit" className="register-btn mt-3">
              Register Now
            </Button>
          </Form>
        </Container>
      </section>
      <footer className="footer text-center">
        <Nav className="justify-content-center footer-nav gap-5">
          <Link className='nav-link' to="/" >
            Home
          </Link>
          <Link className='nav-link' to="/services">
            Services
            </Link>
          <Link className='nav-link' to="/events">
                        Events
                      </Link> 
          <Link className="nav-link" to="/">VIHARA</Link>
          <Link className='nav-link' to="/donations">
                        Donations
                      </Link>
          <Link className='nav-link' to="/about">
                        About
                      </Link>
          <Link className='nav-link' to="/contacts">
                        Contacts
                      </Link>
        </Nav>
        <p className="copyright">ThemeREX &copy; 2025. All Rights Reserved.</p>
      </footer>
    </div>
  )
};

export default Footer;
