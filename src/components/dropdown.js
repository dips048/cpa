import * as React from "react"
import { Link } from "gatsby"
import {
  navLinkText,
  linkContainer,
  linkItem,
  subLinkContainer1,
  subLinkContainer2,
  subLinkContainer3
} from "./dropdown.module.scss"

const Dropdown = ({ menuLinks }) => (
  <ul className={linkContainer}>
    {menuLinks.map((link1, i) => (
      <li className={linkItem} key={link1.url + "-" + i}>
        <Link to={link1.url} className={navLinkText}>
          {link1.name}
        </Link>
        <ul className={subLinkContainer1} >
          {link1.subLinks?.map((link2, j) => (
            <li key={link2.url + "-" + j}>
              <Link to={link1.url + link2.url} className={navLinkText}>
                {link2.name}
              </Link>
              <ul className={subLinkContainer2} >
                {link2.subLinks?.map((link3, k) => (
                  <li key={link3.url + "-" + k}>
                    <Link
                      to={link1.url + link2.url + link3.url}
                      className={navLinkText}
                    >
                      {link3.name}
                    </Link>
                    <ul className={subLinkContainer3} >
                      {link3.subLinks?.map((link4, l) => (
                        <li key={link4.url + "-" + l}>
                          <Link
                            to={link1.url + link2.url + link3.url + link4.url}
                            className={navLinkText}
                          >
                            {link4.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
)

export default Dropdown
