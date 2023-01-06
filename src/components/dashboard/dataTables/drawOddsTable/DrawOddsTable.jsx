import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


export default function DrawOddsTable({ displayStats, showLoading, showErrorLoading }) {
  const successColor = '#2ecc71'
  const midSuccessColor = '#f1c40f'
  const noSuccessColor = '#e74c3c'

  const getConditionalBgColor = (successPercent) => {
    return (successPercent === '100%') ? successColor :
          (successPercent === '0%') ? noSuccessColor :
          midSuccessColor
  }

  const displayFirstChoiceRows = () => {
    const firstChoiceArr = []
    const firstChoiceObj = firstChoiceArr;
    let firstChoiceDisplayArr = [];
    
    for (let obj in displayStats) {
      if (!obj.includes('Total Choice')) {
        firstChoiceArr.push(displayStats[obj])
      }
    }
    
    if (firstChoiceObj) {
      for (let key in firstChoiceObj) {
        const resInfo = firstChoiceObj[key].res;
        const nonResInfo = firstChoiceObj[key].nonRes;
        
        if (resInfo.apps || nonResInfo.apps) {  
          const resSuccessPercentage = getSuccessPercentage(resInfo.apps, resInfo.success)
          const nonResSuccessPercentage = getSuccessPercentage(nonResInfo.apps, nonResInfo.success)
        
          firstChoiceDisplayArr.push(
            <TableRow key={'first-choice-' + key}>
              <TableCell>{key}</TableCell>
              <TableCell sx={{backgroundColor: getConditionalBgColor(resSuccessPercentage)}}>
                {resSuccessPercentage} ({resInfo.success}/{resInfo.apps})
                </TableCell>
              <TableCell sx={{backgroundColor: getConditionalBgColor(nonResSuccessPercentage)}}>
                {nonResSuccessPercentage} ({nonResInfo.success}/{nonResInfo.apps})
                </TableCell>
            </TableRow>
          )
        }
      }
      return firstChoiceDisplayArr;
    }
  }

  const displaySecondChoiceRow = () => {
    const secondChoiceObj = displayStats['Total Choice 2'];
    if (secondChoiceObj) {
      const resSecondInfo = secondChoiceObj.res
      const nonResSecondInfo = secondChoiceObj.nonRes
      const resSuccessPercentage = getSuccessPercentage(resSecondInfo.apps, resSecondInfo.success)
      const nonResSuccessPercentage = getSuccessPercentage(nonResSecondInfo.apps, nonResSecondInfo.success)
      if (resSecondInfo.apps || nonResSecondInfo.apps) {
        return (
          <TableRow>
            <TableCell>2nd Choice</TableCell>
            <TableCell sx={{backgroundColor: getConditionalBgColor(resSuccessPercentage)}}>
              {resSuccessPercentage} ({resSecondInfo.success}/{resSecondInfo.apps})
                </TableCell>
            <TableCell sx={{backgroundColor: getConditionalBgColor(nonResSuccessPercentage)}}>
              {nonResSuccessPercentage} ({nonResSecondInfo.success}/{nonResSecondInfo.apps})
            </TableCell>
          </TableRow>
        )
      }
  }
}

const displayThirdChoiceRow = () => {
  const thirdChoiceObj = displayStats['Total Choice 3'];
    if (thirdChoiceObj) {
      const resThirdInfo = thirdChoiceObj.res
      const nonResThirdInfo = thirdChoiceObj.nonRes
      const resSuccessPercentage = getSuccessPercentage(resThirdInfo.apps, resThirdInfo.success)
      const nonResSuccessPercentage = getSuccessPercentage(nonResThirdInfo.apps, nonResThirdInfo.success)
      if (resThirdInfo.apps || nonResThirdInfo.apps) {
        return (
          <TableRow>
            <TableCell>3rd Choice</TableCell>
            <TableCell sx={{backgroundColor: getConditionalBgColor(resSuccessPercentage)}}>
              {resSuccessPercentage} ({resThirdInfo.success}/{resThirdInfo.apps})
                </TableCell>
            <TableCell sx={{backgroundColor: getConditionalBgColor(nonResSuccessPercentage)}}>
              {nonResSuccessPercentage} ({nonResThirdInfo.success}/{nonResThirdInfo.apps})
            </TableCell>
          </TableRow>
        )
      }
  }
}

const displayFourthChoiceRow = () => {
  const fourthChoiceObj = displayStats['Total Choice 4'];
    if (fourthChoiceObj) {
      const resFourthInfo = fourthChoiceObj.res
      const nonResFourthInfo = fourthChoiceObj.nonRes
      const resSuccessPercentage = getSuccessPercentage(resFourthInfo.apps, resFourthInfo.success)
      const nonResSuccessPercentage = getSuccessPercentage(nonResFourthInfo.apps, nonResFourthInfo.success)
      if (resFourthInfo.apps || nonResFourthInfo.apps) {
        return (
          <TableRow>
            <TableCell>4th Choice</TableCell>
            <TableCell sx={{backgroundColor: getConditionalBgColor(resSuccessPercentage)}}>
              {resSuccessPercentage} ({resFourthInfo.success}/{resFourthInfo.apps})
                </TableCell>
            <TableCell sx={{backgroundColor: getConditionalBgColor(nonResSuccessPercentage)}}>
              {nonResSuccessPercentage} ({nonResFourthInfo.success}/{nonResFourthInfo.apps})
            </TableCell>
          </TableRow>
        )
      }
  }
}

  const getSuccessPercentage = (applicants, success) => {
    const successPercentage = (success / applicants) * 100;
    return successPercentage ?  + successPercentage.toFixed(0) + '%' : '0%';
  }

  const displayDrawTable = () => {
    if (showErrorLoading) {
      return (
        <Box>
          <Typography variant="h2" component="h4" align="center" sx={{color: '#d35400', mt: 4}}>
            Error loading data, please try again
          </Typography>
        </Box>
      )
      // error text
    } else if (showLoading) {
      return (
        <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', height: '800px'}}>
          <Skeleton width={800} height={200} />
          <Skeleton width={800} height={200} />
          <Skeleton width={800} height={200} />
        </Box>
      )
    } else {

    }
    return (
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Preference Points</TableCell>
            <TableCell>Resident</TableCell>
            <TableCell>Non Resident</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {displaySecondChoiceRow()}
          {displayThirdChoiceRow()}
          {displayFourthChoiceRow()}
          {displayFirstChoiceRows()}
        </TableBody>
      </Table>
    </TableContainer>
    )
  }
  return (
    <Box>
      {displayDrawTable()}
    </Box>
  );
}