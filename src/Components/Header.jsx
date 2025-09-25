import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 
import { Link} from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" fixed="top" className="custom-navbar" >
      <Container>
        <Navbar.Toggle aria-controls="navbar-nav" className="me-auto" style={{backgroundColor:"#fff"}}/>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="text-center me-5">
            
            <Link className='nav-link' to="/" >
              Home
            </Link>

            <Link className='nav-link' to="/featuresPage">
              Services
            </Link>

            <Link className='nav-link' to="/aboutPage">
              About
            </Link>

            

            
            <Navbar.Brand to="/" className="logo-text mx-3">
              <span className="om-symbol" style={{ letterSpacing: "10px" }}>
                TEMPLE
              </span>
            </Navbar.Brand>
            
            <Link className='nav-link' to="/eventsInnerPage">
              Events
            </Link>
            <Link className='nav-link' to="/donationsPage">
              Donations
            </Link>
            
            <Link className='nav-link' to="/contacts">
              Contacts
            </Link>
          </Nav>

          {/* social icons */}
          <div className="d-flex justify-content-center justify-content-lg-end mt-3 mt-lg-0 ms-5">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
              <FaXTwitter size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon mx-2">
              <FaYoutube size={20} />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;