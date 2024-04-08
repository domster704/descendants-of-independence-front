const fillDateOfBirthOptions = (length, type) => Array
    .from({ length })
    .map((_, index) => {
        const formattedIndex = String(index + 1 + (type === 'year' ? new Date().getFullYear() - 35 : 0))
            .padStart(2, '0');

        return {
            value: type + '-' + formattedIndex, label: formattedIndex
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
    { value: 'region-02', label: 'Акмолинская область' },
    { value: 'region-03', label: 'Актюбинская область' },
    { value: 'region-04', label: 'Абайская область' },
    { value: 'region-05', label: 'Атырауская область' },
    { value: 'region-06', label: 'Восточно-Казахстанская область' },
    { value: 'region-07', label: 'Жамбылская область' },
    { value: 'region-08', label: 'Жетысуская область' },
    { value: 'region-09', label: 'Западно-Казахстанская область' },
    { value: 'region-10', label: 'Карагандинская область' },
    { value: 'region-11', label: 'Костанайская область' },
    { value: 'region-12', label: 'Кызылординская область' },
    { value: 'region-13', label: 'Мангистауская область' },
    { value: 'region-14', label: 'Павлодарская область' },
    { value: 'region-15', label: 'Северо-Казахстанская область' },
    { value: 'region-16', label: 'Туркестанская область' },
    { value: 'region-17', label: 'Улытауская область' },
];

export const PROJECT_DIRECTION_OPTIONS = [
    { value: 'project-direction-01', label: 'Информационные технологии' },
    { value: 'project-direction-02', label: 'Культура' },
    { value: 'project-direction-03', label: 'Бизнес' },
    { value: 'project-direction-04', label: 'Наука' },
    { value: 'project-direction-05', label: 'Медиа' },
];

export const INITIAL_STATE = {
    fullName: '',
    dateOfBirth: {
        day: '',
        month: '',
        year: '',
    },
    number: '',
    email: '',
    education: '',
    academicDegree: null,
    address: {
        region: '',
        city: '',
        street: '',
    },
    currentActivity: null,
    projectDirection: '',
    files: [],
};

export const PROJECT_DESCRIPTION_INITIAL_STATE = {
    shortDescription: null,
    targetAudience: null,
    projectTasks: null,
    projectMission: null,
    projectJustification: null,
    implementationTimeline: null,
    projectObjectivesAndSuccessCriteria: null,
    projectDeliverables: null,
    projectStakeholders: null,
    preliminaryCostForecasts: null,
    projectConstraintsAndRisks: null,
    projectImplementationGeography: null,
};

export const COST_ESTIMATE_INITIAL_STATE = [
    { number: '1', expenseItem: 'Канат', pricePerOne: '2000', unit: 'M', quantity: '100', summary: '200000' },
    { number: '2', expenseItem: 'Мяч', pricePerOne: '4000', unit: 'M', quantity: '100', summary: '400000' },
    { number: '1', expenseItem: 'Канат', pricePerOne: '3000', unit: 'M', quantity: '100', summary: '300000' },
];

export const MAX_MEGABYTES = 50;

export const getRegularOrErrorDropZoneBorderUrl = (isRed) => `data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='10' ry='10' stroke='%23${isRed ? 'F51616FF' : '00000080'}' stroke-width='3' stroke-dasharray='5' stroke-dashoffset='2' stroke-linecap='round'/%3e%3c/svg%3e`;