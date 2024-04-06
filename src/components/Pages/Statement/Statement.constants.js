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
  academicDegree: '',
  address: {
    region: '',
    city: '',
    street: '',
  },
  currentActivity: '',
  projectDirection: '',
};
