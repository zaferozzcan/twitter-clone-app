import React from "react";

export default function SidebarOption(props) {
  console.log(props);
  return (
    <>
      <div
        className={`sidebarOption ${props.active && "sidebarOption--active"}`}
      >
        {props.icon}
        <h2>{props.text}</h2>
      </div>
    </>
  );
}
