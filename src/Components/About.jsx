import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Pandit1 from '../assets/Images/pandit1.png'
import Pandit2 from '../assets/Images/pandit2.png'
import Pandit3 from '../assets/Images/Pandit3.png'

const cards = [
  {
    img: Pandit1,
    heading: "Pandit Pankaj Dixit",
    paragraph:
      "Pandit Pankaj Dixit began practicing as a priest over 10 years ago. He holds a First Class Masters Degree in Sanskrit and Art History from The National Museum, New Delhi, India.",
  },
  {
    img: Pandit2,
    heading: "Pandit Laxman Sharma",
    
  },
  {
    img:Pandit3 ,
    heading: "Pandit Rajesh Jha",
  },
];

const About = () => {
  return (
    <section className="about-section">
      <Container>
        <Row className="align-items-center mt-5">
          <Col md={6} sm={12} data-aos="fade-right">
            <p className="fs-6" style={{color:"Tomato",letterSpacing:"5px"}}>Welcome</p>
            <h2 className="fs-1 fw-bold">
              Hinduism: A Diverse and Evolving Religious Mainstream
            </h2>
          </Col>
          <Col md={6} sm={12} data-aos="fade-left" className="fs-5">
            <p style={{color:"grey"}}>
              Hinduism refers to a religious mainstream which evolved organically and spread over a large territory marked by significant ethnic and cultural diversity. This mainstream evolved both by innovation from within, and by assimilation of external traditions or cults into the Hindu fold. The result is an enormous variety of religious traditions, ranging from innumerable small, unsophisticated cults to major religious movements with millions of adherents spread over the entire subcontinent.
            </p>
            
          </Col>
        </Row>

        
        <Row className="mt-5">
        {cards.map((card, idx) => (
          <Col key={idx} sm={12} md={4} className="mb-4">
            <Card className="h-100 text-center py-5 px-2 shadow-sm about-card" data-aos="fade-up">
              <Card.Img
                variant="top"
                src={card.img}
                style={{ width: "50%",borderRadius:"50%", margin: "10% auto"}}
              />
              <Card.Body>
                <Card.Title className="fw-bold main-head">{card.heading}</Card.Title>
                <Card.Text style={{color:"grey"}}>{card.paragraph}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>
    </section>
  );
};

export default About;
