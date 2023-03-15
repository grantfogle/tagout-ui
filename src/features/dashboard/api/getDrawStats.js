import { getDatabase, ref, onValue} from 'firebase/database'

export const getDrawStats = async (state, species, huntCode) => {
    const dbSnap = getDatabase()
    const drawStatsRef = ref(dbSnap, `${state}/drawStats/${species}/${huntCode}`)

    onValue(drawStatsRef, (snapshot) => {
        const data = snapshot.val()
        if (data) {
            return {
                error: false,
                data
            }
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
}