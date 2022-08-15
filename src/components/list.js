import * as React from "react"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLock,
  faFeed,
  faEnvelope,
  faPhone,
  faNavicon,
} from "@fortawesome/free-solid-svg-icons"
import Offcanvas from "react-bootstrap/Offcanvas"
import Sidebar from "./Sidebar"
import CallLink from "./callLink"

const List = ({ menuLinks, onShow, onNlshow }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div>
      <div className="d-flex justify-content-between d-lg-none py-2">
        <span className="flex-grow-1 text-center icon-color" onClick={onShow}>
          <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
        </span>
        <span className="flex-grow-1 text-center icon-color" onClick={onNlshow}>
          <FontAwesomeIcon icon={faFeed}></FontAwesomeIcon>
        </span>
        <a
          className="flex-grow-1 text-center icon-color"
          href="mailto:support@cpasitesolutions.com"
        >
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        </a>
        <CallLink icon={true} className="flex-grow-1 text-center icon-color" />
        <span
          className="flex-grow-1 text-center icon-color"
          onClick={handleShow}
        >
          <FontAwesomeIcon icon={faNavicon}></FontAwesomeIcon>
        </span>
      </div>

      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <Sidebar items={menuLinks} />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default List
