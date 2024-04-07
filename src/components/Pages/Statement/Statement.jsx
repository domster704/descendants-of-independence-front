import React, { useState } from 'react';
import * as styles from './Statement.module.css';
import TextField from '../../UI/TextField/TextField';
import {
  DAY_OPTIONS,
  EDUCATION_OPTIONS,
  INITIAL_STATE,
  MONTH_OPTIONS,
  PROJECT_DESCRIPTION_INITIAL_STATE,
  PROJECT_DIRECTION_OPTIONS,
  REGION_OPTIONS,
  YEAR_OPTIONS
} from './Statement.constants';
import chevronDown from '../../../assets/img/chevron-down.svg';

const Statement = () => {
  const [state, setState] = useState(INITIAL_STATE);
  const [projectDescription, setProjectDescription] = useState(null);
  const [isValid, setIsValid] = useState(false);

  const changeValue = (e) => {
    const { name, value } = e.target;

    if (name.includes('[')) {
      let parts = name.split('[');
      let firstPart = parts[0];
      let secondPart = parts[1].slice(0, -1);

      setState((prevState) => ({ ...prevState, [firstPart]: { ...prevState[firstPart], [secondPart]: value } }));
      return;
    }

    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className={styles.statement}>
      <div className={styles.title}>
        <h1>ЗАЯВКА</h1>
        <p>для участия в конкурсе</p>
      </div>

      <form className={styles.form}>
        <div className={styles.text_fields}>
          <TextField
            name="fullName"
            label="Ф.И.О"
            placeholder="Фамилия, Имя, Отчество (при наличии)"
            value={state.fullName}
            onChange={changeValue}
            required
          />

          <div className={styles.date_of_birth}>
            <p>Дата рождения</p>

            <div className={styles.date_of_birth_text_fields}>
              <TextField
                type="select"
                name="dateOfBirth[day]"
                placeholder="01"
                options={DAY_OPTIONS}
                currentOption={state.dateOfBirth.day}
                onChange={changeValue}
                required
              />

              <TextField
                type="select"
                name="dateOfBirth[month]"
                placeholder="01"
                options={MONTH_OPTIONS}
                currentOption={state.dateOfBirth.month}
                onChange={changeValue}
                required
              />

              <TextField
                type="select"
                name="dateOfBirth[year]"
                placeholder="2004"
                options={YEAR_OPTIONS}
                currentOption={state.dateOfBirth.year}
                onChange={changeValue}
                required
              />
            </div>
          </div>

          <TextField
            type="number"
            name="number"
            label="Номер телефона"
            placeholder="моб./раб. номер телефона"
            value={state.number}
            onChange={changeValue}
            required
          />

          <TextField
            type="email"
            name="email"
            label="Эл. почта"
            placeholder="example@gmail.com"
            value={state.email}
            onChange={changeValue}
            required
          />

          <TextField
            type="select"
            name="education"
            label="Образование"
            placeholder="Выберите образование..."
            options={EDUCATION_OPTIONS}
            currentOption={state.education}
            onChange={changeValue}
            required
          />

          <TextField
            name="academicDegree"
            label="Учёная степень, учёное звание"
            placeholder="Не обязательно*"
            value={state.academicDegree}
            onChange={changeValue}
          />

          <div className={styles.residential_address}>
            <TextField
              type="select"
              name="address[region]"
              label="Адрес проживания"
              placeholder="Выберите область..."
              options={REGION_OPTIONS}
              currentOption={state.address.region}
              onChange={changeValue}
              required
            />
            <TextField
              name="address[city]"
              placeholder="Город"
              value={state.address.city}
              onChange={changeValue}
              required
            />
            <TextField
              name="address[street]"
              placeholder="Улица / квартира"
              value={state.address.street}
              onChange={changeValue}
              required
            />
          </div>

          <TextField
            name="currentActivity"
            label="Текущая деятельность"
            placeholder="Не обязательно*"
            value={state.currentActivity}
            onChange={changeValue}
          />

          <TextField
            type="select"
            name="projectDirection"
            label="Направление проекта"
            placeholder="Выберите направление..."
            options={PROJECT_DIRECTION_OPTIONS}
            currentOption={state.projectDirection}
            onChange={changeValue}
            required
          />
        </div>

        <div className={styles.drop_down_block_wrapper}>
          <div>
            <div
              className={styles.drop_down_block}
              onClick={() =>
                setProjectDescription(projectDescription ? null : PROJECT_DESCRIPTION_INITIAL_STATE)
              }
            >
              <h2>Описание проекта</h2>
              <img src={chevronDown} alt="chevron-up-img" style={{ rotate: projectDescription ? '180deg' : 'none' }}/>
            </div>

            {projectDescription &&
              <div className={styles.text_fields + ' ' + styles.drop_down_block_text_fields}>
                <div style={{ gridArea: '1 / 1 / span 2 / span 1' }}>
                  <TextField
                    type="textarea"
                    name="shortDescription"
                    label="Краткое описание проекта"
                    placeholder="Опишите ваш проект"
                    value={projectDescription.shortDescription}
                    onChange={changeValue}
                  />
                </div>

                <TextField
                  name="targetAudience"
                  label="Целевая аудитория"
                  value={projectDescription.targetAudience}
                  onChange={changeValue}
                />

                <TextField
                  name="projectMission"
                  label="Миссия проекта"
                  value={projectDescription.projectMission}
                  onChange={changeValue}
                />

                <TextField
                  name="projectTasks"
                  label="Задачи проекта"
                  value={projectDescription.projectTasks}
                  onChange={changeValue}
                />

                <TextField
                  name="projectJustification"
                  label="Обоснование проекта"
                  value={projectDescription.projectJustification}
                  onChange={changeValue}
                />

                <TextField
                  name="implementationTimeline"
                  label="Сроки реализации проекта"
                  value={projectDescription.implementationTimeline}
                  onChange={changeValue}
                />

                <TextField
                  name="projectObjectivesAndSuccessCriteria"
                  label="Целевые показатели и критерии оценки успеха проекта"
                  value={projectDescription.projectObjectivesAndSuccessCriteria}
                  onChange={changeValue}
                />

                <TextField
                  name="projectDeliverables"
                  label="Продукт проекта"
                  value={projectDescription.projectDeliverables}
                  onChange={changeValue}
                />

                <TextField
                  name="projectStakeholders"
                  label="Заинтересованые стороны проекта"
                  value={projectDescription.projectStakeholders}
                  onChange={changeValue}
                />

                <TextField
                  name="preliminaryCostForecasts"
                  label="Предварительные прогнозы по стоимости реализации проекта"
                  value={projectDescription.preliminaryCostForecasts}
                  onChange={changeValue}
                />

                <TextField
                  name="projectConstraintsAndRisks"
                  label="Ограничения (риски) проекта"
                  value={projectDescription.projectConstraintsAndRisks}
                  onChange={changeValue}
                />

                <TextField
                  type="textarea"
                  name="projectImplementationGeography"
                  label="География реализации проекта (область, города республиканского значения, столица)"
                  value={projectDescription.projectImplementationGeography}
                  onChange={changeValue}
                />
              </div>
            }
          </div>

          <div className={styles.drop_down_block}>
            <h2>Смета расходов</h2>
            <img src={chevronDown} alt="chevron-up-img"/>
          </div>
        </div>

        <div style={{ textAlign: 'end' }}>
          <button disabled={!isValid} className={styles.submit_button}>Подать заявку</button>
        </div>
      </form>
    </div>
  );
};

export default Statement;
