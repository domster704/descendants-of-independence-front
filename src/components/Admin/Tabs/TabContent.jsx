import React from "react";

const TabContent = ({ data, activeTab, sortValue }) => {
  const sortedData = data.slice().sort((a, b) => {
    if (sortValue === "name") {
      return a.name.localeCompare(b.name);
    }
    if (sortValue === "region") {
      return a.region.localeCompare(b.region);
    }
    if (sortValue === "old") {
      return a.id - b.id;
    }
    if (sortValue === "new") {
      return b.id - a.id;
    }
    return 0;
  });

  return (
    <div>
      {activeTab === "new-requests" && (
        <ul>
          {sortedData.map((item) => (
            <li key={item.id}>
              {item.name} - {item.region} - {item.status}
            </li>
          ))}
        </ul>
      )}
      {activeTab !== "new-requests" && (
        <ul>
          {sortedData.map((item) => (
            <li key={item.id}>
              {item.name} - {item.region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TabContent;
