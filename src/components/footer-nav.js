import * as React from "react"
import { navLinks, linkConatainer, linkConatainerB } from "./footer-nav.module.scss"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { Container } from "react-bootstrap"
import CallLink from "./callLink"

const FooterNav = ({ menuLinks, companyName }) => {
  return (
    <div className="footer-nav">
      <Container>
        <div className={linkConatainer}>
          {menuLinks?.map(link => {
            if (link.name === "Resources") {
              return (
                <ul key="ul-1" className={navLinks}>
                  <h3>{link.name}</h3>
                  {link.subLinks?.map((subLink, i) => {
                    return (
                      <li key={subLink.url + i}>
                        <Link to={"/resources" + subLink.url}>
                          {subLink.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )
            }
            if (link.name === "Tax Center") {
              return (
                <ul key="ul-2" className={navLinks}>
                  <h3>{link.name}</h3>
                  {link.subLinks?.map((subLink, i) => {
                    return (
                      <li key={subLink.url + i}>
                        <Link to={"/tax-center" + subLink.url}>
                          {subLink.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )
            }
            return null
          })}
          <ul key="ul-3" className={navLinks}>
            <h3>Contact</h3>
            <li key={companyName + "1"}>{companyName}</li>
            <li key="call-link">
              <CallLink />
            </li>
            <li key="support@cpasitesolutions.com">
              <a href="mailto:support@cpasitesolutions.com">
                support@cpasitesolutions.com
              </a>
            </li>
          </ul>
        </div>
        <hr></hr>
        <div className={linkConatainer}>
          <ul
            key="ul-4"
            className={linkConatainerB}
          >
            <li className="ps-2" key={companyName + "2"}>
              <a href="?">© {companyName} 2022</a>
            </li>
            <li className="ps-2" key="siteMap">
              <a href="?">Site Map</a>
            </li>
            <li className="ps-2" key="privacyPolicy">
              <a href="?">Privacy Policy</a>
            </li>
            <li className="ps-2" key="disclaimer">
              <a href="?">Disclaimer</a>
            </li>
          </ul>
          <div className="text-center">
            <a className="m-1" href="https://www.facebook.com" title="Facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a className="m-1" href="https://www.twitter.com" title="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a className="m-1" href="https://www.linkedin.com" title="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default FooterNav
