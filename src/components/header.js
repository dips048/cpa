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
    <div style={{ zIndex: 1 }}>
      <List
        show={modalShow}
        nlShow={newsletterModal}
        onShow={() => setModalShow(true)}
        onNlshow={() => setNewsletterModal(true)}
        menuLinks={menuLinks}
      ></List>
      <Container className="d-none d-lg-flex justify-content-lg-between py-2">
        <div>
          <button className="btn btn-default btn-sm" onClick={() => setModalShow(true)}>Login</button>
          <LoginModal show={modalShow} onHide={() => setModalShow(false)} />
          <button className="btn btn-primary btn-sm" onClick={() => setNewsletterModal(true)}>Subscribe</button>
          <NewsletterModal
            show={newsletterModal}
            onHide={() => setNewsletterModal(false)}
          />
        </div>
        <h3>
          <a href={"tel:(800) 896-4500"} className="strong lead">
            Call Us (987) 654 4321
          </a>
        </h3>
      </Container>
      <Container className="d-flex justify-content-center justify-content-lg-between py-2">
        <h1>{companyName}</h1>
        <div className="d-none d-lg-flex">
          <Dropdown menuLinks={menuLinks}></Dropdown>
        </div>
      </Container>
    </div>
  )
}

export default Header
