import React from 'react';

import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
    return (<>

        <Navbar bg="primary" data-bs-theme="danger">
            <Container>
                <Navbar.Brand href="#home">User Registration </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>

                </Nav>
            </Container>
        </Navbar>


        
    </>)
}
export default Header;