import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
    <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/433/433087.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Tonico Cafe
          </Navbar.Brand>
        </Container>
      </Navbar>
      </div>
  )
}

export default Header