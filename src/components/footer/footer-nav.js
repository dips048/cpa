import * as React from "react"
import { navLinks, linkConatainer } from "./footer-nav.module.scss"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FooterNav = ({ menuLinks, companyName }) => {
  return (
    <div>
      <div className={linkConatainer}>
        {menuLinks?.map(link => {
          if (link.name === "Resources") {
            return (
              <ul className={navLinks}>
                <b>{link.name}</b>
                {link.subLinks?.map(subLink => {
                  return (
                    <li key={subLink}>
                      <Link to={"resources" + subLink.url}>{subLink.name}</Link>
                    </li>
                  )
                })}
              </ul>
            )
          }
          if (link.name === "Tax Center") {
            return (
              <ul className={navLinks}>
                <b>{link.name}</b>
                {link.subLinks?.map(subLink => {
                  return (
                    <li key={subLink}>
                      <Link to={"resources" + subLink.url}>{subLink.name}</Link>
                    </li>
                  )
                })}
              </ul>
            )
          }
          return null
        })}
        <ul className={navLinks}>
          <b>Contact</b>
          <li key={companyName}>{companyName}</li>
          <li key="'(800) 896-4500'">
            <Link to={"(800) 896-4500"}>(800) 896-4500</Link>
          </li>
          <li key="support@cpasitesolutions.com">
            <Link to={"support@cpasitesolutions.com"}>
              support@cpasitesolutions.com
            </Link>
          </li>
        </ul>
      </div>
      <div className={linkConatainer}>
        <ul className={linkConatainer} style={{listStyle: "none"}}>
          <li key={companyName}>
            © {companyName} 2022
          </li>
          <li key="siteMap">Site Map</li>
          <li key="privacyPolicy">Privacy Policy</li>
          <li key="disclaimer">Disclaimer</li>
        </ul>
        <div class="social text-center">
          <Link href="https://www.facebook.com" title="Facebook">
            <FontAwesomeIcon />
          </Link>
          <Link href="https://www.twitter.com" title="Twitter">
            <FontAwesomeIcon />
          </Link>
          <Link href="https://www.linkedin.com" title="LinkedIn">
            <FontAwesomeIcon />
          </Link>
          <Link href="" title="Google Plus">
            <FontAwesomeIcon />
          </Link>
        </div>
      </div>
    </div>
  )
}
export default FooterNav
