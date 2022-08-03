import * as React from "react"
import { useState } from "react"
import Dropdown from "./dropdown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLock,
  faFeed,
  faEnvelope,
  faPhone,
  faNavicon,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import Offcanvas from "react-bootstrap/Offcanvas"
import { Container } from "react-bootstrap"

const List = ({ menuLinks }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {menuLinks?.map((link1, i) => (
        <li style={{ padding: ".5rem 1rem" }} key={link1.url + "-" + i}>
          <Link to={link1.url}>{link1.name}</Link>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {link1.subLinks?.map((link2, j) => {
              return (
                <li style={{ padding: ".5rem 1rem" }} key={link2.url + "-" + j}>
                  <Link to={link1.url + link2.url}>{link2.name}</Link>
                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {link2.subLinks?.map((link3, k) => (
                      <li
                        style={{ padding: ".5rem 1rem" }}
                        key={link3.url + "-" + k}
                      >
                        <Link to={link1.url + link2.url + link3.url}>
                          {link3.name}
                        </Link>
                        <ul style={{ listStyle: "none", padding: 0 }}>
                          {link3.subLinks?.map((link4, l) => (
                            <li
                              style={{ padding: ".5rem 1rem" }}
                              key={link4.url + "-" + l}
                            >
                              <Link to={link1.url + link2.url + link3.url + link4.url}>
                                {link4.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ul>
        </li>
      ))}
    </ul>
  )
}

const Header = ({ companyName, menuLinks }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Container style={{ zIndex: 1 }}>
      <div className="d-flex justify-content-between d-lg-none py-2">
        <FontAwesomeIcon
          className="flex-grow-1"
          icon={faLock}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="flex-grow-1"
          icon={faFeed}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="flex-grow-1"
          icon={faEnvelope}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="flex-grow-1"
          icon={faPhone}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="flex-grow-1"
          icon={faNavicon}
          onClick={handleShow}
        ></FontAwesomeIcon>
      </div>
      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ padding: 0 }}>
          <List menuLinks={menuLinks}></List>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="d-none d-lg-flex justify-content-lg-between py-2">
        <div>
          <button>Login</button>
          <button>Subscribe</button>
        </div>
        <h3>
          <a href="tel:(800) 896-4500" className="strong lead">
            Call Us (987) 654 4321
          </a>
        </h3>
      </div>
      <nav className="d-flex justify-content-center justify-content-lg-between py-2">
        <h1>{companyName}</h1>
        <div className="d-none d-lg-flex">
          <Dropdown menuLinks={menuLinks}></Dropdown>
        </div>
      </nav>
    </Container>
  )
}

export default Header
