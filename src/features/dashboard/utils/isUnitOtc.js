import {coloradoOTC} from '../assets/otcUnits'

export const isUnitOtc = (species, genderSeasonMethod, unit) => {
    const parseIntUnit = parseInt(unit)

    if (species !== 'E') {
        return false
    }

    switch (genderSeasonMethod) {
        case 'EEO1A':
        case 'EMO1A':
            if (coloradoOTC['EEO1A'].includes(parseIntUnit)) {
                return true
            }
            return false
            break
        case 'EFO1A':
            if (coloradoOTC[genderSeasonMethod].includes(parseIntUnit)) {
                return true
            }
            return false
            break
        case 'EMO2R':
        case 'EMO3R':
            if (coloradoOTC['EMO2R'].includes(parseIntUnit)) {
                return true
            }
            return false
            break
        default:
            return false
            break
    }
} 