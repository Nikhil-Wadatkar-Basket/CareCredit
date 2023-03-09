import React from "react";

const FooterComponent = () => {
  return (
    <div>
      <footer
        className="page-footer  blue pt-4 footer mt-auto py-3"
        // style={{
        //   position: "fixed",
        //   left: "0",
        //   bottom: "0",
        //   width: "100%",
        //   height: "60px"
        // }}
      >
        <div className="container-fluid text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase">Footer Content</h5>
              <p>
                All funds raised by Sightsavers may be pooled together and
                allocated towards eye care, education and social inclusion
                initiatives across India. © 2021 Sightsavers is registered in
                India as a "Royal Commonwealth Society for the Blind" |
                Registration No. E4330.
              </p>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="/aboutus">About Us</a>
                </li>
                <li>
                  <a href="/contactus">Contact Us</a>
                </li>
                <li>
                  <a href="/feedback">Give us a feedback</a>
                </li>
              </ul>
            </div>

            {/* <div className="col-md-3 mb-md-0 mb-3">

       
        <h5 className="text-uppercase">Links</h5>

        <ul className="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>

      </div> */}
          </div>
        </div>

        <div className="footer-copyright text-center py-3">
          © 2020 Copyright:
          <a href="/">www.google.com</a>
        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
