import React from "react";
import { auth } from "../../firebase";

import "./Profile.scss";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import RedditIcon from "@material-ui/icons/Reddit";

function Profile({ user }) {
  const signOut = () => {
    auth.signOut();
  };

  return (
    <div className="profile">
      <div className="profile_nav">
        <MoreVertIcon />
        <a onClick={signOut}>
          <ExitToAppIcon />
        </a>
      </div>

      <div className="profile_main">
        <img src={user.photoURL}></img>
        <h2>{user.displayName}</h2>
        <p>{user.email}</p>
        <button>Hire me</button>
      </div>
      <hr />
      <div className="profile_bottom">
        <div className="social_md">
          <InstagramIcon className="social_md_icon instagram" />
          <h3>12.8k</h3>
          <p>Followers</p>
        </div>
        <div className="social_md">
          <LinkedInIcon className="social_md_icon linkedin" />
          <h3>12.8k</h3>
          <p>Followers</p>
        </div>
        <div className="social_md">
          <RedditIcon className="social_md_icon reddit" />
          <h3>12.8k</h3>
          <p>Followers</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
