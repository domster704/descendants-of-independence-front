import React, { useEffect } from "react";
import Wrapper from "../../../components/UI/Wrapper/Wrapper";
import ChatBot from "../../ChatBot/ChatBot";
import AboutTop from "./AboutTop";
import AboutBottom from "./AboutBottom";

const About = () => {
     useEffect(() => {
        const element = document.documentElement;
        element.scrollIntoView({ behavior: "instant", block: "start" });
  }, []);
    return (
        <section>
            <Wrapper>
                <AboutTop/>
                <AboutBottom/>
            </Wrapper>
        </section>
    );
};

export default About;
