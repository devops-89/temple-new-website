import React from 'react'
import Temple from '../assets/Images/templeImg.jpg'
import Img1 from '../assets/Images/event1.jpg';
import Img2 from '../assets/Images/event2.jpg';
import Img3 from '../assets/Images/event3.jpg';
import Img4 from '../assets/Images/event4.jpg';
import Img5 from '../assets/Images/event5.jpg';
import Img6 from '../assets/Images/event6.jpg';
import { Container, Row, Col,Card,ProgressBar} from "react-bootstrap";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
const DonationsPage = () => {
  return (
    <div>
      <Header/>
      <Container fluid className="p-0">
        <Row>
          <Col sm={12} md={12}>
            <div className="banner text-center mb-5">
              <img src={Temple} alt="Temple" className="img-fluid w-100" />
              <h1 className="fw-bold text-white">Donations Programs</h1>
              <ul className='me-5 list-unstyled d-flex gap-4'>
                <li>
                  <Link className='nav-link' to="/">Home</Link>
                </li>
                <li>/</li>
                <li><Link className='nav-link' to="/donationsPage">Donations Programs</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
              <Row>
                <Col sm={12} md={6}>
                  <Card className='mb-5 dCard1'>
                    <Card.Img src={Img1}/>
                    <div className='mx-5 mt-4 mb-2'>
                      <h2>Help Us Promote the Healthy Way of Living</h2>
                      <p>
                        Ut wisi enim ad minim veniam, 
                        quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip…
                      </p>
                      <button value="submit" variant="danger" className='card1-btn'>Read More</button>
                      <ProgressBar now={0} className="mt-4" />  
                      <Row className='mt-3'>
                        <Col md={6}>
                      <ul className='list-unstyled dCard1-list '>
                        <li className='fw-bold fs-5' style={{color:"#6e385dff"}}>$380.00</li>
                        <li style={{color:"#6e385dff"}}>of $16,000</li>
                      </ul>
                      </Col>
                      <Col md={6}>
                      <ul className='list-unstyled text-end'>
                        <li className='fw-bold fs-5' style={{color:"#6e385dff"}}>9</li>
                        <li style={{color:"#6e385dff"}}>donations</li>
                      </ul>
                      </Col>
                      </Row>
                    </div>
                  </Card>
                  <Card className='mb-5 dCard1'>
                    <Card.Img src={Img2}/>
                    <div className='mx-5 mt-4 mb-2'>
                      <h2>Keeping the Ancient Buddhist Library</h2>
                      <p>
                        Ut wisi enim ad minim veniam, 
                        quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip…
                      </p>
                      <button value="submit" variant="danger" className='card1-btn'>Read More</button>
                      <ProgressBar now={0} className="mt-4" />
                      <Row className='mt-3'>
                        <Col md={6}>
                      <ul className='list-unstyled '>
                        <li className='fw-bold fs-5' style={{color:"#6e385dff"}}>$380.00</li>
                        <li style={{color:"#6e385dff"}}>of $16,000</li>
                      </ul>
                      </Col>
                      <Col md={6}>
                      <ul className='list-unstyled text-end'>
                        <li className='fw-bold fs-5' style={{color:"#6e385dff"}}>9</li>
                        <li style={{color:"#6e385dff"}}>donations</li>
                      </ul>
                      </Col>
                      </Row>  
                    </div>
                  </Card>
                  <Card className='mb-5 dCard1'>
                    <Card.Img src={Img3}/>
                    <div className='mx-5 mt-4 mb-2'>
                      <h2>Remembering Ancestors and the Departed</h2>
                      <p>
                        Ut wisi enim ad minim veniam, 
                        quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip…
                      </p>
                      <button value="submit" variant="danger" className='card1-btn'>Read More</button>
                      <ProgressBar now={0} className="mt-4" /> 
                      <Row className='mt-3'>
                        <Col md={6}>
                      <ul className='list-unstyled '>
                        <li className='fw-bold fs-5' style={{color:"#6e385dff"}}>$380.00</li>
                        <li style={{color:"#6e385dff"}}>of $16,000</li>
                      </ul>
                      </Col>
                      <Col md={6}>
                      <ul className='list-unstyled text-end'>
                        <li className='fw-bold fs-5' style={{color:"#6e385dff"}}>9</li>
                        <li style={{color:"#6e385dff"}}>donations</li>
                      </ul>
                      </Col>
                      </Row> 
                    </div>
                  </Card>
                </Col>
                <Col sm={12} md={6}>
                  <Card className='mb-5 dCard1' style={{height:"121vh"}}>
                    <Card.Img src={Img4} style={{height:"67vh"}}/>
                    <div className='mx-5 mt-4 mb-2'>
                      <h2>Support the Young Buddhist Artists</h2>
                      <p>
                        Ut wisi enim ad minim veniam, 
                        quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip…
                      </p>
                      <button value="submit" variant="danger" className='card1-btn'>Read More</button>
                      <ProgressBar now={0} className="mt-4" />
                      <Row className='mt-3'>
                        <Col md={6}>
                      <ul className='list-unstyled '>
                        <li className='fw-bold fs-5' style={{color:"#6e385dff"}}>$380.00</li>
                        <li style={{color:"#6e385dff"}}>of $16,000</li>
                      </ul>
                      </Col>
                      <Col md={6}>
                      <ul className='list-unstyled text-end'>
                        <li className='fw-bold fs-5' style={{color:"#6e385dff"}}>9</li>
                        <li style={{color:"#6e385dff"}}>donations</li>
                      </ul>
                      </Col>
                      </Row>
                    </div>
                  </Card>
                  <Card className='mb-5 dCard1'>
                    <Card.Img src={Img5}/>
                    <div className='mx-5 mt-4 mb-2'>
                      <h2>Saving the Bells of Old Temples</h2>
                      <p>
                        Ut wisi enim ad minim veniam, 
                        quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip…
                      </p>
                      <button value="submit" variant="danger" className='card1-btn'>Read More</button>
                      <ProgressBar now={0} className="mt-4" />
                      <Row className='mt-3'>
                        <Col md={6}>
                      <ul className='list-unstyled '>
                        <li className='fw-bold fs-5' style={{color:"#6e385dff"}}>$380.00</li>
                        <li style={{color:"#6e385dff"}}>of $16,000</li>
                      </ul>
                      </Col>
                      <Col md={6}>
                      <ul className='list-unstyled text-end'>
                        <li className='fw-bold fs-5' style={{color:"#6e385dff"}}>9</li>
                        <li style={{color:"#6e385dff"}}>donations</li>
                      </ul>
                      </Col>
                      </Row>
                    </div>
                  </Card>
                  <Card className='mb-5 dCard1'>
                    <Card.Img src={Img6} style={{height:"44vh"}}/>
                    <div className='mx-5 mt-4 mb-2'>
                      <h2>Gurudakshina: The Practice Of Giving Back</h2>
                      <p>
                        Ut wisi enim ad minim veniam, 
                        quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip…
                      </p>
                      <button value="submit" variant="danger" className='card1-btn'>Read More</button>
                      <ProgressBar now={0} className="mt-4" />
                      <Row className='mt-3'>
                        <Col md={6}>
                      <ul className='list-unstyled '>
                        <li className='fw-bold fs-5' style={{color:"#6e385dff"}}>$380.00</li>
                        <li style={{color:"#6e385dff"}}>of $16,000</li>
                      </ul>
                      </Col>
                      <Col md={6}>
                      <ul className='list-unstyled text-end'>
                        <li className='fw-bold fs-5' style={{color:"#6e385dff"}}>9</li>
                        <li style={{color:"#6e385dff"}}>donations</li>
                      </ul>
                      </Col>
                      </Row>  
                    </div>
                  </Card>
                </Col>
              </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default DonationsPage
