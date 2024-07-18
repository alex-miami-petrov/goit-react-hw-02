import React from "react";
import "./friendListItem.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className="friend">
      <img
        src={avatar}
        alt={`Avatar of ${name}`}
        width="48"
        className="friend__avatar"
      />
      <p className="friend__name">{name}</p>
      <p className={`friend__status ${isOnline ? "online" : "offline"}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
