import {Box, Typography} from '@mui/material'
import {coloradoOTC} from '../assets/otcUnits'


export default function OtcDisplay(isOTC, otcSearchString) {
    const OtcUnitList = () => {
        const displayString = coloradoOTC[otcSearchString];
        console.log(otcSearchString)
        console.log(displayString)
        return <Typography>{displayString}</Typography>
    }
    return (
        <Box>
            <Typography>Unit 11 first archery is OTC along with units: </Typography>
            <Box>
                <OtcUnitList/>
            </Box>
        </Box>
    )
}