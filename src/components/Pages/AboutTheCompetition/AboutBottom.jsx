import React from "react";
import * as style from "./About.module.css";
import arrow from "./img/Vector.svg";

const AboutBottom = () => {
  return (
    <div className={style.about_bottom}>
      <h2 className={style.about_title}>Этапы проведения конкурса</h2>
      <div className={style.carth_wrapper}>
        <div className={style.about_carth}>
          <div className={style.position_Btn}>
            <span className={style.about_custom_btn}>Прием заявок</span>
          </div>
          <p className={style.about_text}>
            <a className={style.navigate_link} href="#">
              Заполните анкету
            </a>{" "}
            и отправьте заявку на участие. Далее ей будет присвоен
            индивидуальный номер, который будет отправлен на вашу электронную
            почту.
          </p>
        </div>
        <div className={style.position_arrow}>
          <img className={style.arrow} src={arrow} />
        </div>
        <div className={style.about_carth}>
          <div className={style.position_Btn}>
            <span className={style.about_custom_btn}>1 этап</span>
          </div>
          <p className={`${style.about_text} ${style.min_height}`}>
            Проверка заявки на соответствие требованиям конкурса и присвоение
            статуса. С помощью индивидуального номера, Вы сможете{" "}
            <a className={style.navigate_link} href="#">
              {" "}
              узнать статус
            </a>{" "}
            заявки.
          </p>
        </div>
        <div className={style.position_arrow}>
          <img className={style.arrow} src={arrow} />
        </div>
        <div className={style.about_carth}>
          <div className={style.position_Btn}>
            <span className={style.about_custom_btn}>2 этап</span>
          </div>
          <p className={style.about_text}>
            Принятые заявки допускаются к оцениванию конкурсной комиссией.
            Узнать полученную оценку можно в разделе{" "}
            <a className={style.navigate_link} href="#">
              узнать статус.
            </a>
          </p>
        </div>
        <div className={style.position_arrow}>
          <img className={style.arrow} src={arrow} />
        </div>
        <div className={style.about_carth}>
          <div className={style.position_Btn}>
            <span className={style.about_custom_btn}>Результаты</span>
          </div>
          <p className={style.about_text}>
            Определение{" "}
            <a className={style.navigate_link} href="#">
              грантополучателей
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutBottom;
