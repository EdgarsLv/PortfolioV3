import React from "react";
import Title from "../../Items/Title/Title";
import mask from "../../Assets/images/mask.jpg";
import Container, { Text, Txt } from "../../Items/Tags/Tags";
import "./About.css";

const About = () => {
  return (
    <>
      <Container>
        <div className="left">
          <Title title="about me" />

          <div className="aboutme">
            <Text>
              I'm Front End Developer / Web Designer located in Latvia. I have a
              serious passion for UI effects, animations and creating intuitive,
              dynamic user experiences.{" "}
            </Text>
            <Text>
              Well-organised person, problem solver, independent employee with
              high attention to detail. Like mountain skiing, various sport
              activities, TV series and psychology.
            </Text>
            <Txt color="red" margin-top="50px">
              Interested in the entire frontend spectrum and working on
              ambitious projects with positive people.{" "}
            </Txt>
          </div>
        </div>
        <div className="right">
          <img src={mask} alt="men" />
        </div>
      </Container>
    </>
  );
};

export default About;
