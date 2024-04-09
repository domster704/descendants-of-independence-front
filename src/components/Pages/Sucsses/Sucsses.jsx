import React from "react";
import { Link } from "react-router-dom";
import sucsses from "./img/Vector (1).png";
import * as style from "./Sucsses.module.css";

const Sucsses = () => {
  return (
    <div className={style.sucsses_section}>
      <h2 className={style.hidden}>Заявка</h2>
      <p className={style.hidden}>для участия в конкурсе</p>
      <div className={style.sucsses_window}>
        <img className={style.sucsses_img} src={sucsses} />
        <p className={style.sucsses_text}>Ваша заявка успешно отправлена!</p>
        <p className={style.sucsses_text_gray}>
          Номер заявки выслан на вашу электронную почту.
        </p>
        <Link className={style.sucsses_btn} to="/">
          Перейти на главную
        </Link>
      </div>
    </div>
  );
};

export default Sucsses;
