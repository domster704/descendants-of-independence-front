import React from "react";
import TextField from "../../../../UI/TextField/TextField";
import {
  DAY_OPTIONS,
  MONTH_OPTIONS,
  YEAR_OPTIONS,
} from "../../Statement.constants";
import * as styles from "./StatementMainField.module.css";
import { useTranslation } from "react-i18next";

const StatementMainFields = ({ state, changeValue, className }) => {
  const { t } = useTranslation("statement");
  const EDUCATION_OPTIONS = t("EDUCATION_OPTIONS", { returnObjects: true });
  const REGION_OPTIONS = t("REGION_OPTIONS", { returnObjects: true });
  const PROJECT_DIRECTION_OPTIONS = t("PROJECT_DIRECTION_OPTIONS", {
    returnObjects: true,
  });
  return (
    <div className={[styles.text_fields, className].join(" ")}>
      <TextField
        name="fullName"
        label={t("fullName")}
        placeholder={t("fullName_placeholder")}
        value={state.fullName}
        onChange={changeValue}
        required
      />

      <div className={styles.date_of_birth}>
        <p>{t("birth_date")}</p>

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
        label={t("phone")}
        placeholder={t("phone_placeholder")}
        value={state.phone}
        onChange={changeValue}
        required
      />

      <TextField
        type="email"
        name="email"
        label={t("email")}
        placeholder="example@gmail.com"
        value={state.email}
        onChange={changeValue}
        required
      />

      <TextField
        type="select"
        name="education"
        label={t("education")}
        placeholder={t("education_placeholder")}
        options={EDUCATION_OPTIONS}
        currentOption={state.education}
        onChange={changeValue}
        required
      />

      <TextField
        name="academicDegree"
        label={t("academic_degree")}
        placeholder={t("academic_degree_placeholder")}
        value={state.academicDegree}
        onChange={changeValue}
      />

      <div className={styles.residential_address}>
        <TextField
          type="select"
          name="address[region]"
          label={t("address")}
          placeholder={t("region_placeholder")}
          options={REGION_OPTIONS}
          currentOption={state.address.region}
          onChange={changeValue}
          required
        />
        <TextField
          name="address[city]"
          placeholder={t("city_placeholder")}
          value={state.address.city}
          onChange={changeValue}
          required
        />
        <TextField
          name="address[street]"
          placeholder={t("street_placeholder")}
          value={state.address.street}
          onChange={changeValue}
          required
        />
      </div>

      <div>
        <TextField
          name="currentActivity"
          label={t("current_activity")}
          placeholder={t("current_activity_placeholder")}
          value={state.currentActivity}
          onChange={changeValue}
          inputStyles={{ marginBottom: 26 }}
        />

        <TextField
          type="select"
          name="projectDirection"
          label={t("project_direction")}
          placeholder={t("project_direction_placeholder")}
          options={PROJECT_DIRECTION_OPTIONS}
          currentOption={state.projectDirection}
          onChange={changeValue}
          required
          inputStyles={{ backgroundColor: "#1661F51A" }}
        />
      </div>
    </div>
  );
};

export default StatementMainFields;
