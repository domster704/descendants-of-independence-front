import React from 'react';
import * as styles from './Statement.module.css';

import Wrapper from "../../Wrapper/Wrapper";
import TextField from './TextField/TextField';

const Statement = () => {
  return (
    <div className={styles.statement}>
      <div className={styles.title}>
        <h1>ЗАЯВКА</h1>
        <p>для участия в конкурсе</p>
      </div>

      <form className={styles.form}>
        <div className={styles.text_fields}>
          <TextField
            label="Ф.И.О"
            placeholder="Фамилия, Имя, Отчество (при наличии)"
            required
          />

          <div>Дата рождения</div>

          <TextField
            label="Номер телефона"
            placeholder="моб./раб. номер телефона"
            required
          />


          <TextField
            label="Эл. почта"
            placeholder="example@gmail.com"
            required
          />

          <div>Образование</div>

          <TextField
            label="Учёная степень, учёное звание"
          />

          <div className={styles.residential_address}>
            <TextField
              label="Адрес проживания"
              placeholder="Алматинская область"
              required
            />
            <TextField
              placeholder="Город"
              required
            />
            <TextField
              placeholder="Улица / квартира"
              required
            />
          </div>

          <TextField
            label="Текущая деятельность"
          />

          <div>Направление проекта</div>
        </div>

        <div style={{ textAlign: 'end' }}>
          <button className={styles.submit_button}>Подать заявку</button>
        </div>
      </form>
    </div>
  );
};

export default Statement;
