import React from "react";
import logo from "./img/logo.png";

const Logo = ({ style }) => {
  return (
    <div className={style.logo__container}>
      <img className={`${style.logo}`} src={logo} alt="Logo" />
    </div>
  );
};

export default Logo;
