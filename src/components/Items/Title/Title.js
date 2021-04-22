import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  margin: ${(props) => props.margin || "120px 0 0 50px"};
  text-transform: uppercase;
  font-size: 3em;
  z-index: 100;
  position: relative;
`;

const Title = (props) => {
  return <H1 margin={props.margin}>{props.title}</H1>;
};

export default Title;
