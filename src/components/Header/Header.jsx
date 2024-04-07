import React, { useState } from "react";
import * as style from "./Header.module.css";
import Logo from "./HeaderLogo";
import ButtonMenu from "./HeaderButtonMenu";
import LanguageSwitcher from "./HeaderLangButton";
import {Link} from "react-router-dom";

const link = [
  { href: "/", text: "О гранте" },
  { href: "/archive", text: "Архив" },
  { href: "#", text: "Документы" },
];

const linkModal = [
  { href: "#", text: "О конкурсе" },
  { href: "/statement", text: "Подать заявку" },
  { href: "#", text: "Узнать статус" },
  { href: "#", text: "Список победителей" },
];

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [accordion, setAccordion] = useState(false);
  const [mobileMenu, openMenu] = useState(false);

  const showActive = () => {
    setIsActive(true);
  };

  const closeActive = () => {
    setIsActive(false);
  };

  const togleMore = () => {
    setAccordion(!accordion);
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
          {link.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.href}>{item.text}</Link>
              </li>
            );
          })}
          <li className={style.accordion_relative}>
            <button className={style.accordion__btn} onClick={togleMore}>
              Конкурс{" "}
              <span className={style.arrow}>
                <svg
                  className={`${accordion ? "" : style.rotate}`}
                  width="14"
                  height="9"
                  viewBox="0 0 14 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7108 1.20986C13.6178 1.11613 13.5072 1.04174 13.3854 0.990969C13.2635 0.940201 13.1328 0.914062 13.0008 0.914062C12.8688 0.914062 12.7381 0.940201 12.6162 0.990969C12.4944 1.04174 12.3838 1.11613 12.2908 1.20986L7.71079 5.78986C7.61783 5.88359 7.50723 5.95798 7.38537 6.00875C7.26351 6.05952 7.1328 6.08566 7.00079 6.08566C6.86878 6.08566 6.73807 6.05952 6.61622 6.00875C6.49436 5.95798 6.38376 5.88359 6.29079 5.78986L1.71079 1.20986C1.61783 1.11613 1.50723 1.04174 1.38537 0.990969C1.26351 0.940201 1.1328 0.914062 1.00079 0.914062C0.868781 0.914062 0.738075 0.940201 0.616216 0.990969C0.494356 1.04174 0.383755 1.11613 0.290792 1.20986C0.104542 1.39722 0 1.65067 0 1.91486C0 2.17905 0.104542 2.4325 0.290792 2.61986L4.88079 7.20986C5.44329 7.77166 6.20579 8.08722 7.00079 8.08722C7.79579 8.08722 8.55829 7.77166 9.12079 7.20986L13.7108 2.61986C13.897 2.4325 14.0016 2.17905 14.0016 1.91486C14.0016 1.65067 13.897 1.39722 13.7108 1.20986Z"
                    fill="black"
                  />
                </svg>
              </span>
            </button>
            <ul
              className={`${accordion ? "" : style.hidden} ${
                style.list__type
              } ${style.accordion_absolute}`}
            >
              {linkModal.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.href}>{item.text}</Link>
                  </li>
                );
              })}
            </ul>
          </li>
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
                  <Link to={item.href} className={style.concurse} >
                    {item.text}
                  </Link>
                </li>
              );
            })}
            <li className={style.list_item}>
              <button className={style.concurse} onClick={togleMore}>
                Конкурс
                <span>
                  <svg
                    className={`${accordion ? "" : style.rotate}`}
                    width="14"
                    height="9"
                    viewBox="0 0 14 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7108 1.20986C13.6178 1.11613 13.5072 1.04174 13.3854 0.990969C13.2635 0.940201 13.1328 0.914062 13.0008 0.914062C12.8688 0.914062 12.7381 0.940201 12.6162 0.990969C12.4944 1.04174 12.3838 1.11613 12.2908 1.20986L7.71079 5.78986C7.61783 5.88359 7.50723 5.95798 7.38537 6.00875C7.26351 6.05952 7.1328 6.08566 7.00079 6.08566C6.86878 6.08566 6.73807 6.05952 6.61622 6.00875C6.49436 5.95798 6.38376 5.88359 6.29079 5.78986L1.71079 1.20986C1.61783 1.11613 1.50723 1.04174 1.38537 0.990969C1.26351 0.940201 1.1328 0.914062 1.00079 0.914062C0.868781 0.914062 0.738075 0.940201 0.616216 0.990969C0.494356 1.04174 0.383755 1.11613 0.290792 1.20986C0.104542 1.39722 0 1.65067 0 1.91486C0 2.17905 0.104542 2.4325 0.290792 2.61986L4.88079 7.20986C5.44329 7.77166 6.20579 8.08722 7.00079 8.08722C7.79579 8.08722 8.55829 7.77166 9.12079 7.20986L13.7108 2.61986C13.897 2.4325 14.0016 2.17905 14.0016 1.91486C14.0016 1.65067 13.897 1.39722 13.7108 1.20986Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`${style.mobile_accordion} ${
                  accordion ? "" : style.hidden
                }`}
              >
                <Link to="#" className={style.concurse} >
                  Узнать статус
                </Link>
                <Link to="#" className={style.concurse}>
                  Отправить заявку
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;