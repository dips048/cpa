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

const List = ({ menuLinks, onShow, onNlshow }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <div>
      <div className="d-flex justify-content-between d-lg-none py-2">
        <FontAwesomeIcon
          className="flex-grow-1"
          icon={faLock}
          onClick={onShow}
        ></FontAwesomeIcon>

        <FontAwesomeIcon
          className="flex-grow-1"
          icon={faFeed}
          onClick={onNlshow}
        ></FontAwesomeIcon>
        <a
          style={{ textDecoration: "none", color: "#2d3e50" }}
          className="flex-grow-1 text-center"
          href="mailto:support@cpasitesolutions.com"
        >
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        </a>

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
          <Sidebar items={menuLinks} />
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default List
