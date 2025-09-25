import React from 'react'
import Temple from '../assets/Images/templeImg.jpg'
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link} from "react-router-dom";

import Image1 from '../assets/Images/event1.jpg';
import Image2 from '../assets/Images/Event2.jpg';
import Image3 from '../assets/Images/event3.jpg';
import Image4 from '../assets/Images/event4.jpg';
import Image5 from '../assets/Images/event5.jpg';
import Image6 from '../assets/Images/event6.jpg';
import Image7 from '../assets/Images/event7.jpg';


const events = [
  {
    id: 1,
    date: "18",
    month: "Nov",
    title: "Yoga & Meditation Workshop ",
    time: "7:30 am to 12:00 pm",
    image:Image1,
  },
  {
    id: 2,
    date: "18",
    month: "Nov",
    title: "Sankat Mochan Pooja",
    time: "8:00 am to 5:00 pm",
    image:Image2,
  },
  {
    id: 3,
    date: "19",
    month: "Nov",
    title: "Spiritual Retreat Weekend",
    time: "7:30 am to 4:30 pm",
    image:Image3,
  },
  {
    id: 4,
    date: "24",
    month: "Nov",
    title: "Cultural Festival Celebration",
    time: "6:00 am to 6:00 pm",
    image:Image4,
  },
  {
    id:5,
    date:24,
    month:"Nov",
    title:"Anniversary Prayers & Community Feast",
    time:"8:00 am to 5:00 pm",
    image:Image5
  },
  {
    id:6,
    date:24,
    month:"Nov",
    title:"Ramayana Recitation Week",
    time:"9:30 am to 7:00 pm",
    image:Image6
  },
  {
    id:7,
    date:24,
    month:"Nov",
    title:"Anniversary Prayers & Community Feast",
    time:"10:00 am to 5:00 pm",
    image:Image7
  },
  {
    id:8,
    date:25,
    month:"Nov",
    title:"India: Unravel the Most Amazing Spots",
    time:"8:00 am to 5:00 pm",
    image:Image4
  },
];
const EventsInnerPage = () => {
  return (
    <div>
      <Header/>
      <Container fluid className="p-0">
        <Row>
          <Col sm={12} md={12}>
            <div className="banner text-center mb-5">
              <img src={Temple} alt="Temple" className="img-fluid w-100" />
              <h1 className="fw-bold text-white">Events List</h1>
              <ul className='list-unstyled d-flex gap-4'>
                <li>
                  <Link className='nav-link' to="/">Home</Link>
                </li>
                <li>/</li>
                <li><Link className='nav-link' to="/eventsList">Events List</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="my-5">
              <Row>
                  <Col sm={12} md={12} data-aos="zoom-in">
                      <p className='section-title'>EVENTS</p>
                      <h2 className="text-center mb-4">Upcoming Events And Workshops</h2>
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
                            backgroundColor: "rgb(247, 222, 214)",
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
                          <p className="event-time">From {event.time}</p>
                        </div>
                        </div>
                      <Button variant="danger" className="rounded-pill px-4">
                        Info
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
          <Footer/>
    </div>
  )
}

export default EventsInnerPage