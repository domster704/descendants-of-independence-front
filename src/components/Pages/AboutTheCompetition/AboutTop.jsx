import React from "react";
import * as style from "./About.module.css";
import firstBg from "./img/free-icon-font-shield-check-3917627 (1) 1.png";
import secondBg from "./img/Group.png";
import tableBg from "./img/free-icon-font-document-3914660 1.png";
import paperPlanBg from "./img/free-icon-font-paper-plane-3917628 1.png";

const AboutTop = () => {
  return (
    <div className={style.about_top}>
      <h2 className={style.about_title}>
        Основные условия для участия в конкурсе
      </h2>
      <div className={style.carth_wrapper}>
        <div className={style.about_carth}>
          <img src={firstBg} />
          <p className={style.about_text}>
            В конкурсе могут участвовать только резиденты Республики Казахстан.
          </p>
        </div>
        <div className={style.about_carth}>
          <img src={secondBg} />
          <p className={style.about_text}>
            Подать заявку на участие могут граждане от 14 до 35 лет, на момент
            проведения конкурса.
          </p>
        </div>
        <div className={style.about_carth}>
          <img src={tableBg} />
          <p className={style.about_text}>
            Проекты для участия в конкурсе должны соотвествовать следующим
            направлениям: наука, культура, информационные технологии, бизнес,
            медиа.
          </p>
        </div>
        <div className={style.about_carth}>
          <img src={paperPlanBg} />
          <p className={style.about_text}>
            Чтобы отправить заявку на рассмотрение, необходимо заполнить{" "}
            <a className={style.navigate_link} href="#">
              форму заявки
            </a>{" "}
            и прикрепить необходимые файлы.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutTop;
