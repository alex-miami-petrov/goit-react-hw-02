import React from "react";

import FriendListItem from "./friendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className="friendList">
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
