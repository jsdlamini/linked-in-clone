import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
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
        <Avatar className="Sidebar__avator" />
        <h2>Johnson Dlamini</h2>
        <h4>johnsjdsd@gmail.com</h4>
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
