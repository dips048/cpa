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
        <a style={{textDecoration: "none", color: "#2d3e50"}} className="flex-grow-1 text-center" href="mailto:support@cpasitesolutions.com" >
          <FontAwesomeIcon
            icon={faEnvelope}
          ></FontAwesomeIcon>
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
          {/* <ul style={{ listStyle: "none", padding: 0 }}>
            {menuLinks?.map((link1, i) => (
              <li style={{ padding: ".5rem 1rem" }} key={link1.url + "-" + i}>
                <Link to={link1.url}>{link1.name}</Link>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {link1.subLinks?.map((link2, j) => {
                    return (
                      <li
                        style={{ padding: ".5rem 1rem" }}
                        key={link2.url + "-" + j}
                      >
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
                                    <Link
                                      to={
                                        link1.url +
                                        link2.url +
                                        link3.url +
                                        link4.url
                                      }
                                    >
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
          </ul> */}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default List
