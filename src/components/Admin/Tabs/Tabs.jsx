// TabContainer.js
import React, { useState } from "react";
import TabsButton from "./TabsButton";

const TabContainer = () => {
  const [activeTab, setActiveTab] = useState("new-requests");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <TabsButton activeTab={activeTab} handleTabClick={handleTabClick} />
      <div>
        {activeTab === "new-requests" && <h2>Новые заявки</h2>}
        {activeTab === "accepted-requests" && <h2>Принятые заявки</h2>}
        {activeTab === "rework-requests" && <h2>Отправленные на доработку</h2>}
        {activeTab === "denied-requests" && <h2>Отказано</h2>}
      </div>
    </div>
  );
};

export default TabContainer;
