import React from 'react';
import * as styles from './TextField.module.css';
import Select from 'react-select';
import chevronDown from '../../../assets/img/chevron-down.svg';

const selectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    height: '52px',
    padding: '0 14px',
    borderRadius: 10,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    background: state.hasValue ? '#1661F51A' : ''
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: 'var(--black-30)'
  }),
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    color: '#000',
    ':hover': {
      color: '#000'
    },
    'svg': {
      display: 'none',
    },
    '&:before': {
      content: '""',
      display: 'inline-block',
      width: '14px',
      height: '9px',
      backgroundImage: `url(${chevronDown})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    display: 'none'
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    padding: 0,
  }),
  singleValue: (baseValue) => ({
    ...baseValue,
    minWidth: 20,
    fontSize: 16,
    color: '#000',
  })
};

const TextField = ({ type, name, label, placeholder, value, onChange, required, options, currentOption }) => {
  return (
    <div className={styles.text_field}>
      <label htmlFor={'text-field-' + name}>{label}</label>

      {type === 'select' ?
        <Select
          id={'text-field-' + name}
          name={name}
          options={options}
          value={currentOption}
          onChange={(newValue) =>
            newValue &&
            onChange({ target: { name, value: { value: newValue.value, label: newValue.label } } })
          }
          placeholder={placeholder}
          styles={selectStyles}
          required={required}
        /> :
        <input
          className={styles.text_field_input}
          id={'text-field-' + name}
          type={type ?? 'text'}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      }
    </div>
  );
};

export default TextField;