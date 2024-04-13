import React from "react";

import * as styles from "./WinnerCardFiltered.module.css";
import ArrowButton from "../../../../UI/ArrowButton/ArrowButton";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import default_img from "../../../../../assets/img/archiveWinnerImg/default.png";

const WinnerCardFiltered = () => {
  const { t } = useTranslation("archive");
  let winnerState = useSelector((state) => state.winner);

  let winnerCards =
    winnerState.winnerCards[winnerState.filter.year][winnerState.filter.active];

  let [currentWinnerIndex, setCurrentWinnerIndex] = React.useState(0);

  const arrowLeftOnClick = () => {
    if (currentWinnerIndex === 0) return;
    setCurrentWinnerIndex(currentWinnerIndex - 1);
  };

  const arrowRightOnClick = () => {
    if (currentWinnerIndex === winnerCards.length - 1) return;
    setCurrentWinnerIndex(currentWinnerIndex + 1);
  };

  return (
    <div className={styles.winner_card}>
      <div className={styles.info}>
        <div className={styles.left}>
          <p>
            <b>{t("fio")}:</b>
          </p>
          <p>{winnerCards[currentWinnerIndex]?.name}</p>

          <p>
            <b>{t("age")}:</b>
          </p>
          <p>{winnerCards[currentWinnerIndex]?.age || "-"}</p>

          <p>
            <b>{t("city")}:</b>
          </p>
          <p>{winnerCards[currentWinnerIndex]?.region || "-"}</p>

          <p>
            <b>{t("project")}:</b>
          </p>
          <p>{winnerCards[currentWinnerIndex]?.project || "-"}</p>

          <p>
            <b>{t("target")}:</b>
          </p>
          <p>{winnerCards[currentWinnerIndex]?.purpose || "-"}</p>

          <p>
            <b>{t("project_status")}:</b>
          </p>
          <p>
            <a>{winnerCards[currentWinnerIndex]?.status || "-"}</a>
          </p>
        </div>
        <div className={styles.right}>
          <img
            loading="lazy"
            className={styles.winner_card_img}
            src={winnerCards[currentWinnerIndex]?.image || default_img}
            alt=""
          />
          <div className={styles.arrows}>
            <ArrowButton onClick={arrowLeftOnClick} />
            <ArrowButton direction="right" onClick={arrowRightOnClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinnerCardFiltered;
