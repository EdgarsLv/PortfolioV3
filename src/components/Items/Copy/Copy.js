import React from "react";
import styled from "styled-components";

const Me = styled.div`
  position: absolute;
  bottom: 0.7rem;
  right: 2rem;
  text-transform: uppercase;
  font-size: 0.6rem;
  font-weight: 700;
`;

const Copy = () => {
  return (
    <Me>
      <p>&#169; 2021 Edgars Pucens</p>
    </Me>
  );
};

export default Copy;
