import React from "react";
// import Anime from "../Assets/Anime";
// import Particles from "../../Threed/Particles";
// import Skills from "../Threed/Skills";
import Title from "../../Items/Title/Title";
import Container, { Text } from "../../Items/Tags/Tags";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Container>
        <div className="left">
          <Title title="hi," />
          <Title margin="0 0 0 50px" title="Im edgars," />
          <Title margin="0 0 0 50px" title="web developer" />
          <Text margin="0 0 0 50px">Front End Developer / Web Designer</Text>
        </div>

        {/* <div className="right">right</div> */}
      </Container>
    </>
  );
};

export default Home;
