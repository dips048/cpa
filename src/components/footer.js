import * as React from "react"
import FooterNav from "./footer-nav"
import Newsletter from "./newsletter"
import { Container } from "react-bootstrap"
import CallLink from "./callLink"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faComment,
  faCalendar,
  faCopy,
} from "@fortawesome/free-regular-svg-icons"

const Footer = ({ menuLinks, companyName }) => (
  <footer>
    <Container className="row text-center mx-auto f-card-container">
      <div
        className="col-lg-4 col-md-6 my-3 mx-auto text-center"
        data-sal="zoom-in"
        data-sal-duration="2000"
        data-sal-easing="ease"
      >
        <div className="icon-color">
          <FontAwesomeIcon data-testid="fa-icon" icon={faComment} size="5x" />
        </div>
        <h3>Ask a Question</h3>
        <p>
          Find comfort in knowing an Expert in accounting is only an email or
          phone-call away.
        </p>
        <button className="btn btn-primary btn-lg">
          <CallLink />
        </button>
      </div>
      <div
        className="col-lg-4 col-md-6 my-3 mx-auto text-center"
        data-sal="zoom-in"
        data-sal-duration="2000"
        data-sal-easing="ease"
      >
        <div className="icon-color">
          <FontAwesomeIcon data-testid="fa-icon" icon={faCalendar} size="5x" />
        </div>
        <h3>We Are Here to Help</h3>
        <p>
          We will happily offer you a free consultation to determine how we can
          best serve you.
        </p>
        <button className="btn btn-primary btn-lg">
          <Link to="/contact">Contact Us</Link>
        </button>
      </div>
      <div
        className="col-lg-4 col-md-6 my-3 mx-auto text-center"
        data-sal="zoom-in"
        data-sal-duration="2000"
        data-sal-easing="ease"
      >
        <div className="icon-color">
          <FontAwesomeIcon data-testid="fa-icon" icon={faCopy} size="5x" />
        </div>
        <h3>Send Us a File</h3>
        <p>
          Use our convenient SecureSend page to securely deliver a file directly
          to a member of our firm.
        </p>
        <button className="btn btn-primary btn-lg">
          <Link to="/resources/secure-send">Secure Send</Link>
        </button>
      </div>
    </Container>
    <div data-sal="slide-down" data-sal-duration="2000" data-sal-easing="ease">
      <Newsletter />
    </div>
    <FooterNav menuLinks={menuLinks} companyName={companyName} />
  </footer>
)

export default Footer
