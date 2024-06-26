import React from "react";
import * as style from "../Main.module.css";
import Wrapper from "../../../../components/UI/Wrapper/Wrapper";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const GrandInfo = () => {
    const {t} = useTranslation("main");
    return (
        <section className={style.mainSection}>
            <Wrapper>
                <h2 className={style.main_title}>{t("grant_info")}</h2>
                <div className={style.section_wrapper}>
                    <p>
                        {t("grant_info2")}
                        {t("name_grant")}
                    </p>
                    <p>
                        {t("grant_to")}
                        {t("grant_info3")}
                    </p>
                    <p>
                        <Link to={"archive/winner_list"}>{t("grant_year")}</Link>
                        {t("grant_info4")}
                    </p>
                    <p>
                        <Link to={"archive/winner_list"}>{t("grant_year2")}</Link>
                        {t("grant_info5")}
                    </p>
                    <p className={style.main_text}>
                        {t("grant_info6")}
                        <Link to={"archive/winner_list"} className={style.text_bold}>
                            {t("grant")}
                        </Link>
                    </p>
                </div>
            </Wrapper>
        </section>
    );
};

export default GrandInfo;
