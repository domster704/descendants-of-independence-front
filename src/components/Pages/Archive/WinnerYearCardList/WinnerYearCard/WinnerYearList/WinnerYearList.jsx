import React from "react";
import { useSelector } from "react-redux";
import WinnerYearListRow from "./WinnerYearListRow/WinnerYearListRow";
import { useTranslation } from "react-i18next";

import * as styles from "./WinnerYearList.module.css";

const WinnerYearList = ({ year }) => {
  const { t } = useTranslation("archive");
  let winnerStore = useSelector((store) => store.winner);
  let yearList = winnerStore.winnerCards[year];
  let filterCategory = winnerStore.filter.filterCategory;

  return (
    <div className={styles.table}>
      <WinnerYearListRow
        data={{
          name: t("fio"),
          project: t("project_name"),
          region: t("city"),
          status: t("project_status"),
        }}
        isHeader={true}
        category={t("napravlenie")}
      />
      {Object.keys(yearList).map((key, index) => {
        return yearList[key].map((el, index) => {
          return (
            <WinnerYearListRow
              data={el}
              key={index}
              category={filterCategory[key].children}
            />
          );
        });
      })}
    </div>
  );
};

export default WinnerYearList;
