import * as React from "react"
import SidebarItem from "./SidebarItem"



export default function Sidebar({items}){
    return (
        <div className="sidebar">
          { items?.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}
