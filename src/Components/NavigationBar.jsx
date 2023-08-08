import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { useContext } from 'react';
// import { GlobleContext } from './context/context';

const NavigationBar = () => {
  // const { state , dispatch } = useContext(GlobleContext);
// console.log(data.user)

// useEffect(()=>{
// console.log("CONTEXT DATA", state)
// },[state])
  useEffect(() => {
    // Initialize Bootstrap dropdown functionality
    const dropdownElements = document.querySelectorAll('.dropdown-toggle');
    dropdownElements.forEach((dropdown) => {
      dropdown.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        dropdown.parentElement.classList.toggle('show');
      });
    });
  }, []);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <h4>E.COM.TRENDS</h4>
          </Navbar.Brand>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/products" className="text-light">
              Products
            </Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-light">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup" className="text-light">
              Signup
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-light">
              <FaShoppingCart />
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-light">
              {/* <h5>{state.user?.firstName}</h5> */}
              <FaUserCircle size={25} /> <span className='ms-2'>{}</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
