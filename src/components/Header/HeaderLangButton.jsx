import React from "react";

const LanguageSwitcher = ({ isActive, label, active, lang_btn, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${lang_btn} ${isActive ? active : ""}`}
    >
      {label}
    </button>
  );
};

export default LanguageSwitcher;
