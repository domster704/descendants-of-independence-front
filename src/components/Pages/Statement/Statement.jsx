import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setIsFormError } from '../../../store/envSlice';
import {
    COST_ESTIMATE_WITH_TEST_DATA,
    PROJECT_DESCRIPTION_WITH_TEST_DATA,
    STATE_WITH_TEST_DATA,
} from './Statement.constants';
import StatementDropdownBlock from './components/StatementDropdownBlock/StatementDropdownBlock';
import StatementDropzone from './components/StatementDropzone/StatementDropzone';
import StatementMainFields from './components/StatementMainFields/StatementMainFields';
import * as styles from './Statement.module.css';
import { useTranslation } from 'react-i18next';
import { createApplication, fetchCategories } from '../../../store/applicationThunk';

const Statement = () => {
    const { t } = useTranslation('statement');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [state, setState] = useState(STATE_WITH_TEST_DATA);
    const [projectDescription, setProjectDescription] = useState(PROJECT_DESCRIPTION_WITH_TEST_DATA);
    const [costEstimate, setCostEstimate] = useState(COST_ESTIMATE_WITH_TEST_DATA);

    useEffect(() => {
        dispatch(fetchCategories());

        return () => {
            dispatch(setIsFormError(false));
        };
    }, [dispatch]);

    const changeValue = (e) => {
        const { name, value } = e.target;

        if (projectDescription !== null && Object.keys(projectDescription).includes(name)) {
            setProjectDescription((prevState) => ({ ...prevState, [name]: value }));
            return;
        }

        setState((prevState) => ({ ...prevState, [name]: value }));
    };

    const sendData = async (e) => {
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

        const resultState = { ...state, ...projectDescription, cost_estimate: costEstimate };

        if (!isStateValid(resultState)) {
            dispatch(setIsFormError(true));
            return;
        }

        try {
            await dispatch(createApplication(resultState)).unwrap();
        } catch (e) {
            // Error code...
        } finally {
            navigate('/success');
        }
    };

    return (
        <div className={styles.statement}>
            <div className={styles.title}>
                <h1>{t('title')}</h1>
                <p>{t('title_description')}</p>
            </div>

            <form onSubmit={sendData} className={styles.form}>
                <StatementMainFields
                    state={state}
                    changeValue={changeValue}
                />

                <StatementDropdownBlock
                    projectDescription={projectDescription}
                    setProjectDescription={setProjectDescription}
                    changeValue={changeValue}
                    costEstimate={costEstimate}
                    setCostEstimate={setCostEstimate}
                />

                <StatementDropzone
                    state={state}
                    setState={setState}
                />

                <button className={styles.submit_button}>{t('submit_button')}</button>
            </form>
        </div>
    );
};

export default Statement;
