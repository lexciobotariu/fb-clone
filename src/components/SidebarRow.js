import React from 'react'
import { Avatar } from "@material-ui/core"
// this component it is used in Sidebar.js
function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src}/>}
      {Icon && <Icon />}
      <h4>{title}</h4> 
    </div>
  )
}

export default SidebarRow
