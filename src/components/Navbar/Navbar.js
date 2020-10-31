import React, { useState } from 'react';
import * as FaIcons from'react-icons/fa';
import * as AiIcons from'react-icons/ai';
import { Link } from 'react-router-dom';
import { Accordion, Button, Card, Dropdown, Nav, NavDropdown } from 'react-bootstrap';

const Navbar = () => {
    const[sidebar,setSidebar]=useState(false)
    const showSidebar=()=>{
setSidebar(!sidebar)
    }
    return (
        <>
          {/* <div>
              <Link to="#" className="menu-bars">
                  <FaIcons.FaBars onClick={showSidebar}/></Link></div>
                  <nav className={sidebar?'nav-menu active':'nav-menu'}>
                      <ul className="nav-menu-items">
                          <li className="navbar-toggle">
                              <Link to="#" className="menu-bars">
                                  <AiIcons.AiOutlineClose/>
                              </Link>
                          </li>
                      </ul>
                  </nav>   */}
      {/* <Accordion defaultActiveKey="0"><div >
  <Card >
    <Card.Header className="ml-auto" >
      <Accordion.Toggle as={Button}  eventKey="0">
        Click me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse className="ml-auto" eventKey="0">
      <Card.Body >Home</Card.Body>
    </Accordion.Collapse>
    <Accordion.Collapse className="ml-auto" eventKey="0">
      <Card.Body >Home</Card.Body>
    </Accordion.Collapse>
    <Accordion.Collapse className="ml-auto" eventKey="0">
      <Card.Body >Home</Card.Body>
    </Accordion.Collapse>
    <Accordion.Collapse className="ml-auto" eventKey="0">
      <Card.Body >Home</Card.Body>
    </Accordion.Collapse>
   
  </Card> </div>
  
      </Accordion> */}
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    );
};

export default Navbar;