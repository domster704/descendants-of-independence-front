import React, { useState } from "react";
import Carth from "./MainComponents/Carth";
import GrandInfo from "./MainComponents/GrantInfo";
import mainLogo from "./img/image 28.jpg";
import { Link } from "react-router-dom";
import * as style from "./Main.module.css";
import botModal from "./img/Frame 771202.png";
import ChatModal from "./MainComponents/BotModal";

const Main = () => {
  const [bot, togleBot] = useState(false);
  return (
      <div className={style.main}>
          <h1 className={style.hidden}>Main</h1>
          <img className={style.main_logo} src={mainLogo} alt="main logo"/>
          <GrandInfo/>
          <Carth/>
          <div className={style.bot}>
              <button className={style.bot_bnt} onClick={() => togleBot(!bot)}>
                  <img src={botModal} alt="Bot"/>
              </button>
              <ChatModal bot={bot} toggleBot={() => togleBot(!bot)} style={style}/>
          </div>
          <Link to="/test">Test Page</Link>
          <br/>
          <Link to="/archive">Archive Page</Link>
          <br/>
          <Link to="/statement">Statement Page</Link>
      </div>
  );
};

export default Main;
