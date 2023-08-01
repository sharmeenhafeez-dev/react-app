import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom'

export default function Footer() {

  return (
    <>
 <footer className="text-center text-white container-fluid p-5">
      <Row>
        <Col xs={12} md={4} className="container bg-dark pt-3 pb-3">
          <img
            className='img-fluid bg-danger'
            src="https://media.istockphoto.com/id/1297259026/photo/two-happy-women-friends-shoppers-holding-shopping-bags-using-mobile-apps-for-online-shopping.jpg?s=612x612&w=0&k=20&c=FBOl1_vD9tBchdT3s_LbVVdhog45-Lq57uRmWQsi3pI="
            alt=""
            style={{ height: '400px' }}
          />
        </Col>
        <Col xs={12} md={8} className="container bg-dark pb-3">
          <Row className="justify-content-center p-5 mt-5">
            <h3>E.COM.TRENDS</h3>
          </Row>
          <Row>
            <Col className="d-flex justify-content-center  mb-5">
              <Form.Control
                type="email"
                placeholder="Enter email"
                style={{ width: '100%', backgroundColor: 'transparent' }}
                className="border border-white rounded-pill"
              />
              <Button
                variant="light"
                type="submit"
                className="rounded-pill text-white border border-white"
                style={{ backgroundColor: 'transparent' }}
              >
                Submit
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className='text-start' style={{ marginLeft: '10px' }}>
              <Link className='nav-link' to="/">Home</Link>
              <Link className='nav-link' to="/products">Products</Link>
            </Col>
            <Col xs={12} md={6} className='text-start'>
              <div>
                <span className="ms-2">123 Main Street, City, Country</span>
              </div>
              <div>
                <span className="ms-2">+1 234 567 890</span>
              </div>
            </Col>
            <Col className='text-start'>
              <Link className='nav-link' to="/login">Login</Link>
              <Link className='nav-link' to="/signup">Signup</Link>
            </Col>
          </Row>
          <hr />
          <Row className='d-flex justify-content-center'>
            <Col className=''>All rights reserved</Col>
            <Col className=''>
              <FaFacebook className='me-3' />
              <FaInstagram />
            </Col>
          </Row>
        </Col>
      </Row>
    </footer>



    </>
  )
}
