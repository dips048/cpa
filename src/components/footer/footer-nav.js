import * as React from "react"
import { navLinks, linkConatainer } from "./footer-nav.module.scss"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Container } from "react-bootstrap"

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
            <li key="800896-4500">
              <Link to="tel:(800) 896-4500">(800) 896-4500</Link>
            </li>
            <li key="support@cpasitesolutions.com">
              <Link to={"mailto:support@cpasitesolutions.com"}>
                support@cpasitesolutions.com
              </Link>
            </li>
          </ul>
        </div>
        <hr></hr>
        <div className={linkConatainer}>
          <ul
            key="ul-4"
            className={linkConatainer}
            style={{
              padding: 0,
              justifyContent: "left",
              gap: 1,
              listStyle: "none",
            }}
          >
            <li key={companyName + "2"}>
              <a href="#">© {companyName} 2022</a>
            </li>
            <li key="siteMap">
              <a href="#">Site Map</a>
            </li>
            <li key="privacyPolicy">
              <a href="#">Privacy Policy</a>
            </li>
            <li key="disclaimer">
              <a href="#">Disclaimer</a>
            </li>
          </ul>
          <div className="social text-center">
            <Link to="https://www.facebook.com" title="Facebook">
              <FontAwesomeIcon />
            </Link>
            <Link to="https://www.twitter.com" title="Twitter">
              <FontAwesomeIcon />
            </Link>
            <Link to="https://www.linkedin.com" title="LinkedIn">
              <FontAwesomeIcon />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}
export default FooterNav
