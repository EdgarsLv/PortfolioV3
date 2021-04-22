import React from "react";
import "./Navigation.css";
import { GrMail } from "react-icons/gr";
import {
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare,
  FaHome,
  FaSmileBeam,
  FaLaptopCode,
  FaCode,
} from "react-icons/fa";
import NavItem from "./NavItem";
import Social from "./Social";
import styled from "styled-components";

const Nav = styled.div`
  width: 150px;
  height: 100%;
  background: transparent;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  align-content: space-between;
`;

const Navigation = () => {
  return (
    <Nav>
      <div className="menu">
        <NavItem exact icon={<FaHome />} link="/" back="Home" />
        <NavItem icon={<FaLaptopCode />} link="/Projects" back="work" />
        <NavItem icon={<FaSmileBeam />} link="/About" back="about" />
        <NavItem icon={<FaCode />} link="/Skills" back="skills" />
        <NavItem icon={<GrMail />} link="/Contact" back="contact" />
      </div>
      <div className="social">
        <Social link="https://www.linkedin.com/" icon={<FaLinkedin />} />
        <Social link="https://www.linkedin.com/" icon={<FaFacebookSquare />} />
        <Social link="https://www.linkedin.com/" icon={<FaGithubSquare />} />
      </div>
    </Nav>
  );
};

export default Navigation;
