import React, { useEffect, useState } from 'react';
import * as styles from '../StatusStepContainer/StatusStepContainer.module.css';
import * as stylesStatement from '../../Statement/Statement.module.css';
import TextField from '../../../UI/TextField/TextField';
import { useDispatch } from 'react-redux';
import { setIsFormError } from '../../../../store/envSlice';

const StatusStepConfirm = ({ ticket, setIsConfirmStatement }) => {
    const dispatch = useDispatch();

    const [state, setState] = useState({ phone: '', email: '' });
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        return () => {
            dispatch(setIsFormError(false));
        }
    }, []);

    const changeValue = (e) => {
        const { name, value } = e.target;

        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const confirmStatement = (e) => {
        e.preventDefault();

        const keys = Object.keys(state);

        let isValid = true;

        keys.forEach((key) => {
            if (!state[key].length) {
                dispatch(setIsFormError(true));
            }

            if (state[key] !== ticket[key]) {
                isValid = false;
            }
        });

        if (isValid) {
            setIsConfirmStatement(true);
        } else {
            setIsError(true);
        }
    };

    return (
        <form onSubmit={confirmStatement} className={styles.ticketCard_confirm}>
            <TextField
                name="phone"
                label="Номер телефона"
                value={state.phone}
                onChange={changeValue}
                required
            />
            <TextField
                type="email"
                name="email"
                label="Адрес эл. почты"
                value={state.email}
                onChange={changeValue}
                required
            />

            {
                isError &&
                <div className={styles.ticketCard_confirm_error}>
                    Неверный номер телефона или почта!
                </div>
            }

            <button
                className={[stylesStatement.submit_button, styles.ticketCard_confirm_button].join(' ')}
            >
                Дополнить заявку
            </button>

            <div>
                <h4>Причина</h4>
                <p>{ticket.comment}</p>
            </div>
        </form>
    );
};

export default StatusStepConfirm;