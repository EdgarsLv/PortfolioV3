import React from "react";

const Social = (props) => {
  return (
    <i>
      <a href={props.link} target="blank">
        {props.icon}
      </a>
    </i>
  );
};

export default Social;
