import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import userLogo from '../userLogo.png';

const Styles = styled.div`
  .navbar { background-color: rgb(1,235,185); }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }

  .logo{
    float: left;
    border-radius:50%;
    max-height: 80%;
    max-width: 80%;
  }

  .logoUser{
    float: right;
    border-radius:50%;
    max-height: 40%;
    max-width: 40%;
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/"><img className="log" src="/logo.png" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/"><img className="logoUser" src={userLogo} /></Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)