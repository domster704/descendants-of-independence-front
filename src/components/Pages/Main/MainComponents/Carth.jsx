import React, { useState } from "react";
import * as style from "../Main.module.css";
import Wrapper from "../../../Wrapper/Wrapper";

const buttonText = {
  culture:
    "«Культура» – для реализации проектов, направленных на популяризацию культурного наследия Казахстана, продвижение народных культурных традиций и искусства.",
  sciens:
    "«Наука» – для реализации новых научных проектов и исследований в приоритетных секторах науки",
  business:
    "«Бизнес» – для реализации новых бизнес-идей в приоритетных секторах экономики;",
  informationTechnology:
    "«Информационные технологии» – для реализации и разработки новых ITрешений и проектов, в том числе начинающих стартап-проектов;",
  media:
    "«Медиа» – для реализации новых медиа-проектов, в том числе проектов по созданию познавательного, полезного, интересного контента для молодежи.",
};

const Carth = () => {
  const [initialText, setText] = useState(buttonText.culture);
  const [activeButton, setActiveButton] = useState("Культура");

  const handleButtonClick = (newText, buttonTitle) => {
    setText(newText);
    setActiveButton(buttonTitle);
  };
  return (
    <Wrapper>
      <section className={style.carth}>
        <div className={style.carth_flex}>
          <div className={style.carth_info}>
            <h3 className={style.carth_title}>Сумма гранта:</h3>
            <div>
              <span className={style.custom_btn}>3 000 000тг</span>
              <p className={style.carth_info_text}>
                Используется для реализации проекта.
              </p>
            </div>
          </div>
          <div className={style.carth_info}>
            <h3 className={style.carth_title}>Направления гранта:</h3>
            <div className={style.button_group}>
              <button
                className={
                  activeButton === "Наука"
                    ? `${style.carth_btn} ${style.active_btn}`
                    : style.carth_btn
                }
                onClick={() => handleButtonClick(buttonText.sciens, "Наука")}
              >
                Наука
              </button>
              <button
                className={
                  activeButton === "Культура"
                    ? `${style.carth_btn} ${style.active_btn}`
                    : style.carth_btn
                }
                onClick={() =>
                  handleButtonClick(buttonText.culture, "Культура")
                }
              >
                Культура
              </button>
              <button
                className={
                  activeButton === "Бизнес"
                    ? `${style.carth_btn} ${style.active_btn}`
                    : style.carth_btn
                }
                onClick={() => handleButtonClick(buttonText.business, "Бизнес")}
              >
                Бизнес
              </button>
              <div className={style.btn_flex}>
                <button
                  className={
                    activeButton === "Информационные технологии"
                      ? `${style.carth_btn} ${style.active_btn}`
                      : style.carth_btn
                  }
                  onClick={() =>
                    handleButtonClick(
                      buttonText.informationTechnology,
                      "Информационные технологии"
                    )
                  }
                >
                  Информационные технологии
                </button>
                <button
                  className={
                    activeButton === "Медиа"
                      ? `${style.carth_btn} ${style.active_btn}`
                      : style.carth_btn
                  }
                  onClick={() => handleButtonClick(buttonText.media, "Медиа")}
                >
                  Медиа
                </button>
              </div>
              <p className={`${style.carth_text} ${style.text_custom}`}>
                {initialText}
              </p>
            </div>
          </div>
          <div className={style.carth_info}>
            <h3 className={style.carth_title}>Реализация и мониторинг:</h3>
            <p className={style.custom_bg}>
              Срок использования и мониторинг за целевым использованием гранта -
              1 календарный год.
            </p>
          </div>
        </div>
        <p className={style.carth_text}>{initialText}</p>
      </section>
    </Wrapper>
  );
};

export default Carth;
