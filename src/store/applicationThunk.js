import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../axiosApi';

export const fetchCategories = createAsyncThunk(
    'application/fetchCategories',
    async () => {
        const { data } = await axiosApi('categories');
        return data.map(category => ({ value: category.id, label: category.name }));
    },
);

export const fetchApplicationsById = createAsyncThunk(
    'application/fetchApplicationsById',
    async (id) => {
        const { data } = await axiosApi('applications/' + id);
        const { data: cost_estimate } = await axiosApi('cost_estimate/' + id);
        return { ticket: data[0], cost_estimate };
    },
);


export const createApplication = createAsyncThunk(
    'application/create',
    async (application) => {
        const { date_of_birth_day, date_of_birth_month, date_of_birth_year } = application;

        const formattedApplication = {
            ...application,
            date_of_birth: `${date_of_birth_year.label}-${date_of_birth_month.label}-${date_of_birth_day.label}`,
            education: application.education.label,
            address_region: application.address_region.label,
            project_direction: application.project_direction.value,
        };

        delete formattedApplication.date_of_birth_day;
        delete formattedApplication.date_of_birth_month;
        delete formattedApplication.date_of_birth_year;

        const formData = new FormData();
        const keys = Object.keys(formattedApplication);
        keys.forEach((key) => {
            const value = formattedApplication[key];

            if (value !== null) {
                if (Array.isArray(value)) {
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

        await axiosApi.post('applications', formData);
    },
);