import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import {Link} from "react-router-dom"




function FakeFlix() {
  const [log, setlog] = useState(true);

  const [search, setSearch] = useState("")
  const printing = (e) => {
    setSearch(e.target.value)
  }

  return (
    
    <Navbar id='nav' bg="black" variant='dark' expand="lg">


      <Container fluid>
        <Navbar.Brand href="#"><img height={27} src='https://cdn.jsdelivr.net/gh/Th3Wall/assets-cdn/Fakeflix/Fakeflix_logo.png' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">TV Shows</Nav.Link>
            <NavDropdown title="Movies" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action Movies</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Web Series
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                All Movies & WS
              </NavDropdown.Item>
            </NavDropdown>

{/* <Link to="/Player"> Player </Link> */}


            
            {/* <Link to="/Player" style={{color:"white"}}> Player </Link> */}
            <Link to="/"><button className="btn btn-success mx-2 login_signup">Signup</button></Link>
            <Link to="/login"><button className="btn btn-primary mx-2 login_signup" >Login</button></Link>

          </Nav>

          {/* {(log) ? <button className="btn btn-info mx-2">Login</button> : <button className="btn btn-danger mx-3">Wallet</button>

          } */}
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="warning">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default FakeFlix;