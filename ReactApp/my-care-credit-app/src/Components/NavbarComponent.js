import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
function NavbarComponent() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/application">Application</Nav.Link>
          <Nav.Link href="/onlinePayment">Online Payment</Nav.Link>
          <Nav.Link href="/users">Users</Nav.Link>
          <Nav.Link href="/transaction">Transaction</Nav.Link>
          <Nav.Link href="/providerAdmin">Provider Admin</Nav.Link>
          <Nav.Link href="/device">Register Device</Nav.Link>
          <Nav.Link href="/reports">Report</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
