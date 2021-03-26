import React from "react";

export default function SidebarOption(props) {
  console.log(props);
  return (
    <>
      <div className="sidebarOption">
        {props.icon}
        <h2>{props.text}</h2>
      </div>
    </>
  );
}
