import React, { useState, useRef } from "react";
import gerb from "./img/_РЎР»РѕР№_1.svg";

function ChatModal({ bot, toggleBot, style }) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const handleMessageSend = () => {
    if (inputValue.trim() !== "") {
      setMessages((prevMessages) => [inputValue, ...prevMessages]);
      setInputValue("");
    }
  };

  return (
    <div className={`${style.bot_modal} ${bot ? "" : style.hidden}`}>
      <img className={style.img_position} src={gerb} alt="Gerb" />
      <div className={style.chat_container}>
        {messages.length ? null : (
          <p className={style.welcome}>
            Здравствуйте! чем мы вам можем помочь?
          </p>
        )}
        <div className={style.chat_messages}>
          {messages.map((message, index) => (
            <div key={index} className={style.message}>
              {message}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <textarea
          className={style.textarea_field}
          placeholder="Введите ваше сообщение..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className={style.send_button} onClick={handleMessageSend}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
      <button className={style.close_btn} onClick={() => toggleBot(!bot)}>
        <svg
          width="14"
          height="14"
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
