import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Temple2 from '../assets/Images/temple2.png'
import Temple from '../assets/Images/templeImg.jpg'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CountUp from "react-countup";
import Icon from "../assets/Images/react-icons.svg";
import Shri from "../assets/Images/hanumanJi.jpg";
import ShriG from "../assets/Images/ganpati.jpg";
import Image1 from "../assets/Images/pImg1.jpg";
import Image2 from "../assets/Images/event1.jpg";
import Image3 from "../assets/Images/event2.jpg";
import Image4 from "../assets/Images/event3.jpg";
import Image5 from "../assets/Images/event4.jpg";
import Image6 from "../assets/Images/event5.jpg";
import Image7 from "../assets/Images/event6.jpg";
import Image8 from "../assets/Images/event7.jpg";

import { GrYoga } from "react-icons/gr";
import {MdOutlineVolunteerActivism,MdFolderSpecial} from "react-icons/md";
import { BiSupport } from "react-icons/bi";

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



const AboutPage = () => {
  
  return (
    <div>
      <Header />

      <Container fluid className="p-0">
        <Row>
          <Col sm={12} md={12}>
            <div className="banner text-center mb-5">
              <img src={Temple} alt="Temple" className="img-fluid w-100" />
              <h1 className="fw-bold text-white">About Us</h1>
              <ul className='list-unstyled d-flex gap-4'>
                <li><Link className='nav-link' to="/">Home</Link></li>
                <li>/</li>
                <li><Link className='nav-link' to="/shopPage">About Us</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Cards */}
      <Container>
        <Row className="mt-5">
          {cards.map((card, idx) => (
            <Col key={idx} sm={12} md={4} className="mb-4">
              <Card className="h-100 text-center py-5 px-2 shadow-sm about-card">
                <Card.Img variant="top" src={card.img} style={{ width: "20%", margin: "10% auto" }} />
                <Card.Body>
                  <Card.Title className="fw-bold main-head">{card.heading}</Card.Title>
                  <Card.Text style={{ color: "grey" }}>{card.paragraph}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

     
      <Container className="mt-5 mb-5">
        <Row>
          <Col md={6}>
            <h2 className="fw-bold" style={{fontSize:"3em"}}>About Edmonton Mandir</h2>
            <p style={{color:"grey"}}>Edmonton Mandir is a vibrant spiritual center, dedicated to promoting Hindu culture, traditions, and values. We provide a welcoming space for worship, community gatherings, and cultural celebrations, uniting people of all backgrounds in devotion and harmony.
<br/><br/>
<b>Praise & Worship</b>
<br/>
Join us for daily aarti and bhajans, offering prayers and devotion to various Hindu deities in a serene and uplifting atmosphere.
<br/><br/>
<b>Hindus celebrate</b><br/>

We joyfully celebrate important Hindu festivals and special occasions, bringing the community together to preserve and pass on our rich traditions.
<br/><br/>
<b>Prayers</b><br/>

Participate in daily and special prayers to seek blessings, peace, and spiritual growth for you and your family.</p>
            
           
          </Col>
          <Col md={6} className='mb-5'>
            <img src={Temple2} alt="Temple" className="img-fluid rounded" />
          </Col>
        </Row>
        
      </Container>
       
        <Container>
          <Row>
            <Col md={12} sm={12} className='text-center mt-5'>
              <p style={{color:"rgb(245, 122, 122)",letterSpacing:"5px"}} >GALLERY</p>
              <h2 style={{fontWeight:"bold",fontSize:"2.5em"}}>The Gallery of Our Temple</h2>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
            <img src={Shri} alt="" className='img-fluid w-100 mb-3'/>
            </Col>
            <Col md={6} data-aos="zoom-in">
            <Row className='mb-3'>
              <Col>
              <img src={Image1} alt="" className='img-fluid w-100 h-100'/>
              </Col>
              <Col>
              <img src={Image2} alt="" className='img-fluid w-100 h-100'/>
              </Col>
            </Row>
            <Row>
              <Col>
              <img src={Image3} alt="" className='img-fluid w-100 h-100'/>
              </Col>
              <Col>
              <img src={Image4} alt="" className='img-fluid w-100 h-100'/>
              </Col>
            </Row>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
            <Row>
              <Col className='mb-2'>
              <img src={Image5} alt="" className='img-fluid w-100 h-100 '/>
              </Col>
              <Col className='mb-2'>
              <img src={Image6} alt="" className='img-fluid w-100 h-100 '/>
              </Col>
            </Row>
            <Row>
              <Col>
              <img src={Image7} alt="" className='img-fluid w-100 h-100'/>
              </Col>
              <Col>
              <img src={Image8} alt="" className='img-fluid w-100 h-100'/>
              </Col>
            </Row>
            </Col>
            <Col md={6}>
            <img src={ShriG} alt="" className='img-fluid w-100 h-100'/>
            </Col>
          </Row>
        </Container>
       

      <Footer />
    </div>
  )
}

export default AboutPage
