import { getDatabase, ref, onValue} from 'firebase/database'

export const getDrawStats = async (state, species, huntCode) => {
    const dbSnap = getDatabase()
    const drawStatsRef = ref(dbSnap, `${state}1/${species}/drawStats/${huntCode}`)

    onValue(drawStatsRef, (snapshot) => {
        const data = snapshot.val()
        if (data) {
            console.log(data)
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