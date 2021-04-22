import React from "react";
import Button from "../Assets/Button";
import Logo from "../Assets/Logo/Logo";
import Copy from "../Items/Copy/Copy";
import Dark from "../Items/DarkMode/DarkMode";
import Navigation from "../Navigation/Navigation";
import "./Layout.css";

const Layout = (props) => {
  return (
    <main>
      <Navigation />
      <Dark />
      <div className="purple"></div>
      <div className="section">
        <Logo />
        {props.children}
        <Button />
      </div>
      <Copy />
    </main>
  );
};

export default Layout;
