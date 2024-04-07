import React from "react";
import burger from "./img/Group 770816.svg";

const ButtonMenu = ({ onClick, style }) => {
  return (
    <button className={style.burger} onClick={onClick}>
      <img src={burger} alt="burger" />
    </button>
  );
};

export default ButtonMenu;
