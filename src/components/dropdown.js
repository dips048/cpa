import * as React from "react"
import { Link } from "gatsby"
import {
  navLinkText,
} from "./header.module.scss"

const Dropdown = ({ menuLinks }) => (
  <ul>
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
  </ul>
)

export default Dropdown
