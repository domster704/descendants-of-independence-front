import React from "react";
import Carth from "./MainComponents/Carth";
import GrandInfo from "./MainComponents/GrantInfo";
import mainLogo from "./img/image 28.jpg";
import { Link } from "react-router-dom";
import * as style from "./Main.module.css";
import ChatBot from "../../ChatBot/ChatBot";

const Main = () => {
  return (
    <div className={style.main}>
      <h1 className={style.hidden}>Main</h1>
      <img className={style.main_logo} src={mainLogo} alt="main logo" />
      <div style={{ position: "relative" }}>
        <GrandInfo />
      </div>
      <Carth />
      <ChatBot />
    </div>
  );
};

export default Main;
