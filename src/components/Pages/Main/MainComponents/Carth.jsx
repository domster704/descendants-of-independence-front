import React, { useEffect, useState } from "react";
import * as style from "../Main.module.css";
import Wrapper from "../../../../components/UI/Wrapper/Wrapper";
import { useTranslation } from "react-i18next";

const Carth = () => {
  const { t , i18n} = useTranslation("main");
  const culture = t("culture");
  const sciens = t("sciens")
  const business = t("business")
  const informationTechnology = t("informationTechnology")
  const media = t("media")

  const buttonText = {
    culture,
    sciens,
    business,
    informationTechnology,
    media,
  };

  const [activeButton, setActiveButton] = useState("Культура");
  const [initialText, setText] = useState(buttonText.culture);
  useEffect(() => {
    setText(buttonText.culture)  
  },[t])

  const handleButtonClick = (newText, buttonTitle) => {
    setText(newText);
    setActiveButton(buttonTitle);
  };
  return (
    <Wrapper>
      <section className={style.carth}>
        <div className={style.carth_flex}>
          <div className={style.carth_info}>
            <h3 className={style.carth_title}>{t("grant_sum")}</h3>
            <div>
              <span className={style.custom_btn}>3 000 000тг</span>
              <p className={style.carth_info_text}>{t("grant_text")}</p>
            </div>
          </div>
          <div className={style.carth_info}>
            <h3 className={style.carth_title}>{t("grant_grant")}</h3>
            <div className={style.button_group}>
              <button
                className={
                  activeButton === "Наука"
                    ? `${style.carth_btn} ${style.active_btn}`
                    : style.carth_btn
                }
                onClick={() => handleButtonClick(buttonText.sciens, "Наука")}
              >
                {t("grant_btn_sciens")}
              </button>
              <button
                className={
                  activeButton === "Культура"
                    ? `${style.carth_btn} ${style.active_btn}`
                    : style.carth_btn
                }
                onClick={() =>
                  handleButtonClick(buttonText.culture, "Культура")
                }
              >
                {t("grant_btn_culture")}
              </button>
              <button
                className={
                  activeButton === "Бизнес"
                    ? `${style.carth_btn} ${style.active_btn}`
                    : style.carth_btn
                }
                onClick={() => handleButtonClick(buttonText.business, "Бизнес")}
              >
                {t("grant_btn_bisiness")}
              </button>
              <div className={style.btn_flex}>
                <button
                  className={
                    activeButton === "Информационные технологии"
                      ? `${style.carth_btn} ${style.active_btn}`
                      : style.carth_btn
                  }
                  onClick={() =>
                    handleButtonClick(
                      buttonText.informationTechnology,
                      "Информационные технологии"
                    )
                  }
                >
                  {t("grant_btn_information")}
                </button>
                <button
                  className={
                    activeButton === "Медиа"
                      ? `${style.carth_btn} ${style.active_btn}`
                      : style.carth_btn
                  }
                  onClick={() => handleButtonClick(buttonText.media, "Медиа")}
                >
                  {t("grant_btn_media")}
                </button>
              </div>
              <p className={`${style.carth_text} ${style.text_custom}`}>
                {initialText}
              </p>
            </div>
          </div>
          <div className={style.carth_info}>
            <h3 className={style.carth_title}>{t("grant_lastCarth_title")}</h3>
            <p className={style.custom_bg}>{t("grant_lastCarth_text")}</p>
          </div>
        </div>
        <p className={style.carth_text}>{initialText}</p>
      </section>
    </Wrapper>
  );
};

export default Carth;
