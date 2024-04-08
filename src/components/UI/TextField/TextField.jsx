import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SELECT_STYLES } from './TextField.constants';
import Select from 'react-select';
import * as styles from './TextField.module.css';

const TextField = ({
                       type,
                       name,
                       label,
                       placeholder,
                       value,
                       onChange,
                       required,
                       options,
                       currentOption,
                       inputStyles
                   }) => {
    const dispatch = useDispatch();
    const { isFormError } = useSelector(state => state.env);

    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (isFormError && required) {
            const val = value ?? currentOption;
            if (typeof val === 'object') return;
            setIsError(!val.length);
        }
    }, [isFormError, currentOption]);

    return (
        <div className={styles.text_field}>
            <label htmlFor={'text-field-' + name}>{label}</label>

            {
                type === 'select' ?
                    <Select
                        inputId={'text-field-' + name}
                        name={name}
                        options={options}
                        value={currentOption}
                        onChange={(newValue) =>
                            newValue &&
                            onChange({ target: { name, value: { value: newValue.value, label: newValue.label } } })
                        }
                        onFocus={() => setIsError(false)}
                        placeholder={placeholder}
                        styles={SELECT_STYLES(isError && {
                            borderColor: 'var(--red)',
                            ':hover': { borderColor: 'var(--red)' }
                        })}
                    /> :
                    type === 'textarea' ?
                        <textarea
                            className={styles.text_field_textarea}
                            style={inputStyles}
                            id={'text-field-' + name}
                            name={name}
                            onChange={onChange}
                            placeholder={placeholder}
                        >
                            {value}
                        </textarea>
                        :
                        <input
                            className={[styles.text_field_input, isError && styles.text_field_error].join(' ')}
                            style={inputStyles}
                            id={'text-field-' + name}
                            type={type ?? 'text'}
                            name={name}
                            value={value ?? ''}
                            onChange={onChange}
                            onFocus={() => setIsError(false)}
                            placeholder={placeholder}
                        />
            }
        </div>
    );
};

export default TextField;