import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import SearchIcon from "@material-ui/icons/Search";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import { useStateValue } from "../../StateProvider";
function Header() {
  const [{ user }] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        {/* <div className="header_left_icon"> */}
        {/* avatar for user login */}
        <Avatar
          className="header__avatar"
          src={user?.photoURL}
          alt={user?.displayName}
        />
        {/* time icon */}
        <AccessTimeIcon />
        {/* </div> */}
      </div>
      <div className="header__search">
        <SearchIcon />
        {/* input */}
        <input placeholder="search chat" />
      </div>
      <div className="header-right">
        {/* help icon */}
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
