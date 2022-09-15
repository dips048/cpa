import * as React from "react"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLock,
  faFeed,
  faEnvelope,
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
    <>
      <div className="d-flex justify-content-between d-lg-none py-2">
        <span className="flex-grow-1 text-center icon-color" onClick={onShow}>
          <FontAwesomeIcon icon={faLock} size="sm"></FontAwesomeIcon>
        </span>
        <span className="flex-grow-1 text-center icon-color" onClick={onNlshow}>
          <FontAwesomeIcon icon={faFeed} size="sm"></FontAwesomeIcon>
        </span>
        <a
          className="flex-grow-1 text-center icon-color"
          href="mailto:support@cpasitesolutions.com"
        >
          <FontAwesomeIcon icon={faEnvelope} size="sm"></FontAwesomeIcon>
        </a>
        <CallLink icon={true} className="flex-grow-1 text-center icon-color" />
        <span
          className="flex-grow-1 text-center icon-color"
          onClick={handleShow}
        >
          <FontAwesomeIcon data-testid="fa-icon-menu" icon={faNavicon} size="sm"></FontAwesomeIcon>
        </span>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement={"end"} backdrop={true} responsive="lg">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-0">
          <Sidebar items={menuLinks} />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default List
