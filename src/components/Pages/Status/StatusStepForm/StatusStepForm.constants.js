import {
    DAY_OPTIONS,
    EDUCATION_OPTIONS,
    PROJECT_DIRECTION_OPTIONS,
    REGION_OPTIONS,
    UNIT_OPTIONS,
    YEAR_OPTIONS
} from '../../Statement/Statement.constants';

export const STATE_WITH_TEST_DATA = {
    fullName: 'John',
    dateOfBirth: {
        day: DAY_OPTIONS[4],
        month: DAY_OPTIONS[6],
        year: YEAR_OPTIONS[12],
    },
    phone: '12345678',
    email: 'john@gmail.com',
    education: EDUCATION_OPTIONS[1],
    academicDegree: null,
    address: {
        region: REGION_OPTIONS[0],
        city: 'Талгар',
        street: 'Курчатова',
    },
    currentActivity: null,
    projectDirection: PROJECT_DIRECTION_OPTIONS[3],
    files: [
        { name: 'video.mp4', size: 7528197 },
        { name: 'file.pdf', size: 75281 },
    ],

    shortDescription: 'test',
    targetAudience: 'test',
    projectTasks: 'test',
    projectMission: 'test',
    projectJustification: 'test',
    implementationTimeline: 'test',
    projectObjectivesAndSuccessCriteria: 'test',
    projectDeliverables: 'test',
    projectStakeholders: 'test',
    preliminaryCostForecasts: 'test',
    projectConstraintsAndRisks: 'test',
    projectImplementationGeography: 'test',
};

export const COST_ESTIMATE_WITH_TEST_DATA = [
    { expenseItem: 'Канат', pricePerOne: '2000', unit: UNIT_OPTIONS[0], quantity: '10' },
    { expenseItem: 'Мяч', pricePerOne: '3000', unit: UNIT_OPTIONS[2], quantity: '15' },
];
