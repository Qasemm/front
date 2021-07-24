import React, { Component } from 'react'
import { Navbar, Container, Nav } from "react-bootstrap";
export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">MOvies</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/favorite">Favorite</Nav.Link>
                            <Nav.Link href="/about">About us</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <br />
                {/* <Navbar bg="primary" variant="dark">
              <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
              </Container>
            </Navbar> */}
            </div>
        );
    }
}

export default Header
