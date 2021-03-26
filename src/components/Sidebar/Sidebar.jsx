import React from "react";
import SidebarOption from "./SidebarOption/SidebarOption";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import "./StyleSidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SidebarOption active={true} text={"Home"} icon={<HomeIcon />} />
      <SidebarOption text={"Explore"} icon={<SearchIcon />} />
      <SidebarOption text={"Notifications"} icon={<NotificationsNoneIcon />} />
      <SidebarOption icon={<MailOutlineIcon />} text="Messages" />
      <SidebarOption icon={<BookmarkBorderIcon />} text="Bookmarks" />
      <SidebarOption icon={<ListAltIcon />} text="Lists" />
      <SidebarOption icon={<PermIdentityIcon />} text="Profile" />
      <SidebarOption icon={<MoreHorizIcon />} text="More" />
      <Button variant="outlined" className="sidebar-tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
