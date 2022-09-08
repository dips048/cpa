import * as React from "react"
import { Link } from "gatsby"
import {
  navLinkText,
  linkContainer,
  linkItem,
  subLinkContainer1,
  subLinkContainer2,
  subLinkContainer3,
} from "../styles/nav-list.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown, faAngleLeft } from "@fortawesome/free-solid-svg-icons"

const NavList = ({ menuLinks }) => (
  <ul className={linkContainer}>
    {menuLinks.map((link1, i) => (
      <li className={linkItem} key={link1.url + "-" + i}>
        <Link to={link1.url} className={navLinkText}>
          {link1.name}
          {link1.subLinks.length > 0 && (
            <FontAwesomeIcon
              className="toggle-btn ps-2"
              icon={faAngleDown}
              size="sm"
            ></FontAwesomeIcon>
          )}
        </Link>
        <ul className={subLinkContainer1}>
          {link1.subLinks?.map((link2, j) => (
            <li key={link2.url + "-" + j}>
              <Link to={link1.url + link2.url} className={navLinkText}>
                {link2.subLinks.length > 0 && (
                  <FontAwesomeIcon
                    className="toggle-btn pe-2"
                    icon={faAngleLeft}
                    size="sm"
                  ></FontAwesomeIcon>
                )}
                {link2.name}
              </Link>
              <ul className={subLinkContainer2}>
                {link2.subLinks?.map((link3, k) => (
                  <li key={link3.url + "-" + k}>
                    <Link
                      to={link1.url + link2.url + link3.url}
                      className={navLinkText}
                    >
                      {link3.subLinks.length > 0 && (
                        <FontAwesomeIcon
                          className="toggle-btn pe-2"
                          icon={faAngleLeft}
                          size="sm"
                        ></FontAwesomeIcon>
                      )}
                      {link3.name}
                    </Link>
                    <ul className={subLinkContainer3}>
                      {link3.subLinks?.map((link4, l) => (
                        <li key={link4.url + "-" + l}>
                          <Link
                            to={link1.url + link2.url + link3.url + link4.url}
                            className={navLinkText}
                          >
                            {link4.subLinks && link4.subLinks.length > 0 && (
                              <FontAwesomeIcon
                                className="toggle-btn pe-2"
                                icon={faAngleLeft}
                                size="sm"
                              ></FontAwesomeIcon>
                            )}
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

export default NavList
