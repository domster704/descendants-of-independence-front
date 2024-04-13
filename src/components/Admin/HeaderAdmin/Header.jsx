import React, { useState } from "react";
import * as style from "../../Header/Header.module.css";
import Logo from "../../Header/HeaderLogo";
import ButtonMenu from "../../Header/HeaderButtonMenu";
import LanguageSwitcher from "../../Header/HeaderLangButton";
import { Link } from "react-router-dom";

const link = [
  { label: "В ожиданий действиий", url: "#" },
  { label: "Отказано", url: "#" },
  { label: "Принятые", url: "#" },
  { label: "Отправленные на доработку", url: "#" },
];

const HeaderAdmin = () => {
  const [isActive, setIsActive] = useState(false);
  const [mobileMenu, openMenu] = useState(false);

  const showActive = () => {
    setIsActive(true);
  };

  const closeActive = () => {
    setIsActive(false);
  };

  const togleBurger = () => {
    openMenu(!mobileMenu);
  };

  return (
    <div className={`${style.header} ${style.accordion_relative}`}>
      <div
        className={`${mobileMenu ? style.mobile_bgActive : style.mobile_bg}`}
      ></div>
      <h1 className={style.hidden}>Header</h1>
      <div className={style.mobile_flex}>
        <ButtonMenu style={style} onClick={togleBurger} />
        <Logo style={style} />
      </div>
      <nav className={style.navbar}>
        <ul className={`${style.list__type} ${style.flex}`}>
          <li className={style.lang__flex}>
            <LanguageSwitcher
              isActive={!isActive}
              label="Рус"
              onClick={closeActive}
              active={style.active}
              lang_btn={style.lang__btn}
            />
            <LanguageSwitcher
              isActive={isActive}
              label="Қаз"
              onClick={showActive}
              active={style.active}
              lang_btn={style.lang__btn}
            />
          </li>
        </ul>
      </nav>
      <div className={`${style.burger_menu} ${mobileMenu ? "" : style.hidden}`}>
        <div className={style.burger__lang}>
          <LanguageSwitcher
            isActive={!isActive}
            label="Рус"
            onClick={closeActive}
            active={style.active_lang}
            lang_btn={style.burger_lang_btn}
          />
          -
          <LanguageSwitcher
            isActive={isActive}
            label="Қаз"
            onClick={showActive}
            active={style.active_lang}
            lang_btn={style.burger_lang_btn}
          />
        </div>
        <nav className={`${style.burger_list} `}>
          <ul className={style.list__type}>
            {link.map((item, index) => {
              return (
                <li key={index} className={style.list_item}>
                  <Link to={item.url} className={style.concurse}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default HeaderAdmin;
