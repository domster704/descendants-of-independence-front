import React, { useState } from "react";
import gerb from "./img/_РЎР»РѕР№_1.svg";
import { useTranslation } from "react-i18next";

function ChatModal({ bot, toggleBot, style }) {
  const { t } = useTranslation("chat");
  const questions = t("questions", { returnObjects: true });
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
      <img className={style.img_position} src={gerb} alt="Gerb" />
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
      <button className={style.close_btn} onClick={() => toggleBot(!bot)}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 14 14"
          fill="#007bff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 1L1 13M13 13L1 1.00001"
            stroke="#007bff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default ChatModal;
