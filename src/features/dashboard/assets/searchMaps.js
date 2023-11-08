export const stateMap = [
    {label: 'Colorado', value: 'CO', disabled: false},
    {label: 'Idaho', value: 'ID', disabled: true},
    {label: 'Montana', value: 'MT', disabled: true},
    {label: 'New Mexico', value: 'NM', disabled: true},
    {label: 'Utah', value: 'UT', disabled: true},
    {label: 'Wyoming', value: 'WY', disabled: true},
];

export const speciesMap = [
    {label: 'Elk', value: 'E', disabled: false},
    {label: 'Deer', value: 'D', disabled: false},
    {label: 'Pronghorn', value: 'A', disabled: false},
    {label: 'Moose', value: 'M', disabled: true},
    {label: 'Bear', value: 'B', disabled: true},
];

export const genderMap = [
    {label: 'Male', value: 'E', disabled: false},
    {label: 'Female', value: 'F', disabled: false},
    {label: 'Either', value: 'E', disabled: false},
];

export const methodMap = [
    {label: 'Rifle', value: 'R'},
    {label: 'Archery', value: 'A'},
    {label: 'Muzzleloader', value: 'M'}
];

export const drawTypeByState = {
    CO: [
        {label: 'Pref Pt', value: 'Pref', disabled: false},
        {label: 'OTC', value: 'OTC', disabled: false},
    ],
    WY: [
        {label: 'Pref Pt', value: 'Pref', disabled: true},
        {label: 'General', value: 'GEN', disabled: true},
        {label: 'Random', value: 'R', disabled: true},
        {label: 'Special', value: 'S', disabled: true},
    ],
    NM : [
        {label: 'Random', value: 'R', disabled: true},
    ]
};