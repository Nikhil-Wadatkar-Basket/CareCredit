import React from "react";

function NavbarComponent() {
  return (
    <div>
      {/* <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <div className="dropdown">
            <button
              className="btn btn-default dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            >
              Tutorials
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a href="#">HTML</a>
              </li>
              <li>
                <a href="#">CSS</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
              <li className="divider"></li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>

          <Nav.Link href="/application">Application</Nav.Link>
          <Nav.Link href="/onlinePayment">Online Payment</Nav.Link>
          <Nav.Link href="/users">Add Users</Nav.Link>
          <Nav.Link href="/transaction">Transaction</Nav.Link>
          <Nav.Link href="/providerAdmin">Provider Admin</Nav.Link>
          <Nav.Link href="/device">Register Device</Nav.Link>
          <Nav.Link href="/reports">Report</Nav.Link>
        </Nav>
      </Navbar> */}

      <div>
        {/* nav bar  start*/}
        <nav className="navbar navbar-expand-lg navbar-light   bg-transparent">
          <div className="container-fluid text-white">
            <a className="navbar-brand" href="#">
              <b>Give a Meaningfull Life</b>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <a className="nav-link active " aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/userDashboard">
                    Users
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/providerAdmin">
                    Provider Admin
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="/application">
                    Application
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/transaction">
                    Transactions
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="/device">
                    Device
                  </a>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn btn-outline-success" type="submit">
                  Logout
                </button>
              </form>
            </div>
          </div>
        </nav>
        {/* nav bar end */}
      </div>
    </div>
  );
}

export default NavbarComponent;
