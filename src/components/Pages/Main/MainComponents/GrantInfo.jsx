import React from "react";
import * as style from "../Main.module.css";
import infoTopBg from "../img/Vector.jpg";
import infoBottomBg from "../img/vector2.jpg";
import Wrapper from "../../../../components/UI/Wrapper/Wrapper";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const GrandInfo = () => {
  const { t } = useTranslation("main");
  return (
    <section className={style.mainSection}>
      <img className={style.infoTopBg} src={infoTopBg} />
      <img className={style.infoBottomBg} src={infoBottomBg} />
      <Wrapper>
        <h2 className={style.main_title}>{t("grant_info")}</h2>
        <div className={style.section_wrapper}>
          <p>
            {t("grant_info2")}
            <Link to={"archive"}>{t("name_grant")}</Link>
          </p>
          <p>
            <Link to={"archive"}>{t("gratn_to")}</Link>
            {t("grant_info3")}
          </p>
          <p>
            <Link to={"archive"}>{t("grant_year")}</Link>
            {t("grant_info4")}
          </p>
          <p>
            <Link to={"archive"}>{t("grant_year2")}</Link>
            {t("grant_info5")}
          </p>
          <p className={style.main_text}>
            {t("grant_info6")}
            <Link to={"archive"} className={style.text_bold}>
              {t("grant")}
            </Link>
          </p>
        </div>
      </Wrapper>
    </section>
  );
};

export default GrandInfo;
