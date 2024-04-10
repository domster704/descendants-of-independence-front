import React from "react";
import { Link } from "react-router-dom";
import success from "./img/Vector (1).png";
import * as style from "./Success.module.css";

const Success = () => {
  return (
    <div className={style.success_section}>
      <h2 className={style.hidden}>Заявка</h2>
      <p className={style.hidden}>для участия в конкурсе</p>
      <div className={style.success_window}>
        <img className={style.success_img} src={success} />
        <p className={style.success_text}>Ваша заявка успешно отправлена!</p>
        <p className={style.success_text_gray}>
          Номер заявки выслан на вашу электронную почту.
        </p>
        <Link className={style.success_btn} to="/">
          Перейти на главную
        </Link>
      </div>
    </div>
  );
};

export default Success;
