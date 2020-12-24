import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash"># </span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="Sidebar">
      <div className="Sidebar_top">
        <img
          src="https://static-exp1.licdn.com/sc/h/cpemy7gsm8bzfb5nnbbnswfdm"
          alt=""
        />
        <Avatar src={user.photoURL} className="Sidebar__avator">
          {" "}
          {user.email[0].toUpperCase()}{" "}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="Sidebar__stats">
        <div className="Sidebar__stat">
          <p>Who viewed you</p>
          <p className="Sidebar__statNumber">1,654</p>
        </div>
        <div className="Sidebar__stat">
          <p>Who viewed you</p>
          <p className="Sidebar__statNumber">2,436</p>
        </div>
      </div>

      <div className="Sidebar_bottom">
        <p>Recent</p>
        {recentItem("Git")}
        {recentItem("Programming")}
        {recentItem("Design")}
        {recentItem("Developer")}
        {recentItem("Moocs")}
      </div>
    </div>
  );
}

export default Sidebar;
