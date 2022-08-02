import * as React from "react"
import { Link } from "gatsby"
import {
  navLinks,
  navLinkItem,
  navLinkText,
  navLinkContainer,
} from "./header.module.css"

const Header = ({ companyName, menuLinks }) => {
  return (
    <nav className={navLinkContainer}>
      <h1>{companyName}</h1>
      <ul className={navLinks}>
        {menuLinks.map(menuLink => (
          <li className={navLinkItem} key={menuLink.name}>
            <Link to={menuLink.url} className={navLinkText}>
              {menuLink.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Header
