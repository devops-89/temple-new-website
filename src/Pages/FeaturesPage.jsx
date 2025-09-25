import React from 'react'
import Temple from '../assets/Images/templeImg.jpg'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Container,Col,Row,Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const packages = [
  {
    title: "INSTALLATION + LOGO CHANGE",
    price: "$45",
    features: [
      "The template will be installed to your server to look like in our online demo. Access to Admin panel will be granted to you to manage your website",
      "We will replace the template’s logo with yours on each page of the template. The logo has to be in good quality in .PSD, .EPS, .PNG, .JPG format. Logo width should be 300px and 600px"
    ]
  },
  {
    title: "READY-TO-USE WEBSITE",
    price: "$469",
    features: [
      "Theme installation on your server with your logo",
      "Google map with your address set",
      "Replacing content and images up to 6 pages (without layout change)",
      "Removing some elements that you do not need on your website",
      "Social icons set (without changing theme’s layout)",
      "Replacement of color scheme"
    ]
  },
  {
    title: "FULL WEBSITE PACKAGE",
    price: "$699",
    features: [
      "WordPress and theme installation",
      "Customization of website branding",
      "Content Development (15 royalty-free images)",
      "Content setup (adding 6 pages, 6 posts, Revolution sliders)",
      "SEO Essentials",
      "Website speed optimization"
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
              <h1 className="fw-bold text-white">Our Features</h1>
              <ul className='list-unstyled d-flex gap-4'>
                <li><Link className='nav-link' to="/">Home</Link></li>
                <li>/</li>
                <li><Link className='nav-link' to="/featuresPage">Our Features</Link></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
        <Container>
            <Row>
                <Col md={12} sm={12}>
                <h2>Dear Customers,</h2>
                <p style={{color:"grey"}}>
                Our primary goal is developing a secure and customizable theme framework that meets the needs of the end user. 
                Therefore, our customers are able to create websites using our templates as easy as 1-2-3! This process requires minimum knowledge of WordPress and coding, and extended documentation and our Support Team is always at your service. However, we ask you to keep in mind that sometimes issues occur not because of templates malfunction. There might be situations when it doesn’t depend on us and the framework. For example, server settings, some extra functional that requires deep file customization, or additional plugins usage. And of course, an attempt to build a website in a very short time. We know our theme framework perfectly and have a highly-professional team of developers. They will help you develop the website you need. 
                If you need website customization, contact our support system for further information:
                <Link className='nav-link' to="/contacts">https://themerex.net/support/</Link>
                </p>
                </Col>
            </Row>
            <Row>
                <Col md={12} sm={12} className='text-center'>
                    <p style={{ color: "rgb(245, 122, 122)", letterSpacing: "5px" }}>CUSTOMIZATION</p>
                    <h2 style={{ fontWeight: "bold", fontSize: "2.5em" }}>Packages</h2>
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
            <ul className="text-start" style={{ color: "#fff", paddingLeft: "0"}}>
              {pkg.features.map((feature, i) => (
                <li key={i} style={{ marginBottom: "10px" }}> {feature}</li>
              ))}
            </ul>
          </Card.Body>
          <button className="btn btn-danger mt-auto">Grab This Deal</button>
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
