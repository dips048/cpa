import * as React from "react"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBriefcase,
  faCompass,
  faBook,
  faCalculator,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import {
  coffee,
  imgScroll,
  slide,
  // pattern1, globe, globe1, globe2, globe3, globe4
} from "./home.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import CallLink from "./callLink"

const Home = () => (
  <div>
    <Container className="d-md-flex" style={{ zIndex: 1 }}>
      <div className="text-center order-md-2 mx-auto">
        <StaticImage
          style={{ margin: "0 auto" }}
          src="../../static/woman-1.png"
          alt="woman-1"
          width={260}
          height={400}
        />
      </div>
      <div className="row order-md-1 py-2 flex-md-grow-1">
        <div
          className="col-md-8 text-center d-flex flex-column justify-content-center"
          id="home-page-tagline"
        >
          <h1>Account On Us</h1>
          <p>
            We offer services for business owners, executives, and individuals.
          </p>
          <button className="btn btn-primary">Free Consultation</button>
        </div>
      </div>
    </Container>
    <div
      className="d-flex"
      style={{ backgroundColor: "#1053b8", color: "#fff" }}
    >
      {/* <div className={pattern1}></div>
      <div className={globe}>
        <div className={globe1}></div>
        <div className={globe2}></div>
        <div className={globe3}></div>
        <div className={globe4}></div>
      </div> */}
      <Container style={{ zIndex: 1 }}>
        <div className="row pt-5">
          <div className="col-lg-12">
            <h1>Company Name, Accounting</h1>
            <p>
              If you are looking for a blend of personal service and expertise,
              you have come to the right place! We offer a broad range of
              services for business owners, executives and independent
              professionals. Our rates are affordable. We are experienced and
              friendly.
            </p>
          </div>
        </div>
        <div
          className="row my-5 px-3 align-xs-center text-center text-sm-start d-flex"
          style={{ backgroundColor: "#fff", color: "#2d3e50" }}
        >
          <div className="col-lg-6 col-md-6 col-sm-12 my-4">
            <div className="row">
              <div className="col-sm-2">
                <FontAwesomeIcon icon={faCompass} size="4x" />
              </div>
              <div className="col-sm-10">
                <h4>Services For Individuals</h4>
                <p>
                  You get one-on-one guidance that helps manage risk and improve
                  performance.
                  <Link to={"/services/services-for-individuals"}>
                    learn more
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-4">
            <div className="row">
              <div className="col-sm-2">
                <FontAwesomeIcon icon={faBriefcase} size="4x" />
              </div>
              <div className="col-sm-10">
                <h4>Business Services</h4>
                <p>
                  We take care of your business for you, so you can get back to
                  the job of running your business.
                  <Link to={"/services/business-services"}>learn more</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-4">
            <div className="row">
              <div className="col-sm-2">
                <FontAwesomeIcon icon={faCalculator} size="4x" />
              </div>
              <div className="col-sm-10">
                <h4>Tax Services</h4>
                <p>
                  We pride ourselves on being very efficient, affordable, and of
                  course, extremely discreet.
                  <Link to={"/services/tax-services"}>learn more</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-4">
            <div className="row">
              <div className="col-sm-2">
                <FontAwesomeIcon icon={faBook} size="4x" />
              </div>
              <div className="col-sm-10">
                <h4>QuickBooks Services</h4>
                <p>
                  QuickBooks is the ideal business accounting software for small
                  to mid-sized business owners.
                  <Link to={"/services/services-for-quick-books"}>
                    learn more
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
    <Container style={{ zIndex: 1 }}>
      <div className="row my-5">
        <div className="col-lg-12">
          <h1 className="h1 text-center">
            Accounting is what we do best, you're busy enough with the rest
          </h1>
          <div className="col-lg-12 mb-4">
            <hr />
          </div>
          <div className="col-12 d-flex row">
            <div className="col-lg-5 order-lg-2">
              <div className={coffee}>
                <StaticImage src="../../static/coffee.png" alt="coffee" />
                <div className={imgScroll}>
                  <div className={slide}></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <p className="lead">
                Company Name is licensed in VT and specializes in Accounting. We
                offer a broad range of services for business owners, executives,
                and independent professionals. We are professional, experienced,
                and affordable.
              </p>
              <p className="lead">
                Whether we like it or not, today's tax laws are so complicated
                that filing a relatively simple return can be confusing. It is
                just too easy to overlook deductions and credits to which you
                are entitled. Even if you use a computer software program
                there's no substitute for the assistance of an experienced tax
                professional.
              </p>
              <p className="lead">
                We can also assist if you find yourself on the wrong side of the
                IRS. We're here to help you resolve your tax problems and put an
                end to the misery that the IRS can put you through. 
              </p>
              <p className="lead fw-bold text-center mt-4">
                Please call us today at{" "}
                <CallLink />. Thanks for
                visiting!
              </p>
            </div>
            <div className="col-lg-1 order-lg-1"></div>
          </div>
        </div>
      </div>
    </Container>
  </div>
)

export default Home
