import * as React from "react"
import SidebarItem from "./SidebarItem"

export default function Sidebar({ items }) {
  const menuLinks = [...items.map(i => {
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
  })]
  return (
    <div className="sidebar">
      {menuLinks?.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  )
}
