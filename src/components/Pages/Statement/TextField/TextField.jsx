import React from 'react';
import * as styles from './TextField.module.css';

const TextField = ({ type, label, placeholder, required }) => {
  return (
    <div className={styles.text_field}>
      <label htmlFor={'text-field-' + label}>{label}</label>
      <input
        id={'text-field-' + label}
        type={type ?? 'text'}
        placeholder={!required ? 'Не обязательно*' : placeholder}
        required={required}
      />
    </div>
  );
};

export default TextField;