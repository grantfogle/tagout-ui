import React, { useContext } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Skeleton,
  Box,
  Typography
} from '@mui/material'
import { DashboardContext } from '../../components/DashboardContextProvider'


export default function DrawOddsTable() {
  const {
    drawOddsData,
    drawOddsLoading,
    drawOddsError
  } = useContext(DashboardContext)
  /* 
    Todo:
    1) Add spectrum of colors
    2) Make graph horizontal instead of vertical layout as it is now
    3) Move table headers to constants file
  */

  const successColor = '#2ecc71'
  const midSuccessColor = '#f1c40f'
  const noSuccessColor = '#e74c3c'
  const noEntriesColor = '#fff'

  const getConditionalBgColor = (successPercent, applications) => {
    if (applications === 0) {
      return noEntriesColor
    }
    return (successPercent === '100%') ? successColor :
      (successPercent === '0%') ? noSuccessColor :
        midSuccessColor
  }

  const displayFirstChoiceRows = () => {
    const firstChoiceArr = []
    const firstChoiceObj = firstChoiceArr
    let firstChoiceDisplayArr = []
    for (let obj in drawOddsData) {
      if (!obj.includes('Total Choice')) {
        firstChoiceArr.push(drawOddsData[obj])
      }
    }

    if (firstChoiceObj) {
      for (let key in firstChoiceObj) {
        const resInfo = firstChoiceObj[key].res
        const nonResInfo = firstChoiceObj[key].nonRes

        if (resInfo.applicants || nonResInfo.applicants) {
          const resSuccessPercentage = getSuccessPercentage(resInfo.applicants, resInfo.success)
          const nonResSuccessPercentage = getSuccessPercentage(nonResInfo.applicants, nonResInfo.success)

          firstChoiceDisplayArr.push(
            <TableRow key={'first-choice-' + key}>
              <TableCell>{key}</TableCell>
              <TableCell sx={{ backgroundColor: getConditionalBgColor(resSuccessPercentage, resInfo.applicants) }}>
                {resSuccessPercentage} ({resInfo.success}/{resInfo.applicants})
              </TableCell>
              <TableCell sx={{ backgroundColor: getConditionalBgColor(nonResSuccessPercentage, nonResInfo.applicants) }}>
                {nonResSuccessPercentage} ({nonResInfo.success}/{nonResInfo.applicants})
              </TableCell>
            </TableRow>
          )
        }
      }
      return firstChoiceDisplayArr
    }
  }

  const displaySecondChoiceRow = () => {
    const secondChoiceObj = drawOddsData['Total Choice 2']
    if (secondChoiceObj) {
      const resSecondInfo = secondChoiceObj.res
      const nonResSecondInfo = secondChoiceObj.nonRes
      const resSuccessPercentage = getSuccessPercentage(resSecondInfo.applicants, resSecondInfo.success)
      const nonResSuccessPercentage = getSuccessPercentage(nonResSecondInfo.applicants, nonResSecondInfo.success)
      if (resSecondInfo.applicants || nonResSecondInfo.applicants) {
        return (
          <TableRow>
            <TableCell>2nd Choice</TableCell>
            <TableCell sx={{ backgroundColor: getConditionalBgColor(resSuccessPercentage, resSecondInfo.applicants) }}>
              {resSuccessPercentage} ({resSecondInfo.success}/{resSecondInfo.applicants})
            </TableCell>
            <TableCell sx={{ backgroundColor: getConditionalBgColor(nonResSuccessPercentage, nonResSecondInfo.applicants) }}>
              {nonResSuccessPercentage} ({nonResSecondInfo.success}/{nonResSecondInfo.applicants})
            </TableCell>
          </TableRow>
        )
      }
    }
  }

  const displayThirdChoiceRow = () => {
    const thirdChoiceObj = drawOddsData['Total Choice 3']
    if (thirdChoiceObj) {
      const resThirdInfo = thirdChoiceObj.res
      const nonResThirdInfo = thirdChoiceObj.nonRes
      const resSuccessPercentage = getSuccessPercentage(resThirdInfo.applicants, resThirdInfo.success)
      const nonResSuccessPercentage = getSuccessPercentage(nonResThirdInfo.applicants, nonResThirdInfo.success)
      if (resThirdInfo.applicants || nonResThirdInfo.applicants) {
        return (
          <TableRow>
            <TableCell>3rd Choice</TableCell>
            <TableCell sx={{ backgroundColor: getConditionalBgColor(resSuccessPercentage, resThirdInfo.applicants) }}>
              {resSuccessPercentage} ({resThirdInfo.success}/{resThirdInfo.applicants})
            </TableCell>
            <TableCell sx={{ backgroundColor: getConditionalBgColor(nonResSuccessPercentage, nonResThirdInfo.applicants) }}>
              {nonResSuccessPercentage} ({nonResThirdInfo.success}/{nonResThirdInfo.applicants})
            </TableCell>
          </TableRow>
        )
      }
    }
  }

  const displayFourthChoiceRow = () => {
    const fourthChoiceObj = drawOddsData['Total Choice 4']
    if (fourthChoiceObj) {
      const resFourthInfo = fourthChoiceObj.res
      const nonResFourthInfo = fourthChoiceObj.nonRes
      const resSuccessPercentage = getSuccessPercentage(resFourthInfo.applicants, resFourthInfo.success)
      const nonResSuccessPercentage = getSuccessPercentage(nonResFourthInfo.applicants, nonResFourthInfo.success)
      if (resFourthInfo.applicants || nonResFourthInfo.applicants) {
        return (
          <TableRow>
            <TableCell>4th Choice</TableCell>
            <TableCell sx={{ backgroundColor: getConditionalBgColor(resSuccessPercentage, resFourthInfo.applicants) }}>
              {resSuccessPercentage} ({resFourthInfo.success}/{resFourthInfo.applicants})
            </TableCell>
            <TableCell sx={{ backgroundColor: getConditionalBgColor(nonResSuccessPercentage, nonResFourthInfo.applicants) }}>
              {nonResSuccessPercentage} ({nonResFourthInfo.success}/{nonResFourthInfo.applicants})
            </TableCell>
          </TableRow>
        )
      }
    }
  }

  const getSuccessPercentage = (applicants, success) => {
    const successPercentage = (success / applicants) * 100
    return successPercentage ? + successPercentage.toFixed(0) + '%' : '0%'
  }

  const displayDrawTable = () => {
    if (drawOddsError) {
      return (
        <Box>
          <Typography variant="h2" component="h4" align="center" sx={{ color: "#d35400", mt: 4 }}>
            Error loading data, please try again
          </Typography>
        </Box>
      )
    } else if (drawOddsLoading) {
      return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "800px" }}>
          <Skeleton width={800} height={200} />
          <Skeleton width={800} height={200} />
          <Skeleton width={800} height={200} />
        </Box>
      )
    } else if (!drawOddsData) {
      return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", height: "800px", marginTop: "1em" }}>
          <Typography variant="h5" component="h5">
            There doesn't appear to be anything here
          </Typography>
          <Typography variant="h5" component="h5">
            Please try another search
          </Typography>
        </Box>
      )
    }

    return (
      <TableContainer sx={{ width: "100%" }}>
        <Typography variant="h5" component="h5" sx={{ marginLeft: ".5em", marginTop: "1em" }}>Draw Odds</Typography>
        <Table sx={{ maxWidth: 650 }} aria-label="draw-odds-table">
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
    <Box sx={{ width: "100%", marginTop: "1em", borderTop: "1px solid #dfdfdf" }}>
      {displayDrawTable()}
    </Box>
  )
}