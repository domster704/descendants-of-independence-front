import React, {useState} from "react";
import TabsButton from "./TabsButton";
import SortSelect from "../Select/SortSelect";
import TabContent from "./TabContent";
import * as style from "./Tabs.module.css";
import Wrapper from "../../UI/Wrapper/Wrapper";

let data = [
    {
        id: 1,
        name: "Дмитрий Жориков",
        date: "16.10.2023",
        region: "Тараз",
        status: "В ожидании действий",
    },
    {
        id: 2,
        name: "Серик Асылжан",
        date: "16.10.2023",
        region: "Астана",
        status: "В ожидании действий",
    },
];

const TabContainer = () => {
    const [activeTab, setActiveTab] = useState("new-requests");
    const [sortValue, setSortValue] = useState("new");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <Wrapper>
            <TabsButton activeTab={activeTab} handleTabClick={handleTabClick}/>
            <div className={style.select_wrapper}>
                <SortSelect
                    value={sortValue}
                    onChange={(value) => setSortValue(value)}
                />
            </div>
            <TabContent data={data} activeTab={activeTab} sortValue={sortValue}/>
        </Wrapper>
    );
};

export default TabContainer;
