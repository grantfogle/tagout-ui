import { getDatabase, ref, onValue} from 'firebase/database'
import { isUnitOtc } from '../utils/isUnitOtc'

export const getDrawOddsData = async (state, species, genderSeasonMethod, unit, huntCode) => {
    const dbSnap = getDatabase()
    let returnData = []

    const isOtc = isUnitOtc(species, genderSeasonMethod, unit)
    
    if (isOtc) {
        return false
    }
    
    const drawStatsRef = ref(dbSnap, `${state}1/${species}/drawStats/${huntCode}`)
    
    onValue(drawStatsRef, (snapshot) => {
        const data = snapshot.val()
        if (data) {
            returnData = data
        } else {
            return {
                error: false,
                data: []
            }
        }
    }, error => {
        return {
            error: true,
            data: []
        }
    })

    return returnData
}