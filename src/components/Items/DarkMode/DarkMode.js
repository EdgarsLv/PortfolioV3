import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocalState } from "./LocalSave";
// import Power from "../../components/UI/Button/Power";
import styled from "styled-components";
import sun from "../../Assets/images/sunny.svg";
import moon from "../../Assets/images/moon.svg";

const Switch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: #f8f8f8; */
  height: 30px;
  width: 30px;
  filter: drop-shadow(0 0 3px yellow);
  /* border-radius: 50%; */
  /* border: 2px dashed var(--primary-bg); */
  position: absolute;
  top: 2rem;
  right: 5rem;
  cursor: pointer;
`;
const Img = styled.img`
  width: 30px;
`;

function Dark() {
  const [theme, setTheme] = useLocalState("theme", "light");

  return (
    <HelmetProvider>
      <Helmet>
        <body data-theme={theme} />
      </Helmet>

      <Switch
        onClick={() => setTheme((cur) => (cur === "light" ? "dark" : "light"))}
      >
        <Img src={theme === "light" ? sun : moon} alt="x" />
      </Switch>
    </HelmetProvider>
  );
}
export default Dark;
