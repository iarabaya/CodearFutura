import React from 'react';
import './navigation.css'
import {Navbar, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Iara Baya</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Link to="/">Home</Link>
                <Link to="/contacto">Contacto</Link>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
