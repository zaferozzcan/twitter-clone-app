import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SidebarOption from "./SidebarOption/SidebarOption";
import "./StyleSidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon />

      <SidebarOption icon={<HomeIcon />} />
    </div>
  );
}

export default Sidebar;
