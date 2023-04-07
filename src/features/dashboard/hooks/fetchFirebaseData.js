import {useEffect, useState} from 'react'
import { getDatabase, ref, onValue} from 'firebase/database'


export const UseFetchFirebaseData = (type, url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    // call for draw stats
    // call for harvest stats
    // call for population stats



    useEffect(() => {
        const dbSnap = getDatabase()
        const drawStatsRef = ref(dbSnap, url)

        setLoading(true)
        onValue(drawStatsRef, (snapshot) => {
            const response = snapshot.val()
            
            console.log('res', response)
            if (response) {
                setData(response)
                setLoading(false)
            } else {
                // there doesn't appear to be any data
                setLoading(false)
            }
        }, error => {
            setLoading(false)
            setError(true)
        }, [url])

    }, [url])

    console.log({data, loading, error})
    return {data, loading, error}
}