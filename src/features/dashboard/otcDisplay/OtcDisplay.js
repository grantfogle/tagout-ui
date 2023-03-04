import {Box, Typography} from '@mui/material'
import {coloradoOTC} from '../assets/otcUnits'


export default function OtcDisplay({isOtcUnit, unit}) {
    // const OtcUnitList = () => {
    //     const displayString = coloradoOTC[otcSearchString];
    //     console.log(otcSearchString)
    //     console.log(displayString)
    //     return <Typography>{displayString}</Typography>
    // }
    return (
        <Box sx={{width: '100%'}}>
            <Typography variant="h3" component="h2">Unit {unit} is OTC</Typography>
            {/* <Box>
                <OtcUnitList/>
            </Box> */}
        </Box>
    )
}