import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SELECT_STYLES } from './TextField.constants';
import Select from 'react-select';
import * as styles from './TextField.module.css';
import { setIsFormError } from '../../../store/envSlice';

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
                       inputStyles,
                       className,
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
    }, [isFormError]);

    return (
        <div className={styles.text_field}>
            {label && <label htmlFor={'text-field-' + name}>{label}</label>}

            {
                type === 'select' ?
                    <Select
                        inputId={'text-field-' + name}
                        className={className}
                        name={name}
                        options={options}
                        value={currentOption}
                        placeholder={placeholder}
                        onChange={(newValue) =>
                            newValue &&
                            onChange({
                                target: {
                                    name,
                                    value: { value: newValue.value, label: newValue.label },
                                },
                            })
                        }
                        onFocus={() => setIsError(false) + dispatch(setIsFormError(false))}
                        styles={SELECT_STYLES((() => {
                            const obj = { ...inputStyles };

                            if (isError) {
                                const borderError = '1px solid var(--red)';

                                obj.border = borderError;
                                obj[':hover'] = { border: borderError };
                            }
                            return obj;
                        })())}
                    /> :
                    type === 'textarea' ?
                        <textarea
                            className={[styles.text_field_textarea, isError && styles.text_field_error, className].join(' ')}
                            style={inputStyles}
                            id={'text-field-' + name}
                            name={name}
                            value={value}
                            placeholder={placeholder}
                            onChange={onChange}
                            onFocus={() => setIsError(false) + dispatch(setIsFormError(false))}
                        />
                        :
                        <input
                            className={[styles.text_field_input, isError && styles.text_field_error, className].join(' ')}
                            style={inputStyles}
                            id={'text-field-' + name}
                            type={type ?? 'text'}
                            name={name}
                            value={value ?? ''}
                            placeholder={placeholder}
                            onChange={onChange}
                            onFocus={() => setIsError(false) + dispatch(setIsFormError(false))}
                            onWheel={(e) => e.target.blur()}
                        />
            }
        </div>
    );
};

export default TextField;