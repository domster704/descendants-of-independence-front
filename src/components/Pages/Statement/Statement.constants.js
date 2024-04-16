const fillDateOfBirthOptions = (length, type) => Array
    .from({ length })
    .map((_, index) => {
        const formattedIndex = String(index + 1 + (type === 'year' ? new Date().getFullYear() - 35 : 0))
            .padStart(2, '0');

        return {
            value: type + '-' + formattedIndex, label: formattedIndex,
        };
    });

export const DAY_OPTIONS = fillDateOfBirthOptions(31, 'day');
export const MONTH_OPTIONS = fillDateOfBirthOptions(12, 'month');
export const YEAR_OPTIONS = fillDateOfBirthOptions(35 - 14, 'year');

export const EDUCATION_OPTIONS = [
    { value: 'education-01', label: 'Среднее' },
    { value: 'education-02', label: 'Высшее' },
    { value: 'education-03', label: 'Профессиональное' },
    { value: 'education-04', label: 'Техническое' },
    { value: 'education-05', label: 'Продолжающее' },
    { value: 'education-06', label: 'Дополнительное' },
    { value: 'education-07', label: 'Начальное' },
    { value: 'education-08', label: 'Среднее специальное' },
    { value: 'education-09', label: 'Дистанционное образование' },
];

export const REGION_OPTIONS = [
    { value: 'region-01', label: 'Алматинская область' },
    { value: 'region-02', label: 'Астана' },
    { value: 'region-03', label: 'Акмолинская область' },
    { value: 'region-04', label: 'Актюбинская область' },
    { value: 'region-05', label: 'Абайская область' },
    { value: 'region-06', label: 'Атырауская область' },
    { value: 'region-07', label: 'Восточно-Казахстанская область' },
    { value: 'region-08', label: 'Жамбылская область' },
    { value: 'region-09', label: 'Жетысуская область' },
    { value: 'region-10', label: 'Западно-Казахстанская область' },
    { value: 'region-11', label: 'Карагандинская область' },
    { value: 'region-12', label: 'Костанайская область' },
    { value: 'region-13', label: 'Кызылординская область' },
    { value: 'region-14', label: 'Мангистауская область' },
    { value: 'region-15', label: 'Павлодарская область' },
    { value: 'region-16', label: 'Северо-Казахстанская область' },
    { value: 'region-17', label: 'Туркестанская область' },
    { value: 'region-18', label: 'Улытауская область' },
];

export const PROJECT_DIRECTION_OPTIONS = [
    { value: 'project-direction-01', label: 'Информационные технологии' },
    { value: 'project-direction-02', label: 'Культура' },
    { value: 'project-direction-03', label: 'Бизнес' },
    { value: 'project-direction-04', label: 'Наука' },
    { value: 'project-direction-05', label: 'Медиа' },
];

export const INITIAL_STATE = {
    full_name: 'ama',
    date_of_birth_day: DAY_OPTIONS[0],
    date_of_birth_month: MONTH_OPTIONS[0],
    date_of_birth_year: YEAR_OPTIONS[0],
    phone: '+996777371978',
    email: 'amanturmomunjanov009@gmail.com',
    education: EDUCATION_OPTIONS[0],
    academic_degree: null,
    address_region: REGION_OPTIONS[0],
    address_city: 'ds',
    address_street: 'dss',
    current_activity: null,
    project_direction: PROJECT_DIRECTION_OPTIONS[0],
    files: [],
};

export const PROJECT_DESCRIPTION_INITIAL_STATE = {
    short_description: 'sds',
    target_audience: 'sds',
    project_tasks: 'sds',
    project_mission: 'sds',
    project_justification: 'sds',
    implementation_timeline: 'sds',
    project_objectives_and_success_criteria: 'sds',
    project_deliverables: 'sds',
    project_stakeholders: 'sds',
    preliminary_cost_forecasts: 'sds',
    project_constraints_and_risks: 'sds',
    project_implementation_geography: 'sds',
};

export const UNIT_OPTIONS = [
    { value: 'unit-01', label: 'М' },
    { value: 'unit-02', label: 'СМ' },
    { value: 'unit-03', label: 'ММ' },
    { value: 'unit-04', label: 'КГ' },
    { value: 'unit-05', label: 'Г' },
    { value: 'unit-06', label: 'Т' },
    { value: 'unit-07', label: 'Л' },
    { value: 'unit-08', label: 'МЛ' },
];

export const COST_ESTIMATE_INITIAL_STATE = [
    { expense_item: 'sds', price_per_one: '10', unit: UNIT_OPTIONS[0], quantity: '100' },
];

export const TABLE_INPUT_STYLES = {
    border: 'none',
    borderRadius: '0',
    width: '100%',
    height: '100%',
    margin: '0 auto',
    background: 'none',
};

export const MAX_MEGABYTES = 50;

export const getRegularOrErrorDropZoneBorderUrl = (isError) => `data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23${isError ? 'F51616FF' : '00000080'}' stroke-width='3' stroke-dasharray='6' stroke-dashoffset='2' stroke-linecap='round'/%3e%3c/svg%3e`;
