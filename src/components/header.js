import * as React from "react"
import { useState } from "react"
import NavList from "./nav-list"
import { Container } from "react-bootstrap"
import List from "./list"
import LoginModal from "./login-modal"
import NewsletterModal from "./newsletter-modal"
import CallLink from "./callLink"

const Header = ({ companyName, menuLinks }) => {
  const [modalShow, setModalShow] = useState(false)
  const [newsletterModal, setNewsletterModal] = useState(false)
  const linksObj = JSON.parse(JSON.stringify(menuLinks))
  const links = linksObj.map(i => {
    if (i.subLinks && i.subLinks.length) {
      i.subLinks = i.subLinks.map(j => {
        j.subLinks = j.subLinks.map(k => {
          k.subLinks = k.subLinks.map(l => {
            l.url = i.url + j.url + k.url + l.url
            return l
          })
          k.url = i.url + j.url + k.url
          return k
        })
        j.url = i.url + j.url
        return j
      })
    }
    return i
  })

  return (
    <React.Fragment>
      <List
        show={modalShow}
        nlShow={newsletterModal}
        onShow={() => setModalShow(true)}
        onNlshow={() => setNewsletterModal(true)}
        menuLinks={links}
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
        <h3 className="strong lead">
          Call Us: <CallLink />
        </h3>
      </Container>
      <Container className="d-flex justify-content-center justify-content-lg-between py-2">
        <h1>{companyName}</h1>
        <div className="d-none d-lg-flex">
          <NavList menuLinks={menuLinks}></NavList>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default Header
