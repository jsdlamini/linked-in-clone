import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOption.css";

function HeaderOption({ avator, Icon, title }) {
  return (
    <div className="HeaderOption">
      {Icon && <Icon className="HeaderOption__icon" />}
      {avator && <Avatar className="HeaderOption__icon" src={avator} />}
      <h3 className="HeaderOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
