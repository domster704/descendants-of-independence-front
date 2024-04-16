import React, { useEffect, useState } from 'react';
import * as styles from './StatusStepForm.module.css';
import * as stylesStatement from '../../Statement/Statement.module.css';
import StatementMainFields from '../../Statement/components/StatementMainFields/StatementMainFields';
import StatementDropdownBlock from '../../Statement/components/StatementDropdownBlock/StatementDropdownBlock';
import { setIsFormError } from '../../../../store/envSlice';
import { useDispatch, useSelector } from 'react-redux';
import { editApplication, fetchCategories } from '../../../../store/applicationThunk';
import { setTicket } from '../../../../store/statusSlice';
import StatementDropzone from '../../Statement/components/StatementDropzone/StatementDropzone';

const StatusStepForm = () => {
    const dispatch = useDispatch();

    const { ticket, cost_estimate } = useSelector(state => state.status);
    const { categories } = useSelector(state => state.application);

    const [state, setState] = useState(ticket);
    const [costEstimate, setCostEstimate] = useState(cost_estimate);

    useEffect(() => {
        if (ticket && ticket.category && categories.length) {
            const result = {
                ...ticket,
                project_direction: categories.find(option => option.value === ticket.category),
            };

            delete result.category;

            dispatch(setTicket(result));
            setState(result);
            setCostEstimate(cost_estimate);
        } else if (ticket === null && !cost_estimate.length) {
            setState(null);
            setCostEstimate([]);
        }
    }, [dispatch, ticket, categories]);

    useEffect(() => {
        dispatch(fetchCategories());

        return () => {
            dispatch(setIsFormError(false));
        };
    }, [dispatch]);

    const changeValue = (e) => {
        const { name, value } = e.target;

        if (name === 'phone') {
            if (value.length && (value !== '+' && isNaN(Number(value)) || Number(value) < 1)) return;
            setState((prevState) => ({ ...prevState, [name]: value.trim() }));
            return;
        }

        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const sendData = (e) => {
        e.preventDefault();

        const isStateValid = (obj) => {
            for (const key in obj) {
                if (key === 'cost_estimate') {
                    return !Boolean(obj[key].find(item => !isStateValid(item)));
                }

                if (Array.isArray(obj[key])) {
                    if (obj[key].length === 0) return false;
                    else continue;
                }

                if (typeof obj[key] === 'object' && obj[key] !== null && !isStateValid(obj[key])) return false;
                if (obj[key] === '') return false;
            }
            return true;
        };

        const result = { ...state, cost_estimate: costEstimate };

        if (!isStateValid(result)) {
            dispatch(setIsFormError(true));
            return;
        }

        try {
            dispatch(editApplication({ application: result, ticket }));
        } catch (e) {
            // Error code...
        }
    };

    return state && cost_estimate.length && (
        <form onSubmit={sendData} className={[stylesStatement.form, styles.form, stylesStatement.edit_form].join(' ')}>
            <StatementMainFields
                state={state}
                changeValue={changeValue}
                className={styles.text_fields}
            />

            <StatementDropdownBlock
                projectDescription={state}
                setProjectDescription={setState}
                changeValue={changeValue}
                costEstimate={costEstimate}
                setCostEstimate={setCostEstimate}
            />

            <StatementDropzone
                state={state}
                setState={setState}
            />

            <button className={[stylesStatement.submit_button, styles.submit_button].join(' ')}>Редактировать</button>
        </form>
    );
};

export default StatusStepForm;