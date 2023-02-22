import { getDatabase, ref, onValue} from "firebase/database"

export const getDrawStats = async (searchTerm) => {
    // setDrawOddsLoading(true)
    console.log('BANG')

    const dbSnap = getDatabase()
    const drawStatsRef = ref(dbSnap, 'colorado/drawStats/elk/' + searchTerm)

    onValue(drawStatsRef, (snapshot) => {
        const data = snapshot.val()
        if (data) {
            return data
        } else {
            return false
        }
    }, error => {
        return false
    })
}