import * as React from "react"
import FooterNav from "./footer-nav"
import Newsletter from "./newsletter"
import { Container } from "react-bootstrap"
import CallLink from "../callLink"
import { Link } from "gatsby"

const Footer = ({ menuLinks, companyName }) => (
  <footer>
    <Container className="row text-center mx-auto">
      <div className="col-lg-4 col-md-6 my-3 mx-auto text-center  ">
        <div></div>
        <h3>Ask a Question</h3>
        <p>
          Find comfort in knowing an Expert in accounting is only an email or
          phone-call away.
        </p>
        <button className="btn btn-primary">
          <CallLink />
        </button>
      </div>
      <div className="col-lg-4 col-md-6 my-3 mx-auto text-center">
        <div></div>
        <h3>We Are Here to Help</h3>
        <p>
          We will happily offer you a free consultation to determine how we can
          best serve you.
        </p>
        <button className="btn btn-primary">
          <Link to="/contact">Contact Us</Link>
        </button>
      </div>
      <div className="col-lg-4 col-md-6 my-3 mx-auto text-center">
        <div></div>
        <h3>Send Us a File</h3>
        <p>
          Use our convenient SecureSend page to securely deliver a file directly
          to a member of our firm.
        </p>
        <button className="btn btn-primary">
          <Link to="/resources/secure-send">Secure Send</Link>
        </button>
      </div>
    </Container>
    <Newsletter />
    <FooterNav menuLinks={menuLinks} companyName={companyName} />
  </footer>
)

export default Footer
