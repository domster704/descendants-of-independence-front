import React from "react";
import Wrapper from "../../../components/UI/Wrapper/Wrapper";
import ChatBot from "../../ChatBot/ChatBot";
import AboutTop from "./AboutTop";
import AboutBottom from "./AboutBottom";

const About = () => {
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
