import React from 'react'
import Temple from '../assets/Images/templeImg.jpg'
import MapImage from '../assets/Images/map.jpg'
import Icon from '../assets/Images/react-icons.svg'
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from "react-router-dom";
const ContactsPage = () => {
  return (
    <div>
      <Header/>
      <Container fluid className="p-0">
        <Row>
          <Col sm={12} md={12}>
            <div className="banner text-center mb-5">
              <img src={Temple} alt="Temple" className="img-fluid w-100" />
              <h1 className="fw-bold text-white">Contacts</h1>
              <ul className='list-unstyled d-flex gap-4'>
                <li>
                  <Link className='nav-link' to="/">Home</Link>
                </li>
                <li>/</li>
                <li><Link className='nav-link' to="/contacts">Contacts</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5" sm={12} md={12}>
        <Row>
          <Col sm={12}>
            <img src={MapImage} alt="Map" className="mapImg mx-5 img-fluid rounded shadow" />
          </Col>
        </Row>
      </Container>

      <Container className="mb-5">
        <Row className="text-center">
          <Col sm={12} md={4} className="mb-3">
            <Card className="py-4 shadow">
              <Card.Img src={Icon} className='card-icon mb-5'/>
              <h5 className="fw-bold">Address</h5>
              <p style={{color:"grey"}}>100 Warren St<br />Jersey City, NJ 07302</p>
            </Card>
          </Col>
          <Col sm={12} md={4} className="mb-3">
            <Card className="py-4 shadow">
              <Card.Img src={Icon} className='card-icon mb-5'/>
              <h5 className="fw-bold">Mail</h5>
              <p style={{color:"grey"}}>info@example.com<br />volunteer@example.com</p>
            </Card>
          </Col>
          <Col sm={12} md={4} className="mb-3">
            <Card className="py-4 shadow">
              <Card.Img src={Icon} className='card-icon mb-5'/>
              <h5 className="fw-bold">Hours</h5>
              <p style={{color:"grey"}}>Monday - Saturday<br />8:00 AM - 8:30 PM</p>
            </Card>
          </Col>
        </Row>
      </Container>


      <Container className="my-5">
        <Row className="justify-content-center">
          <Col sm={12} md={8}>
            <p className='form-mail'>MAIL US</p>
            <h3 className="text-center fw-bold fs-1 mb-4">Have a Question? Drop Us a Line!</h3>
            <Form className="p-5">
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Control type="text" placeholder="Name*" required />
                </Col>
                <Col md={6}>
                  <Form.Control type="email" placeholder="Email*" required />
                </Col>
              </Row>
              <Form.Group className="mb-3">
                <Form.Control as="textarea" rows={8} placeholder="Message" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I agree that my submitted data is being collected and stored." />
              </Form.Group>
              <Button variant="danger" type="submit" className='w-50'>
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default ContactsPage
  