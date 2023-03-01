import { getDatabase, ref, onValue} from "firebase/database"

const getHarvestStats = async (huntSeason, method, unit) => {
    const harvestUrl = `colorado/harvestStats/elk/${huntSeason}${method}/${unit}`

    const dbSnap = getDatabase()
    const drawStatsRef = ref(dbSnap, harvestUrl)
    
    onValue(drawStatsRef, (snapshot) => {
        const data = snapshot.val()
        if (data) {
            // save to store
            return data
        } else {
            return false
        }
    }, error => {
        return false
    })

}