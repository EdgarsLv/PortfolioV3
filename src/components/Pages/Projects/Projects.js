import React from "react";
import Title from "../../Items/Title/Title";
import Dots from "../../Scene/Dots/Dots";
import Container, { Animation } from "../../Items/Tags/Tags";

const Projects = () => {
  return (
    <>
      <Container>
        <Animation>
          <Dots />
        </Animation>
        <div className="left">
          <Title title="Projects" />
        </div>
        <div className="right">right</div>
      </Container>
    </>
  );
};

export default Projects;
