import React from 'react'
import Temple from '../assets/Images/templeImg.jpg'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Container,Col,Row,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const packages = [
  {
    title: "Marriage Ceremony",
    price: "$45",
    features: [
      "A Hindu marriage is not merely a social contract but a sacred union of two souls, symbolizing the beginning of the Grihasthashrama (householder stage of life)."
    ]
  },
  {
    title: "Greh Pravesh Pooja",
    price: "$469",
    features: [
      "This is a Hindu ceremony performed to purify and bless a new home before moving in. It involves various rituals to remove negative energies, invite positive energy, and ensure prosperity."
      
    ]
  },
  {
    title: "Mundan Ceremony",
    price: "$699",
    features: [
      "The Mundan ceremony is a traditional Hindu ritual involving the first shaving of a child's head, typically performed between the first and third year. It is believed to purify the child by shedding past karma, promote intellectual development."
    ]
  },
  {
    title: "Pooja Under One Hour",
    price: "$699",
    features: [
      "This refers to a concise and efficient Hindu worship ceremony designed to be completed within a short timeframe, typically under an hour. It focuses on essential prayers, offerings (like a lit diya, incense, and a few flowers), and devotional practices to connect with the divine."
    ]
  },
  {
    title: "Pooja Over One Hour",
    price: "$699",
    features: [
      "A Pooja over one hour refers to more elaborate and extensive Hindu worship ceremonies that typically last longer than an hour, sometimes extending for several hours or even an entire day, depending on their complexity and purpose."
    ]
  },
  {
    title: "funeral service",
    price: "$699",
    features: [
      "A funeral service is a ceremonial event held to honor and remember a deceased person, marking their passing and supporting the bereaved. It typically involves rituals, prayers, readings, eulogies, and music, culminating in the final disposition of the body (burial or cremation)."
    ]
  },
  {
    title: "kriya karam puja final day",
    price: "$699",
    features: [
      "The final day of Kriya Karam Puja, independent of any reference to the Garuda Purana, typically involves rituals centered on bidding a peaceful farewell to the departed soul. It focuses on offerings and prayers for the soul's journey and purification."
    ]
  },
  {
    title: "kriya karam in 4 days with garud puran",
    price: "$699",
    features: [
      "Kriya Karam over four days, incorporating the Garuda Purana, begins with cremation. Days two and three involve collecting ashes and initial offerings, with the Purana's recitation guiding the soul's journey."
    ]
  },
  {
    title: "kriya karam in 4 days with garud puran",
    price: "$699",
    features: [
      "A 10-day Garuda Purana Puja is a comprehensive Hindu ritual for the deceased. It involves daily Pind Daan and continuous recitation of the Garuda Purana, aiming to guide the departed soul through its post-death journey."
    ]
  }
];


const FeaturesPage = () => {
  return (
    <div>
      <Header/>

      <Container fluid className="p-0">
        <Row>
          <Col sm={12} xs={12} md={12}>
            <div className="banner text-center mb-5">
              <img src={Temple} alt="Temple" className="img-fluid w-100" />
              <h1 className="fw-bold text-white">Services</h1>
              <ul className='list-unstyled d-flex gap-4'>
                <li><Link className='nav-link' to="/">Home</Link></li>
                <li>/</li>
                <li><Link className='nav-link' to="/featuresPage">Services</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
        <Container>

            <Row>
                <Col md={12} sm={12} className='text-center'>
                    <h2 style={{ fontWeight: "bold", fontSize: "2.5em" }}>Services</h2>
                </Col>
            </Row>

        </Container>
      <Container>
        <Row>
            {packages.map((pkg, index) => (
      <Col md={4} key={index} className="mb-4">
        <Card className="h-100 text-center shadow-sm p-4" style={{backgroundColor:"#4b1e3d"}}>
          <Card.Title style={{ fontWeight: "bold", fontSize: "1.50em",color:"#fff" }}>{pkg.title}</Card.Title>
          <h3 style={{ color: "rgb(245, 122, 122)", fontWeight: "bold" }}>{pkg.price}</h3>
          <Card.Body>
            <ul className="text-start list-unstyled" style={{ color: "#fff", paddingLeft: "0"}}>
              {pkg.features.map((feature, i) => (
                <li key={i} style={{ marginBottom: "10px" }}> {feature}</li>
              ))}
            </ul>
          </Card.Body>
          <button className="btn btn-danger mt-auto">Make a Request</button>
        </Card>
      </Col>
    ))}
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default FeaturesPage
