import React from "react";
import * as style from "./Tabs.module.css";

const TabsButton = ({ activeTab, handleTabClick }) => {
  return (
    <div className={style.tabs_container}>
      <button
        onClick={() => handleTabClick("new-requests")}
        className={`${style.tabs} ${
          activeTab === "new-requests" && style.active
        }`}
      >
        Новые заявки
      </button>
      <button
        onClick={() => handleTabClick("accepted-requests")}
        className={`${style.tabs} ${
          activeTab === "accepted-requests" && style.active
        }`}
      >
        Принятые заявки
      </button>
      <button
        onClick={() => handleTabClick("rework-requests")}
        className={`${style.tabs} ${
          activeTab === "rework-requests" && style.active
        }`}
      >
        Отправленные на доработку
      </button>
      <button
        onClick={() => handleTabClick("denied-requests")}
        className={`${style.tabs} ${
          activeTab === "denied-requests" && style.active
        }`}
      >
        Отказано
      </button>
    </div>
  );
};

export default TabsButton;
