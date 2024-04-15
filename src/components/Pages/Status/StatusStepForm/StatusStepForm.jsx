import React, { useEffect, useState } from 'react';
import * as styles from './StatusStepForm.module.css';
import * as stylesStatement from '../../Statement/Statement.module.css';
import StatementMainFields from '../../Statement/components/StatementMainFields/StatementMainFields';
import StatementDropdownBlock from '../../Statement/components/StatementDropdownBlock/StatementDropdownBlock';
import StatementDropzone from '../../Statement/components/StatementDropzone/StatementDropzone';
import { setIsFormError } from '../../../../store/envSlice';
import { useDispatch, useSelector } from 'react-redux';
import { COST_ESTIMATE_WITH_TEST_DATA, STATE_WITH_TEST_DATA } from './StatusStepForm.constants';

const StatusStepForm = () => {
    const dispatch = useDispatch();

    const { ticket, cost_estimate } = useSelector(state => state.status);

    const [state, setState] = useState(ticket);
    const [costEstimate, setCostEstimate] = useState(cost_estimate);

    useEffect(() => {
        return () => {
            dispatch(setIsFormError(false));
        };
    }, [dispatch]);

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

        if (!isStateValid({ ...state, costEstimate })) {
            dispatch(setIsFormError(true));
            return;
        }

        try {
            // Request code...
        } catch (e) {
            // Error code...
        }
    };

    return (
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