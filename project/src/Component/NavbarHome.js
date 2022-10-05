import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Nav,  Navbar, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Service from './Service';
import Gallery from './Gallery';
import About from './About';
import Footer from './Footer';


class NavbarHome extends React.Component{
    constructor(props) {
        super(props);
    }
     

    render() {
       
        return (
            <div >
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                    <Container>
                        
                    <Navbar.Brand href="/"style={{fontFamily: 'inherit'}} >DASHBOARD</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        
                        <Nav.Link href="#service">Service</Nav.Link>
                        <Nav.Link href="#gallery">Gallery</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#footer">Contact Us</Nav.Link>
                        </Nav>
                        <Nav>
                        <NavDropdown title="Sign Up" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/creg">Customer SignUp</NavDropdown.Item>
                            <NavDropdown.Item href="/oreg">Owner SignUp</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link eventKey={2} href="/login">
                            Login
                            
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
                <div>
                    <Container>
                        <Router>
                            <Route path="/service" component={Service} />
                            <Route path="/gallery" component={Gallery} />
                            <Route path="/about" component={About} />
                            <Route path="/footer" component={Footer} />
                        </Router>
                    </Container>
                </div>
        </div>
        );
    }

}
export default NavbarHome;