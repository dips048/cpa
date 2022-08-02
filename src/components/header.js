import * as React from "react"
import Dropdown from "./dropdown"
import { Container } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLock,
  faFeed,
  faEnvelope,
  faPhone,
  faNavicon
} from "@fortawesome/free-solid-svg-icons"

const Header = ({ companyName, menuLinks }) => {
  return (
    <Container>
      <div className="d-flex justify-content-between d-lg-none py-2">
        <FontAwesomeIcon className="flex-grow-1" icon={faLock}></FontAwesomeIcon>
        <FontAwesomeIcon className="flex-grow-1" icon={faFeed}></FontAwesomeIcon>
        <FontAwesomeIcon className="flex-grow-1" icon={faEnvelope}></FontAwesomeIcon>
        <FontAwesomeIcon className="flex-grow-1" icon={faPhone}></FontAwesomeIcon>
        <FontAwesomeIcon className="flex-grow-1" icon={faNavicon}></FontAwesomeIcon>
      </div>
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
