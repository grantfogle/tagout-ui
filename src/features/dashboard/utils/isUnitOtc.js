import {coloradoOTC} from '../assets/otcUnits'

export const isUnitOtc = (genderSeasonMethod, unit) => {
    const parseIntUnit = parseInt(unit)
    switch (genderSeasonMethod) {
        case 'EEO1A':
        case 'EMO1A':
            if (coloradoOTC['EEO1A'].includes(parseIntUnit)) {
                return true
            }
            return false
        case 'EFO1A':
            if (coloradoOTC[genderSeasonMethod].includes(parseIntUnit)) {
                return true
            }
            return false
        case 'EMO2R':
        case 'EMO3R':
            if (coloradoOTC['EMO2R'].includes(parseIntUnit)) {
                return true
            }
            return false
        case 'AEO1A':
        case 'AFO1A':
        case 'AMO1A':
            if (coloradoOTC['AE01A'].includes(parseIntUnit)) {
                return true
            }
            return false
        default:
            return false
    }
} 