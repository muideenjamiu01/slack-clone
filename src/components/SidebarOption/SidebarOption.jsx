import React from "react";

import "./SidebarOption.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import db from "../../firebase";
function SidebarOption({ Icon, title, id, addChannelOption }) {
  const history = useHistory();
  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name");
    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  return (
    <div
      className="sidebarOption"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {/* if icon is passed as a props then render an icon else dont */}
      {Icon && <Icon className="sidebarOption__icon" />}
      {/* if an icon is passed show h3 with title name Else show # title as trend channel */}
      {Icon ? (
        <h3> {title} </h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash"># {title}</span>
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
