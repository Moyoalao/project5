import React from 'react'
import Logo from "../assets/half.png"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Authentication from './Authentication'



function Navb() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary " bg="dark" data-bs-theme="dark" >
    <Container>
      <Navbar.Brand href="/"><img src={Logo} width={120} alt='KnowYourAi'/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/Info">Information</Nav.Link>
          <Nav.Link href="/Contacts">Contacts</Nav.Link>
          <Nav.Link href="/About">About</Nav.Link>
          <Authentication/>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   
  )
}

export default Navb
