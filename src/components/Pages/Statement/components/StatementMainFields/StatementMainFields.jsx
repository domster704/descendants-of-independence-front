import React from 'react';
import TextField from '../../../../UI/TextField/TextField';
import { DAY_OPTIONS, MONTH_OPTIONS, YEAR_OPTIONS } from '../../Statement.constants';
import * as styles from './StatementMainField.module.css';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const StatementMainFields = ({ state, changeValue, className }) => {
    const { t, i18n } = useTranslation('statement');
    const EDUCATION_OPTIONS = t('EDUCATION_OPTIONS', { returnObjects: true });
    const REGION_OPTIONS = t('REGION_OPTIONS', { returnObjects: true });
    const PROJECT_DIRECTION_OPTIONS = t('PROJECT_DIRECTION_OPTIONS', {
        returnObjects: true,
    });

    const { categories } = useSelector(state => state.application);

    return (
        <div className={[styles.text_fields, className].join(' ')}>
            <TextField
                name='full_name'
                label={t('fullName')}
                placeholder={t('fullName_placeholder')}
                value={state.full_name}
                onChange={changeValue}
                required
            />

            <div className={styles.date_of_birth}>
                <p>{t('birth_date')}</p>

                <div className={styles.date_of_birth_text_fields}>
                    <TextField
                        type='select'
                        name='date_of_birth_day'
                        placeholder='01'
                        options={DAY_OPTIONS}
                        currentOption={state.date_of_birth_day}
                        onChange={changeValue}
                        required
                    />

                    <TextField
                        type='select'
                        name='date_of_birth_month'
                        placeholder='01'
                        options={MONTH_OPTIONS}
                        currentOption={state.date_of_birth_month}
                        onChange={changeValue}
                        required
                    />

                    <TextField
                        type='select'
                        name='date_of_birth_year'
                        placeholder='2004'
                        options={YEAR_OPTIONS}
                        currentOption={state.date_of_birth_year}
                        onChange={changeValue}
                        required
                    />
                </div>
            </div>

            <TextField
                name='phone'
                label={t('phone')}
                placeholder={t('phone_placeholder')}
                value={state.phone}
                onChange={changeValue}
                required
            />

            <TextField
                type='email'
                name='email'
                label={t('email')}
                placeholder='example@gmail.com'
                value={state.email}
                onChange={changeValue}
                required
            />

            <TextField
                type='select'
                name='education'
                label={t('education')}
                placeholder={t('education_placeholder')}
                options={EDUCATION_OPTIONS}
                currentOption={state.education}
                onChange={changeValue}
                required
            />

            <TextField
                name='academic_degree'
                label={t('academic_degree')}
                placeholder={t('academic_degree_placeholder')}
                value={state.academic_degree}
                onChange={changeValue}
            />

            <div className={styles.residential_address}>
                <TextField
                    type='select'
                    name='address_region'
                    label={t('address')}
                    placeholder={t('region_placeholder')}
                    options={REGION_OPTIONS}
                    currentOption={state.address_region}
                    onChange={changeValue}
                    required
                />
                <TextField
                    name='address_city'
                    placeholder={t('city_placeholder')}
                    value={state.address_city}
                    onChange={changeValue}
                    required
                />
                <TextField
                    name='address_street'
                    placeholder={t('street_placeholder')}
                    value={state.address_street}
                    onChange={changeValue}
                    required
                />
            </div>

            <div>
                <TextField
                    name='current_activity'
                    label={t('current_activity')}
                    placeholder={t('current_activity_placeholder')}
                    value={state.current_activity}
                    onChange={changeValue}
                    inputStyles={{ marginBottom: 26 }}
                />

                <TextField
                    type='select'
                    name='project_direction'
                    label={t('project_direction')}
                    placeholder={t('project_direction_placeholder')}
                    options={categories.map(category => ({
                        ...category,
                        label: i18n.language === 'kz'
                            ? category.label_kz
                            : category.label,
                    }))}
                    currentOption={state.project_direction ? {
                        ...state.project_direction,
                        label: i18n.language === 'kz'
                            ? state.project_direction.label_kz
                            : state.project_direction.label,
                    } : ''}
                    onChange={changeValue}
                    required
                    inputStyles={{ backgroundColor: '#1661F51A' }}
                />
            </div>
        </div>
    );
};

export default StatementMainFields;
