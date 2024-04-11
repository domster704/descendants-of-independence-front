import React from "react";
import { Link } from "react-router-dom";
import success from "./img/Vector (1).png";
import * as style from "./Success.module.css";
import {useTranslation} from 'react-i18next'

const Success = () => {
  const {t} = useTranslation("success")
  return (
    <div className={style.success_section}>
      <h2 className={style.hidden}>{t("heading") }</h2>
      <p className={style.hidden}>{t("success_description") }</p>
      <div className={style.success_window}>
        <img className={style.success_img} src={success} />
        <p className={style.success_text}>{t("success_message") }</p>
        <p className={style.success_text_gray}>
          {t("email_notification")}
        </p>
        <Link className={style.success_btn} to="/">
          {t("main_page_link")}
        </Link>
      </div>
    </div>
  );
};

export default Success;
