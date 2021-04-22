import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  return (
    <li className="link">
      <NavLink
        exact={props.exact}
        to={props.link}
        data-back={props.back}
        // data-front={props.front}
        activeStyle={{
          // fontWeight: "bold",
          color: "var(--accent-clr)",
        }}
      >
        {/* {props.name} */}
        {props.icon}
      </NavLink>
    </li>
  );
};

export default NavItem;
