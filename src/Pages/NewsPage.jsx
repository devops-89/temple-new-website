import React from 'react'
import Temple from '../assets/Images/templeImg.jpg'
import { FaRegComment, FaRegCalendarAlt } from "react-icons/fa"; 
import News1 from '../assets/Images/event1.jpg';
import News2 from '../assets/Images/event2.jpg';
import News3 from '../assets/Images/event3.jpg';
import News4 from '../assets/Images/event4.jpg';
import News5 from '../assets/Images/event5.jpg';
import News6 from '../assets/Images/event6.jpg';
import News7 from '../assets/Images/event7.jpg';

import { Container, Row, Col, Form, Button, Card ,Nav} from "react-bootstrap";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
const NewsPage = () => {
  return (
    <div>
      <Header/>
      <Container fluid className="p-0">
        <Row>
          <Col sm={12} md={12}>
            <div className="banner text-center mb-5">
              <img src={Temple} alt="Temple" className="img-fluid w-100" />
              <h1 className="fw-bold text-white">All Posts</h1>
              <ul className='list-unstyled d-flex gap-4'>
                <li>
                  <Link className='nav-link' to="/">Home</Link>
                </li>
                <li>/</li>
                <li><Link className='nav-link' to="/news">All Posts</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col md={8}>
            <Card className='mb-5 card1'>
              <Card.Img src={News1}/>
              <div className='m-5'>
                <h2>How to Program Yourself for Happiness</h2>
                <ul className='list-unstyled d-flex gap-5 news-list'>
                  <li><FaRegCalendarAlt/> 06 Dec 2018</li>
                  <li><FaRegComment/> 1 comment</li>
                </ul>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                  sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                  Ut wisi enim ad minim veniam, quis nostrud exerci…
                </p>
                <button value="submit" variant="danger" className='card1-btn'>Read More</button>
              </div>
            </Card>
            <Card className='mb-5 '>
              <Card.Img src={News2}/>
              <div className='m-5'>
                <h2 style={{color:" #3b0f2d"}}>Understand the Concepts With Orthodox Interpretation.</h2>
                <ul className='list-unstyled d-flex gap-5 news-list'>
                  <li><FaRegCalendarAlt/> 22 Jul 2019</li>
                  <li><FaRegComment/> 0 comment</li>
                </ul>
                <p style={{color:"grey"}}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                  sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                  Ut wisi enim ad minim veniam, quis nostrud exerci…
                </p>
                <button value="submit" variant="danger" className='card1-btn'>Read More</button>
              </div>
            </Card>
            <Card className='mb-5'>
              <Card.Img src={News1}/>
              <div className='m-5'>
                <h2 style={{color:" #3b0f2d"}}>Learn and Practice Hindu Tradition and Culture.</h2>
                <ul className='list-unstyled d-flex gap-5 news-list'>
                  <li><FaRegCalendarAlt/> 22 Jul 2019</li>
                  <li><FaRegComment/> 0 comment</li>
                </ul>
                <p style={{color:"grey"}}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                  sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                  Ut wisi enim ad minim veniam, quis nostrud exerci…
                </p>
                <button value="submit" variant="danger" className='card1-btn'>Read More</button>
              </div>
            </Card>
            <Card className='mb-5'>
              <Card.Img src={News1}/>
              <div className='m-5'>
                <h2 style={{color:" #3b0f2d"}}>Know the Basic Tenets With Traditional Definitions.</h2>
                <ul className='list-unstyled d-flex gap-5 news-list'>
                  <li><FaRegCalendarAlt/> 22 July 2019</li>
                  <li><FaRegComment/> 0 comment</li>
                </ul>
                <p style={{color:"grey"}}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                  sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                  Ut wisi enim ad minim veniam, quis nostrud exerci…
                </p>
                <button value="submit" variant="danger" className='card1-btn'>Read More</button>
              </div>
            </Card>
            <Card className='mb-5'>
              <Card.Img src={News1}/>
              <div className='m-5'>
                <h2 style={{color:" #3b0f2d"}}>Understand Concepts with the Orthodox Interpretation</h2>
                <ul className='list-unstyled d-flex gap-5 news-list'>
                  <li><FaRegCalendarAlt/> 25 Dec 2018</li>
                  <li><FaRegComment/> 0 comment</li>
                </ul>
                <p style={{color:"grey"}}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                  sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                  Ut wisi enim ad minim veniam, quis nostrud exerci…
                </p>
                <button value="submit" variant="danger" className='card1-btn'>Read More</button>
              </div>
            </Card>
            <Card className='mb-5'>
              <Card.Img src={News1}/>
              <div className='m-5'>
                <h2 style={{color:" #3b0f2d"}}>Dealing with Uncertainty and Distress of Daily Routine</h2>
                <ul className='list-unstyled d-flex gap-5 news-list'>
                  <li><FaRegCalendarAlt/> 10 Dec 2016</li>
                  <li><FaRegComment/> 2 comment</li>
                </ul>
                <p style={{color:"grey"}}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                  sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                  Ut wisi enim ad minim veniam, quis nostrud exerci…
                </p>
                <button value="submit" variant="danger" className='card1-btn'>Read More</button>
              </div>
            </Card>
            <Card className='mb-5'>
              <Card.Img src={News1}/>
              <div className='m-5'>
                <h2 style={{color:" #3b0f2d"}}>How to Program Yourself for Happiness</h2>
                <ul className='list-unstyled d-flex gap-5 news-list'>
                  <li><FaRegCalendarAlt/> 06 Dec 2018</li>
                  <li><FaRegComment/> 1 comment</li>
                </ul>
                <p style={{color:"grey"}}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                  sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                  Ut wisi enim ad minim veniam, quis nostrud exerci…
                </p>
                <button value="submit" variant="danger" className='card1-btn'>Read More</button>
              </div>
            </Card>
            <Card className='mb-5'>
              <Card.Img src={News1}/>
              <div className='m-5'>
                <h2 style={{color:" #3b0f2d"}}>How to Program Yourself for Happiness</h2>
                <ul className='list-unstyled d-flex gap-5 news-list'>
                  <li><FaRegCalendarAlt/> 06 Dec 2018</li>
                  <li><FaRegComment/> 1 comment</li>
                </ul>
                <p style={{color:"grey"}}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
                  sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
                  Ut wisi enim ad minim veniam, quis nostrud exerci…
                </p>
                <button value="submit" variant="danger" className='card1-btn'>Read More</button>
              </div>
            </Card> 
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default NewsPage
