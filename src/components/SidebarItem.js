import * as React from "react"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"

export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false)

  if (item.subLinks && item.subLinks.length) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title">
          <a href={item.url || "#"} className="sidebar-item plain">
            {item.name}
          </a>
          <FontAwesomeIcon
            className="toggle-btn"
            onClick={() => setOpen(!open)}
            icon={faAngleDown}
          ></FontAwesomeIcon>
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
