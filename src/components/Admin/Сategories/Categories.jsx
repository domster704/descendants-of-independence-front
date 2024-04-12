import React from "react";
import Wrapper from "../../UI/Wrapper/Wrapper";
import { Link } from "react-router-dom";
import * as style from "./Categories.module.css";

const Categories = () => {
  const categories = [
    { url: "/sciens", label: "Наука" },
    { url: "/culture", label: "Культура" },
    {
      url: "/information_technologies",
      label: `Информационные ${String.fromCharCode(160)} технологии`,
    },
    { url: "/business", label: "Бизнес" },
    { url: "/media", label: "Медия" },
  ];

  return (
    <div style={{ height: "80vh", background: "rgba(240, 240, 242, 1)" }}>
      <Wrapper>
        <h2 className={style.categories_title}>Выберите категорию</h2>
        <div>
          <ul className={style.list}>
            {categories.map((category, index) => (
              <li key={index} className={style.list_item}>
                <Link className={style.carth_link} to={category.url}>
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </div>
  );
};

export default Categories;
