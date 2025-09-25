import React from 'react'
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Event1 from '../assets/Images/event1.jpg';
import Event2 from '../assets/Images/Event2.jpg';
import Event3 from '../assets/Images/event3.jpg';
import Event4 from '../assets/Images/event4.jpg';
import { Link } from 'react-router-dom';
const events = [
  {
    id: 1,
    date: "24",
    month: "Nov",
    title:  "Nag panchami",
    paragraph:"Nag Panchami is a traditional Hindu festival dedicated to the worship of snakes or serpents, known a...",
    time: "10:00 AM - 02:00 PM",
    image:Event1,
  },
  {
    id: 2,
    date: "24",
    month: "Nov",
    title: "Krishna Janmashtami",
    paragraph:"Krishna Janmashtami is an annual Hindu festival that celebrates the birth of Lord Krishna, the eight...",
    time: "06:00 PM - 12:00 AM",
    image:Event2,
  },
  {
    id: 3,
    date: "23",
    month: "Dec",
    title: "Ganesh Chaturthi",
    paragraph:"Ganesh Chaturthi is a vibrant Hindu festival celebrating the birth of Lord Ganesha, the elephant-hea...",
    time: "06:00 PM - 12:00 AM",
    image:Event3,
  },
  {
    id: 4,
    date: "23",
    month: "Dec",
    title: "Dussehra",
    paragraph:"Dussehra, also known as Vijayadashami, is a vibrant and significant Hindu festival celebrated with i...",
    time: "9:00 am to 04:30 pm",
    image:Event4,
  }
];

const EventsPage = () => {
  return (
    <div>
      <Container fluid className="my-5">
        <Row>
            <Col sm={12} md={12} data-aos="zoom-in"> 
                <p className='section-title'>EVENTS</p>
                <h2 className="text-center mb-4">Celebrations & Spiritual Gatherings</h2>
            </Col>
        </Row>
      <Row data-aos="fade-up"> 
        {events.map((event) => (
          <Col md={12} key={event.id} className="mb-4">
            <Card className="d-flex flex-row shadow-sm event-card-container" style={{width:"80%",height:"90%",marginLeft:"10%"}}>
              <Card.Img
                variant="left"
                src={event.image}
                style={{ width: "200px" }}
              />
              <Card.Body className="d-flex justify-content-between align-items-center">
                <div>
                  <div
                    style={{
                      backgroundColor: " rgb(247, 222, 214)",
                      color:"rgb(245, 122, 122)",
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      fontWeight: "bold",
                      left:"15.5%",
                      bottom:"35%",
                      position:"absolute",
                    }}
                  >
                    <span>{event.date}</span>
                    <small>{event.month}</small>
                  </div>
                  <div style={{marginLeft:"70px"}}>
                    <h5>{event.title}</h5>
                    <p style={{color:"grey"}}>{event.paragraph}</p>
                  <p className="event-time">From {event.time}</p>
                </div>
              </div>
                <Button variant="danger" className="rounded-pill px-4">
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col sm={12} md={12}>
        <Link to="/eventsInnerPage" className="btn btn-primary eBtn">
          Events</Link>
        </Col>
      </Row>
    </Container>
    </div>
  )
}
export default EventsPage