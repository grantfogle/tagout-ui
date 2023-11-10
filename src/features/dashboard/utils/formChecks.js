export const displaySpeciesAndGender = (state, resident) => {
    return !!(state && resident);
}
export const displayDrawTypes = (species, gender) => {
    return !!(species && gender);
}

export const displayMethod = (drawType) => {
    return !!(drawType);
}

export const displaySeason = (method) => {
    return !!(method);
}

export const coloradoOtcCheck = (species) => {
    return !!(species === 'E');
}

export const coloradoMethodCheck = (drawType) => {
    return !!(drawType === 'OTC');
}