import React, { useState } from 'react';
import botModal from './img/Frame 771202.png';
import ChatModal from './BotModal';
import * as style from '../Pages/Main/Main.module.css';

const ChatBot = () => {
    const [bot, togleBot] = useState(false);

    return (
        <div className={style.bot_wrapper}>
            <div className={style.bot}>
                <button className={style.bot_bnt} onClick={() => togleBot(!bot)}>
                    <img src={botModal} alt="Bot"/>
                </button>
                <ChatModal bot={bot} toggleBot={() => togleBot(!bot)} style={style}/>
            </div>
        </div>
    );
};

export default ChatBot;
