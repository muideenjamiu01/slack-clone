import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Chat.css";
import { StarBorderOutlined, InfoOutlined } from "@material-ui/icons";
import db from "../../firebase";
import Message from "../Message/Message";
import ChatInput from "./../ChatInput/ChatInput";

function Chat() {
  // getting parameter from url
  const { roomId } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    // if roomId exist do this
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);
  console.log(roomDetails);
  return (
    <div className="chat">
      You are in the {roomId} room
      <div className="chat__header">
        <div className="chat__header_left">
          <h4 className="chat_channelName">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chat__header_right">
          <p>
            <InfoOutlined /> Details
          </p>
        </div>
      </div>
      <div className="chat__messages">
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            user={user}
            userImage={userImage}
            message={message}
            timestamp={timestamp}
          />
        ))}
      </div>
      <ChatInput channelName={roomDetails?.name} channelID={roomId} />
    </div>
  );
}

export default Chat;
