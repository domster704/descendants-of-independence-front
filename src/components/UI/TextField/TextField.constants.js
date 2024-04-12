import chevronDown from '../../../assets/img/chevron-down.svg';

export const SELECT_STYLES = (inputStyles) => ({
    control: (baseStyles, state) => ({
        ...baseStyles,
        height: '52px',
        padding: '0 14px',
        borderRadius: 10,
        borderColor: 'rgba(0, 0, 0, 0.3)',
        ...inputStyles
    }),
    container: (baseStyles) => ({
        ...baseStyles,
        height: '100%',
    }),
    placeholder: (baseStyles) => ({
        ...baseStyles,
        color: 'var(--black-30)'
    }),
    dropdownIndicator: (baseStyles, state) => ({
        ...baseStyles,
        color: '#000',
        ':hover': {
            color: '#000'
        },
        'svg': {
            display: 'none',
        },
        '&:before': {
            content: '""',
            display: 'inline-block',
            width: '14px',
            height: '9px',
            backgroundImage: `url(${chevronDown})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
        }
    }),
    indicatorSeparator: (baseStyles) => ({
        ...baseStyles,
        display: 'none !important'
    }),
    valueContainer: (baseStyles) => ({
        ...baseStyles,
        padding: 0,
    }),
    singleValue: (baseValue) => ({
        ...baseValue,
        minWidth: 20,
        fontSize: 16,
        color: '#000',
    })
});
