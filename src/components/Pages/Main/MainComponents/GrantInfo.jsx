import React from "react";
import * as style from "../Main.module.css";
import infoTopBg from "../img/Vector.jpg";
import infoBottomBg from "../img/vector2.jpg";
import Wrapper from "../../../../components/UI/Wrapper/Wrapper";

const GrandInfo = () => {
  return (
    <section className={style.mainSection}>
      <img className={style.infoTopBg} src={infoTopBg} />
      <img className={style.infoBottomBg} src={infoBottomBg} />
      <Wrapper>
        <h2 className={style.main_title}>О гранте</h2>
        <div className={style.section_wrapper}>
          <p>
            С 2021 года, по инициативе Президента Касым-Жомарта Кемелевича
            Токаева ежегодно на конкурсной основе для молодежи присуждается{" "}
            <a>грант «Тәуелсіздік ұрпақтары».</a>
          </p>
          <p>
            <a>Целью присуждения гранта</a> является государственная поддержка
            новых и действующих инициатив молодых людей, направленных на
            формирование сообщества активной творческой молодежи.
          </p>
          <p>
            В <a>2021 году</a> в преддверии Дня Независимости 30 молодых граждан
            страны получили грант «Тәуелсіздік ұрпақтары» из рук Главы
            государства К.К. Токаева (из них: 5 молодых людей по направлению
            «Культура», 6 человек-«Наука», 5 человек-«Информационные
            технологии», 5 человек-«Медиа», 9 человек-«Бизнес»).
          </p>
          <p>
            12 декабря <a>2022 года</a> состоялось торжественное вручение 33
            грантов «Тәуелсіздік ұрпақтары» (из них: по направлению «Наука»-6
            человек, «Культура»-6, «Информационные технологии»-6, «Бизнес»-9,
            «Медиа»-6).
          </p>
          <p className={style.main_text}>
            За время реализации проекта «Тәуелсіздік ұрпақтары» присуждено{" "}
            <a className={style.text_bold}>63 гранта.</a>
          </p>
        </div>
      </Wrapper>
    </section>
  );
};

export default GrandInfo;
