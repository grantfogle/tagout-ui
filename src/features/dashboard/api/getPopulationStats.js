import { getDatabase, ref, onValue} from 'firebase/database'

export const getPopulationStats = async (unit) => {
    const dbSnap = getDatabase()
    const populationStatsRef = await ref(dbSnap, 'colorado/populationStats/elk/' + unit)

    onValue(populationStatsRef, (snapshot) => {
        const data = snapshot.val()
        console.log('ITLOADED')
        if (data) {
            return data
        } else {
            return false
        }
    }, error => {
        return false
    })
}