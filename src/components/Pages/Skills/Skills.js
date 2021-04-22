import React from "react";
import Title from "../../Items/Title/Title";
import Skill from "../../Scene/Skill/Skill";
import Container, { Animation, Text } from "../../Items/Tags/Tags";

const Skills = () => {
  return (
    <Container justify-content="flex-start">
      <Animation>
        <Skill />
      </Animation>
      <div className="left">
        <Title title="skills" />
        <div className="aboutme">
          <Text>
            The main area of my expertise is front-end development, HTML, CSS,
            JS, building small and medium web apps, animations, and coding
            interactive layouts.
          </Text>
          <Text>
            Recently started to design web in Adobe XD and will keep improving
            my UI/UX skills and experience designing using other tools.{" "}
          </Text>
        </div>
      </div>
      {/* <div className="right">right</div> */}
    </Container>
  );
};

export default Skills;
