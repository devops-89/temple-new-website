import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../index.css";
import Img1 from "../assets/Images/ganpati.jpg";
import pImage1 from "../assets/Images/pImg1.jpg";
import pImage2 from '../assets/Images/pImg2.jpg';

const Programs = () => {
  return (
    <section className="programs-section" id="programs">
      <Container>
        {/* Section Heading */}
        <Row>
          <Col className="text-center mb-5" data-aos="zoom-in">
            <p className="section-title">PROGRAMS</p>
            <h3 className="section-details">Discover Inner Peace: Meditation</h3>
            <h3 className="section-details">Yoga & More...</h3>
          </Col>
        </Row>

        <Row className="align-items-center mb-5" data-aos="fade-up">
          <Col md={6}>
            <img src={pImage1} alt="program" className="img-fluid" 
            style={{ height: "200px", objectFit: "cover", width: "100%" }}/>
          </Col>
          <Col md={6}>
            <div style={{textAlign:"left"}}>
              <h2 className="fs-3 fw-bold pColor">Yoga</h2>
              <p style={{ color: "grey" }}>
                Daily and weekly yoga classes promote physical health, mental clarity, and spiritual growth. 
                Simple postures, breathing techniques, 
                and mindfulness practices bring harmony to body and mind.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="align-items-center mb-5" data-aos="fade-up">
          <Col md={6} className="order-md-2">
            <img
              src={pImage2}
              alt="program"
              style={{ height: "200px", objectFit: "cover", width: "100%" }}
            />
          </Col>
          <Col md={6} className="order-md-1">
            <div style={{textAlign:"right"}}>
              <h2 className="fs-3 fw-bold pColor">Retreats</h2>
              <p style={{ color: "grey" }}>
                Our spiritual retreats offer a chance to step away from everyday life and immerse yourself in prayers, teachings, and silence. 
                Surrounded by peace, participants return refreshed, focused, and spiritually uplifted.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center mb-5" data-aos="fade-up">
          <Col md={6}>
            <img src={Img1} alt="program" className="img-fluid" 
            style={{ height: "200px", objectFit: "cover", width: "100%" }}/>
          </Col>
          <Col md={6}>
            <div style={{textAlign:"left"}}>
              <h2 className="fs-3 fw-bold pColor">Free Programs</h2>
              <p style={{ color: "grey" }}>
                We regularly conduct free community programs such as food distribution, health check-ups, and awareness camps. 
                These initiatives reflect the temple’s commitment to seva (selfless service) and social well-being.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center mb-5" data-aos="fade-up">
          <Col md={6}>
            <div style={{textAlign:"left"}}>
              <h2 className="fs-3 fw-bold pColor">More Activities</h2>
              <p style={{ color: "grey" }}>
                Apart from regular sessions, we celebrate festivals, host satsangs, 
                and organize cultural events that bring people together in devotion and joy.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <img src={pImage1} alt="program" className="img-fluid" 
            style={{ height: "200px", objectFit: "cover", width: "100%" }}/>
          </Col>  
        </Row>
        <Row>
          <Col md={12}>
          <button className="pBtn">Other Programs</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Programs;
