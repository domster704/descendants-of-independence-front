import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';
import {UNIT_OPTIONS} from '../components/Pages/Statement/Statement.constants';

export const fetchCategories = createAsyncThunk(
    'application/fetchCategories',
    async () => {
        const {data} = await axiosApi('categories');
        return data.map(category => ({
            value: category.id,
            label: category.name,
            label_kz: category.name_kz,
        }));
    },
);

export const fetchApplicationsById = createAsyncThunk(
    'application/fetchApplicationsById',
    async (id) => {
        const response = await axiosApi('applications/' + id);
        if (!response.data.length) {
            return {ticket: null, cost_estimate: []};
        }
        const [application] = response.data;
        const ticket = {...application, files: application.files_path};
        delete ticket.files_path;

        const {data} = await axiosApi('cost_estimate/' + id);
        const cost_estimate = data.map(item => ({
            ...item,
            unit: UNIT_OPTIONS.find(option => option.label === item.unit),
        }));
        return {ticket, cost_estimate};
    },
);

export const createApplication = createAsyncThunk(
    'application/create',
    async ({application, lang}, {getState}) => {
        try {
            const {date_of_birth_day, date_of_birth_month, date_of_birth_year} = application;

            const formattedApplication = {
                ...application,
                date_of_birth: `${date_of_birth_year.label}-${date_of_birth_month.label}-${date_of_birth_day.label}`,
                education: application.education.label,
                address_region: application.address_region.label,
                project_direction: getState().application.categories
                    .find(category => category.label === application.project_direction.label)?.value,
            };

            delete formattedApplication.date_of_birth_day;
            delete formattedApplication.date_of_birth_month;
            delete formattedApplication.date_of_birth_year;

            const formData = new FormData();
            const keys = Object.keys(formattedApplication);
            keys.forEach((key) => {
                const value = formattedApplication[key];

                if (value !== null) {
                    if (key === 'cost_estimate') {
                        formData.append(key, JSON.stringify(value));
                    } else if (Array.isArray(value)) {
                        value.forEach((item) => {
                            if (item instanceof File) {
                                formData.append(key, item, item.name);
                            } else {
                                formData.append(key, JSON.stringify(item));
                            }
                        });
                    } else {
                        formData.append(key, value);
                    }
                }
            });

        return await axiosApi.post('applications?lang=' + lang, formData, {
            maxContentLength: 100 * 1024 * 1024,
});
        } catch (e) {
            console.error(e);
            return e.response;
        }
    },
);

export const editApplication = createAsyncThunk(
    'application/edit',
    async ({application, ticket}) => {
        const id = application.id;

        const getFormattedTicket = (obj) => {
            const {date_of_birth_day, date_of_birth_month, date_of_birth_year} = obj;

            const formattedObj = {
                ...obj,
                date_of_birth: `${date_of_birth_year.label}-${date_of_birth_month.label}-${date_of_birth_day.label}`,
                education: obj.education.label,
                address_region: obj.address_region.label,
                category: obj.project_direction.value,
                files: obj.files.filter(file => typeof file !== 'string'),
                files_path: obj.files.filter(file => typeof file === 'string'),
            };

            delete formattedObj.date_of_birth_day;
            delete formattedObj.date_of_birth_month;
            delete formattedObj.date_of_birth_year;
            delete formattedObj.project_direction;

            return formattedObj;
        };

        const formattedTicket = getFormattedTicket(ticket);
        const formattedApplication = getFormattedTicket(application);

        const result = {};

        for (const key in formattedApplication) {
            if (key === 'cost_estimate') {
                result.cost_estimate = formattedApplication[key];
            }
            if (formattedTicket[key] !== formattedApplication[key]) {
                result[key] = formattedApplication[key];
            }
        }

        const formData = new FormData();
        const keys = Object.keys(result);
        keys.forEach((key) => {
            const value = result[key];

            if (value !== null) {
                if (key === 'cost_estimate' || key === 'files_path') {
                    formData.append(key, JSON.stringify(value));
                } else if (Array.isArray(value)) {
                    value.forEach((item) => {
                        if (item instanceof File) {
                            formData.append(key, item, item.name);
                        } else {
                            formData.append(key, JSON.stringify(item));
                        }
                    });
                } else {
                    formData.append(key, value);
                }
            }
        });

        await axiosApi.put('applications/' + id, formData);
    },
);