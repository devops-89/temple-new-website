import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Icon from "../assets/Images/react-icons.svg";

const cards = [
  {
    img: Icon,
    heading: "Ashram",
    paragraph:
      "Our Ashram is a peaceful space for meditation, learning, and spiritual growth. It is open to all who wish to spend time in prayer, reflection, or seva (selfless service). The Ashram also hosts satsangs, yoga sessions, and spiritual teachings that guide devotees toward a balanced and meaningful life.",
  },
  {
    img: Icon,
    heading: "Get Involved",
    paragraph:
      "Be a part of our temple family by joining in seva and community activities. From helping during festivals and daily rituals to volunteering in cultural or social programs, every small effort brings great blessings. Together, we can keep the spirit of devotion, service, and unity alive.",
  },
  {
    img: Icon,
    heading: "Donation",
    paragraph:
      "Your kind contributions help us maintain the temple, organize festivals, and support charitable work like education, food distribution, and health care for those in need. Every donation, big or small, is a step towards spreading love, faith, and service. Contribute with devotion and be blessed by Lord Hanuman Ji’s grace.",
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
              Experience Yoga at Our Shri Sankat Mochan Dham
            </h2>
          </Col>
          <Col md={6} sm={12} data-aos="fade-left" className="fs-5">
            <p style={{color:"grey"}}>
              Welcome to Shri Sankat Mochan Dham, a holy place where faith, devotion, 
              and peace come together. 
              Our temple is a guiding light for devotees, 
              helping them receive blessings and find inner peace.
            </p>
            <p style={{color:"grey"}}>
              The temple is not just a place to pray—it is also a home for cultural, spiritual, and social activities. Every prayer, every ritual, 
              and every festival celebrated here shows the values of unity, service, and devotion.
              This dham is dedicated to Lord Hanuman Ji, who is known as the remover of difficulties and the symbol of strength and devotion. 
              The peaceful environment, the sound of prayers, 
              and the light of diyas make everyone feel connected to the divine.
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
                style={{ width: "20%", margin: "10% auto"}}
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
