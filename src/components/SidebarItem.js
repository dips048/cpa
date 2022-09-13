import * as React from "react"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false)

  if (item.subLinks && item.subLinks.length) {
    return (
      <div className={open ? "open" : null}>
        <div className="sidebar-title">
          <a href={item.url || "#"} className="sidebar-item plain">
            {item.name}
          </a>
          <div className="tb-container" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon
              className="toggle-btn"
              icon={faAngleDown}
            ></FontAwesomeIcon>
          </div>
        </div>
        <div className="sidebar-content">
          {item.subLinks?.map((child, index) => {
            return <SidebarItem key={index} item={child} />
          })}
        </div>
      </div>
    )
  } else {
    return (
      <a href={item.url || "#"} className="sidebar-item plain">
        {item.name}
      </a>
    )
  }
}
