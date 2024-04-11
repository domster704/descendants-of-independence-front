import React from 'react';
import TextField from '../../../../UI/TextField/TextField';
import {
    DAY_OPTIONS,
    EDUCATION_OPTIONS,
    MONTH_OPTIONS,
    PROJECT_DIRECTION_OPTIONS,
    REGION_OPTIONS,
    YEAR_OPTIONS
} from '../../Statement.constants';
import * as styles from './StatementMainField.module.css';

const StatementMainFields = ({ state, changeValue, className }) => {
    return (
        <div className={[styles.text_fields, className].join(' ')}>
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
                name="phone"
                label="Номер телефона"
                placeholder="моб./раб. номер телефона"
                value={state.phone}
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

            <div>
                <TextField
                    name="currentActivity"
                    label="Текущая деятельность"
                    placeholder="Не обязательно*"
                    value={state.currentActivity}
                    onChange={changeValue}
                    inputStyles={{ marginBottom: 26 }}
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
        </div>
    );
};

export default StatementMainFields;