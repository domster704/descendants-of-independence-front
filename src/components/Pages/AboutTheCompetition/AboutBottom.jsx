import React from "react";
import * as style from "./About.module.css";
import arrow from "./img/Vector.svg";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const AboutBottom = () => {
    const {t} = useTranslation("about")

    return (
        <div className={style.about_bottom}>
            <h2 className={style.about_title}>{t("about_stages")}</h2>
            <div className={style.carth_wrapper}>
                <div className={style.about_carth}>
                    <div className={style.position_Btn}>
                        <span className={style.about_custom_btn}>{t("about_accepting_applications")}</span>
                    </div>
                    <p className={style.about_text}>
                        <Link className={style.navigate_link} to="/statement">
                            {t("about_fill")}
                        </Link>{" "}
                        {t("about_and_send")}
                    </p>
                </div>
                <div className={style.position_arrow}>
                    <img className={style.arrow} src={arrow} alt=""/>
                </div>
                <div className={style.about_carth}>
                    <div className={style.position_Btn}>
                        <span className={style.about_custom_btn}>{t("first_stage")}</span>
                    </div>
                    <p className={`${style.about_text} ${style.min_height}`}>
                        {t("add_status")}{" "}
                        <Link className={style.navigate_link} to="/status">
                            {" "}
                            {t("find_status")}
                        </Link>{" "}
                        {t("stage")}
                    </p>
                </div>
                <div className={style.position_arrow}>
                    <img className={style.arrow} src={arrow} alt=""/>
                </div>
                <div className={style.about_carth}>
                    <div className={style.position_Btn}>
                        <span className={style.about_custom_btn}>{t("second_stage")}</span>
                    </div>
                    <p className={style.about_text}>
                        {t('grade_status')}{" "}
                        <Link className={style.navigate_link} to="/status">
                            {t('find_status2')}
                        </Link>
                        {t("end")}
                    </p>
                </div>
                <div className={style.position_arrow}>
                    <img className={style.arrow} src={arrow} alt=""/>
                </div>
                <div className={style.about_carth}>
                    <div className={style.position_Btn}>
                        <span className={style.about_custom_btn}>{t('results')}</span>
                    </div>
                    <p className={style.about_text}>
                        {t("definition")}{" "}
                        <Link className={style.navigate_link} to="/archive">
                            {t("grantees")}
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutBottom;
