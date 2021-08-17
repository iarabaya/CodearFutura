import React from 'react';
import './navigation.css'
import {Navbar, Container, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Iara Baya</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Item><Link to="/">Home</Link></Nav.Item>
                    <Nav.Item><Link to="/contacto">Contacto</Link></Nav.Item>
                    <Nav.Item><Link to="/curriculum">Cv</Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

/*<Link to="/">Home</Link>
                <Link to="/contacto">Contacto</Link>*/ 