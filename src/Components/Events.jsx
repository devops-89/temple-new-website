import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import "../index.css";


const Events = () => {
  return (
    <section className="events-section" id="events">
      <Container fluid>
        <Row>
        <Col md={6}>
        <div className="event-img">
          <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.6)",
              }}>
          <div className="mb-4 eText">
              <h2 className="hText fs-2">Dealing with Uncertainty and Distress  of Daily Routine</h2>
              <button className="eBtn">Read More</button>
          </div>
          </div>
        </div>
        </Col>  
        <Col md={6}>
          <Row>
              <Col md={12}>
              <div className="event-img2">
          <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.6)",
              }}>
          <div className="mb-4 eText">
              <h2 className="hText fs-2">Dealing with Uncertainty and Distress  of Daily Routine</h2>
              <button className="eBtn">Read More</button>
          </div>
          </div>
        </div>
              </Col>
          </Row>
          <Row>
            <Col md={12}>
            <div className="event-img3">
          <div
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.6)",
              }}>
          <div className="mb-4 eText">
              <h2 className="hText fs-2">Dealing with Uncertainty and Distress  of Daily Routine</h2>
              <button className="eBtn">Read More</button>
          </div>
          </div>
        </div>
            </Col>
          </Row>   
        </Col>  
        </Row>
      </Container>
    </section>
  );
};

export default Events;
