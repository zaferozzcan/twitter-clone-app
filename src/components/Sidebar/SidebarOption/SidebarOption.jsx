import React from "react";

export default function SidebarOption(props) {
  console.log(props);
  return (
    <div className="sidebar-option">
      {/* <div className="sidebar-item"> */}
      {props.icon}
      {/* </div> */}
    </div>
  );
}
