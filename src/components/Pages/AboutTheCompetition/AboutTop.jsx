import React from "react";
import * as style from "./About.module.css";
import firstBg from "./img/free-icon-font-shield-check-3917627 (1) 1.png";
import secondBg from "./img/Group.png";
import tableBg from "./img/free-icon-font-document-3914660 1.png";
import paperPlanBg from "./img/free-icon-font-paper-plane-3917628 1.png";
import { useTranslation } from "react-i18next";


const AboutTop = () => {
  const { t } = useTranslation('about');
  return (
    <div className={style.about_top}>
      <h2 className={style.about_title}>
        {t('about_title')}
      </h2>
      <div className={style.carth_wrapper}>
        <div className={style.about_carth}>
          <img src={firstBg} />
          <p className={style.about_text}>
          {t('about_text_concurse')} 
          </p>
        </div>
        <div className={style.about_carth}>
          <img src={secondBg} />
          <p className={style.about_text}>
            {t('about_text_add')}
          </p>
        </div>
        <div className={style.about_carth}>
          <img src={tableBg} />
          <p className={style.about_text}>
            {
              t("about_criteria")
            }
          </p>
        </div>
        <div className={style.about_carth}>
          <img src={paperPlanBg} />
          <p className={style.about_text}>
            {t('about_form') }{" "}
            <a className={style.navigate_link} href="#/statement">
              {t("about_text_field")}
            </a>{" "}
            {t("about_file")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutTop;
