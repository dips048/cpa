import * as React from "react"
import { Link } from "gatsby"
import {
  navLinks,
  navLinkItem,
  navLinkText,
  navLinkContainer,
} from "./header.module.scss"
import Dropdown from "./dropdown"

const Header = ({ companyName, menuLinks }) => {
  return (
    <nav className={navLinkContainer}>
      <h1>{companyName}</h1>
      <Dropdown menuLinks={menuLinks}></Dropdown>
      {/* <ul>
        {menuLinks.map(menuLink => (
          <li>
            <Link to={menuLink.url} className={navLinkText}>
              {menuLink.name}
            </Link>
            <ul>
              {menuLink.subLinks?.map(link => (
                <Link to={menuLink.url + link.url} className={navLinkText}>
                  {link.name}
                </Link>
              ))}
            </ul>
          </li>
        ))}
      </ul> */}

      {/* <ul className={navLinks}>
        {menuLinks.map(menuLink => (
          <li className={navLinkItem} key={menuLink.name}>
            <Link to={menuLink.url} className={navLinkText}>
              {menuLink.name}
            </Link>
          </li>
        ))}
      </ul> */}
    </nav>
  )
}

export default Header
