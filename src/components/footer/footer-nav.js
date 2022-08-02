import * as React from "react"
import { container, navLinks, linkConatainer } from "./footer-nav.module.css"
import { Link } from "gatsby"

const data = [
  {
    heading: "Resources",
    links: [
      "Calculators",
      "Client Portal",
      "SecureSend",
      "Internet Links",
      "Newsletter",
    ],
  },
  {
    heading: "Resources",
    links: [
      "Track Your Refund",
      "Tax Due Dates",
      "Tax Rates",
      "Record Retention Guide",
      "State Tax Forms",
    ],
  },
  {
    heading: "Resources",
    links: [
      "Company Name",
      "59 Rathe Road",
      "Colchester, VT 05408",
      "(800) 896-4500",
      "support@cpasitesolutions.com",
    ],
  },
]

const FooterNav = () => {
  return (
    <div className={container}>
      {data.map((card, i) => (
        <div className={linkConatainer}>
          <ul className={navLinks}>
            <h4>{card.heading}</h4>
            {card.links.map((link, j) => (
              <li key={j}>
                <Link to={"/" + link}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <ul>
          <li>© Company Name 2022</li>
          <li>Site Map</li>
          <li>Privacy Policy</li>
          <li>Disclaimer</li>
        </ul>
        <div></div>
      </div>
    </div>
  )
}
export default FooterNav
