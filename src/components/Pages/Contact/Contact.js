import React from "react";
import Map from "../../Items/Map/Map";
import Title from "../../Items/Title/Title";
import Container, { Text } from "../../Items/Tags/Tags";
// import { motion } from "framer-motion";
import "./Contacts.css";

const Contact = () => {
  return (
    <Container>
      <div className="left">
        <Title title="contact" />
        <Text margin="0 0 10px 50px">Feel free to ask anything.</Text>
        <form>
          <div className="name">
            {/* <label>Name</label> */}
            <input placeholder="Name"></input>
            {/* <label>Email</label> */}
            <input placeholder="Email"></input>
          </div>
          <div className="subject">
            {/* <label>Subject</label> */}
            <input placeholder="Subject"></input>
          </div>
          <div className="message">
            {/* <label>Message</label> */}
            <textarea placeholder="Message..."></textarea>
          </div>
        </form>
      </div>
      <div className="right">
        <Map />
      </div>
    </Container>
  );
};

export default Contact;
