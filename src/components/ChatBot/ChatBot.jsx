import React, {useState} from "react";
import botModal from "./img/chat_bot_svg.png";
import ChatModal from "./BotModal";
import * as style from "./BotModal.module.css";

const ChatBot = () => {
    const [bot, toggleBot] = useState(false);

    return (
        <div className={style.bot_wrapper}>
            <div className={style.bot}>
                <button className={style.bot_bnt} onClick={() => toggleBot(!bot)}>
                    <img src={botModal} alt="botModal"/>
                </button>
                <ChatModal bot={bot} toggleBot={() => toggleBot(!bot)} style={style}/>
            </div>
        </div>
    );
};

export default ChatBot;
