import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
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


const slides = [
  {
    year: 1897,
    text1: "Shri Sankat Mochan Dham was founded by devoted saints who envisioned a sacred space where people could seek spiritual guidance and peace. In its early days, the temple was modest in size, yet it immediately became a beacon of devotion, drawing those who wished to connect with the divine and practice their faith with sincerity. The foundation laid during this year marked the beginning of a journey that would span generations, nurturing devotion, service, and community spirit...",
  },
  {
    year: 1921,
    text1: "By this time, the number of devotees visiting the temple had grown significantly. Recognizing the need for a larger space and improved facilities, the first major renovation was undertaken. The temple expanded to accommodate more worshippers, and new areas were created for meditation, religious teachings, and gatherings. This expansion allowed the temple to become not only a place of worship but also a center for cultural and spiritual education, strengthening its role in the lives of the community...",
  },
  {
    year: 1957,
    text1: "Shri Sankat Mochan Dham emerged as a central hub for festivals, celebrations, and community gatherings. Special poojas, kirtans, and devotional events were organized on a larger scale, bringing together devotees from surrounding regions. These celebrations fostered a strong sense of unity and devotion among the community, making the temple a focal point for spiritual and social life....",
  },
  {
    year: 1995,
    text1: "Recognizing the need for deeper spiritual engagement, a new ashram and meditation hall were constructed. This provided devotees with a serene environment for retreats, yoga, meditation, and satsangs. The new facilities allowed visitors to immerse themselves fully in spiritual practices and personal reflection, enhancing their connection with Lord Hanuman Ji and strengthening the temple’s role as a center of inner growth and learning.",
  },
  {
    year: 2010,
    text1: "Modernization efforts were undertaken to make the temple more accessible and comfortable for all devotees while preserving its traditional charm. Facilities were upgraded, pathways improved, and the overall infrastructure enhanced to support both daily worship and large-scale events. These improvements ensured that Shri Sankat Mochan Dham could continue its mission of devotion, service, and community engagement, welcoming new generations of devotees and visitors....",
  },
];

const AboutPage = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");

  const prevSlide = () => {
    setDirection("left");
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setDirection("right");
    setIndex(index === slides.length - 1 ? 0 : index + 1);
  };

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
            <p className="fw-bold text-danger">HISTORY</p>
            <h2 className="fw-bold" style={{fontSize:"3em"}}>A Brief History of Shri Sankat Mochan Dham</h2>

            
            <div className={`slide-box slide-${direction}`} >
              <h5 style={{color:'black'}}>{slides[index].year}</h5>
              <p style={{color:'grey'}}>{slides[index].text1}</p>
            </div>

            <div className="d-flex gap-2 mt-3">
              <button className="btn slide-btn" onClick={prevSlide}>←</button>
              <button className="btn slide-btn" onClick={nextSlide}>→</button>
            </div>
          </Col>
          <Col md={6} className='mb-5'>
            <img src={Temple} alt="Temple" className="img-fluid rounded" />
          </Col>
        </Row>
        <Row>

        </Row>
      </Container>
        <Container fluid >
          <Row className='text-center py-5 mb-5' style={{backgroundColor:"#4b1e3d"}}>
            <Col className='mx-3 p-5'>
              <GrYoga size={100} className="text-danger mb-2"/>
              <h2 className="fw-bold">
                <CountUp start={1} end={25} duration={5} style={{color:"#fff",fontSize:"1.5em"}} />
              </h2>
              <p style={{fontSize:"1.5em",color:"rgb(245, 122, 122)",fontWeight:"bold"}}>Yoga Teachers</p>
            </Col>
            <Col className='mx-3 p-5'>
              <MdOutlineVolunteerActivism size={100} className="text-danger mb-2"/>
              <h2 className="fw-bold">
                <CountUp start={1} end={15} duration={5} style={{color:"#fff",fontSize:"1.5em"}} />
              </h2>
              <p style={{fontSize:"1.5em",color:"rgb(245, 122, 122)",fontWeight:"bold"}}>Volunteers</p>
            </Col>
            <Col className='mx-3 p-5'>
            <BiSupport size={100} className="text-danger mb-2" />
              <h2 className="fw-bold">
                <CountUp start={1} end={12} duration={5} style={{color:"#fff",fontSize:"1.5em"}} />
              </h2>
              <p style={{fontSize:"1.5em",color:"rgb(245, 122, 122)",fontWeight:"bold"}}>Support Groups</p>
            </Col>
            <Col className='mx-3 p-5'>
              <MdFolderSpecial size={100} className="text-danger mb-2" />
              <h2 className="fw-bold">
                <CountUp start={1} end={8} duration={5} style={{color:"#fff",fontSize:"1.5em"}} />
              </h2>
              <p style={{fontSize:"1.5em",color:"rgb(245, 122, 122)",fontWeight:"bold"}}>Special Events</p>
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
       
<Container className="mt-5 mb-5">
  <Row className="text-center mb-4">
    <Col>
      <p style={{color:"rgb(245, 122, 122)", letterSpacing:"5px"}}>TESTIMONIALS</p>
      <h2 style={{fontWeight:"bold", fontSize:"2.5em"}}>What People Say About Our Temple</h2>
    </Col>
  </Row>
  <Row className="g-4">
    <Col md={4}>
      <Card className="h-100 text-center p-4 shadow-sm">
        <div style={{fontSize:"2em", color:"rgb(245, 122, 122)"}}>“</div>
        <Card.Body>
          <Card.Text style={{color:"grey"}}>
            "Visiting Shri Sankat Mochan Dham has been a life-changing experience. The serene atmosphere and the devotion here help me find peace and strength every time I come."
          </Card.Text>
          <Card.Img 
            variant="bottom" 
            src={Image1} 
            style={{width:"60px", height:"60px", borderRadius:"50%", margin:"10px auto"}} 
          />
          <Card.Title className="mt-2">Rajesh Kumar</Card.Title>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card className="h-100 text-center p-4 shadow-sm">
        <div style={{fontSize:"2em", color:"rgb(245, 122, 122)"}}>“</div>
        <Card.Body>
          <Card.Text style={{color:"grey"}}>
            "The temple staff and volunteers are so welcoming. Participating in the meditation and yoga sessions has helped me feel spiritually connected and more centered in my daily life."
          </Card.Text>
          <Card.Img 
            variant="bottom" 
            src={Image2} 
            style={{width:"60px", height:"60px", borderRadius:"50%", margin:"10px auto"}} 
          />
          <Card.Title className="mt-2">Anjali Verma</Card.Title>
        </Card.Body>
      </Card>
    </Col>
    <Col md={4}>
      <Card className="h-100 text-center p-4 shadow-sm">
        <div style={{fontSize:"2em", color:"rgb(245, 122, 122)"}}>“</div>
        <Card.Body>
          <Card.Text style={{color:"grey"}}>
            "I have attended several festivals here, and each time I feel the love, energy, and blessings of Lord Hanuman Ji. This temple truly brings the community together in faith."
          </Card.Text>
          <Card.Img 
            variant="bottom" 
            src={Image3} 
            style={{width:"60px", height:"60px", borderRadius:"50%", margin:"10px auto"}} 
          />
          <Card.Title className="mt-2">Sunil Sharma</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  </Row>
</Container>

      <Footer />
    </div>
  )
}

export default AboutPage
