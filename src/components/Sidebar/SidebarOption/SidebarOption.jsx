import React from "react";

export default function SidebarOption(props) {
  console.log(props);
  return (
    <>
      <div className="sidebarOption">{props.icon}</div>
      <h3>{props.text}</h3>
    </>
  );
}
