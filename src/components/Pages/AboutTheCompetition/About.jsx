import React from "react";
import Wrapper from "../../Wrapper/Wrapper";
import ChatBot from "../../ChatBot/ChatBot";
import AboutTop from "./AboutTop";
import AboutBottom from "./AboutBottom";

const About = () => {
  return (
    <section>
      <Wrapper>
        <AboutTop />
        <AboutBottom />
      </Wrapper>
      <ChatBot />
    </section>
  );
};

export default About;
