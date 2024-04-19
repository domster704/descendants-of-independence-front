import React, {useState} from "react";
import chat_bot_svg from "./img/chat_bot_img_small.png";
import chat_bot_online from "./img/online.svg";
import {useTranslation} from "react-i18next";
import * as style from "./BotModal.module.css";

function ChatModal({bot, toggleBot}) {
    const {t} = useTranslation("chat");
    const questions = t("questions", {returnObjects: true});
    const [activeAnswer, setActiveAnswer] = useState(null);

    const handleQuestionClick = (index) => {
        if (activeAnswer === index) {
            setActiveAnswer(null);
        } else {
            setActiveAnswer(index);
        }
    };

    const renderAnswerWithLinks = (answer, url) => {
        const regex = /“(.*?)”/g;
        let lastIndex = 0;
        let parts = [];
        let match;

        while ((match = regex.exec(answer)) !== null) {
            const startIndex = match.index;
            const endIndex = regex.lastIndex;

            parts.push(answer.substring(lastIndex, startIndex));
            parts.push(
                <a className={style.link} key={startIndex} href={url} target="_blank">
                    {match[0]}
                </a>
            ); // добавляем ссылку на слово в кавычках

            lastIndex = endIndex;
        }

        parts.push(answer.substring(lastIndex));

        return parts;
    };

    return (
        <div className={`${style.bot_modal} ${bot ? "" : style.hidden}`}>
            <div className={style.bot_top}>
                <div className={style.bot_top_header}>
                    <div className={style.bot_modal_img_block}>
                        <div className={style.bot_modal_img} style={{backgroundImage: `url(${chat_bot_svg})`}}></div>
                    </div>
                    <div className={style.bot_modal_header_text}>
                        <p>ChatBot</p>
                        <div>
                            <div className={style.bot_online_img} style={{backgroundImage: `url(${chat_bot_online})`}}></div>
                            <p>Online Now</p>
                        </div>
                    </div>
                </div>

                <button className={style.close_btn} onClick={() => toggleBot(!bot)}>
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 14 14"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M13 1L1 13M13 13L1 1.00001"
                            stroke="#fff"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </button>
            </div>
            <div className={style.questions_list}>
                {questions.map((item, index) => {
                    return (
                        <div key={index}>
                            <button
                                className={style.modal_questions}
                                onClick={() => handleQuestionClick(index)}
                            >
                                {item.question}
                            </button>
                            {activeAnswer === index && (
                                <p className={style.bot_text}>
                                    {renderAnswerWithLinks(item.answer, item.url)}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ChatModal;
