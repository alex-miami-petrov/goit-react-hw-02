import React from "react";
import "./profile.css";

const Profile = ({ name, tag, location, image, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className="profile">
      <div className="profile__wrapper">
        <img src={image} alt="User avatar" className="profile__avatar" />
        <p className="profile__name">{name}</p>
        <p className="profile__tag">@{tag}</p>
        <p className="profile__location">{location}</p>
      </div>

      <ul className="profile__stats">
        <li>
          <span className="profile__label">Followers</span>
          <span className="profile__quantity">{followers}</span>
        </li>
        <li>
          <span className="profile__label">Views</span>
          <span className="profile__quantity">{views}</span>
        </li>
        <li>
          <span className="profile__label">Likes</span>
          <span className="profile__quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
