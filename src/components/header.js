import * as React from "react"
import { useState } from "react"
import Dropdown from "./dropdown"
import { Container } from "react-bootstrap"
import List from "./list"
import LoginModal from "./login-modal"
import NewsletterModal from "./newsletter-modal"

const Header = ({ companyName, menuLinks }) => {
  const [modalShow, setModalShow] = useState(false)
  const [newsletterModal, setNewsletterModal] = useState(false)

  return (
    <Container style={{ zIndex: 1 }}>
      <List
        show={modalShow}
        nlShow={newsletterModal}
        onShow={() => setModalShow(true)}
        onNlshow={() => setNewsletterModal(true)}
        menuLinks={menuLinks}
      ></List>
      <div className="d-none d-lg-flex justify-content-lg-between py-2">
        <div>
          <button onClick={() => setModalShow(true)}>Login</button>
          <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
          <button onClick={() => setNewsletterModal(true)}>Subscribe</button>
          <NewsletterModal
            show={newsletterModal}
            onHide={() => setNewsletterModal(false)}
          />
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
