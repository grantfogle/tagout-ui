import React from 'react';
import {
    Table,
    TableContainer,
    TableBody,
    TableHead,
    TableRow,
    TableCell
} from '@mui/material';

const mockUnits = [
    { 
        state: 'CO',
        code: 'EE001O1R', 
        unit: ['1'], 
        season: '01', 
        resident: 'resident',
        sex: 'either',
        method: 'rifle',
        drawStats: {
            firstChoice: [
                { points: 5, applicants: 8, success: 8, successRatio: 1 },
                { points: 4, applicants: 8, success: 8, successRatio: 1 },
                { points: 3, applicants: 8, success: 8, successRatio: 1 },
                { points: 2, applicants: 8, success: 8, successRatio: 1 },
                { points: 1, applicants: 10, success: 10, successRatio: 1 },
                { points: 0, applicants: 100, success: 20, successRatio: .2 }
            ],
            secondChoice: {applicants: 10, success: 10, successRatio: 1},
            thirdChoice: {applicants: 10, success: 10, successRatio: 1},
        },
        harvestStats: {
            malesKilled: 5,
            femalesKilled: 10,
            totalKilled: 15,
            hunters: 100,
            successRatio: .15
        },
        populationStats: {
            males: 100,
            females: 10000,
            maleFemaleRatio: .1
        }
     },
     { 
        state: 'CO',
        code: 'EE002O1R', 
        unit: ['2', '201'], 
        season: '01', 
        resident: 'resident',
        sex: 'either',
        method: 'rifle',
        drawStats: {
            firstChoice: [
                { points: 4, applicants: 8, success: 8, successRatio: 1 },
                { points: 3, applicants: 8, success: 8, successRatio: 1 },
                { points: 2, applicants: 8, success: 8, successRatio: 1 },
                { points: 1, applicants: 10, success: 10, successRatio: 1 },
                { points: 0, applicants: 100, success: 20, successRatio: .2 }
            ],
            secondChoice: {applicants: 10, success: 10, successRatio: 1},
            thirdChoice: {applicants: 10, success: 10, successRatio: 1}
        },
        harvestStats: {
            malesKilled: 5,
            femalesKilled: 10,
            totalKilled: 15,
            hunters: 100,
            successRatio: .15
        },
        populationStats: {
            males: 100,
            females: 10000,
            maleFemaleRatio: .1
        }
     },
];

export const PrefPtTable = () => {
    /* PREFERENCE POINT TABLE
        units   unitcode  first choice    second choice     third choice    hunters success   population stats
        will need to create dynamic columns that fill in for first choice draw stats
            * iterate through all units in draw stats table
            * get max length of first choice array
            * generate columns based on max length
            * generate empty columns for first choice items that are shorter than the max length array
            * can i also make the columns collapsible?
            * also make the columns scrollable from left to right
            * and make columns sortable
    */

    const generateDrawStatsTableHead = () => {
        let maxFirstChoiceLength = 0;
        
        mockUnits.map(unit => {
            if (unit.drawStats.firstChoice.length > maxFirstChoiceLength) {
                maxFirstChoiceLength = unit.drawStats.firstChoice.length;
            }
        });
        const firstChoiceDrawStatsHeaders = [];

        for (let i = 0; i < maxFirstChoiceLength; i++) {
            const headerPoint = maxFirstChoiceLength - i - 1;
            firstChoiceDrawStatsHeaders.push(
                <TableCell key={`${headerPoint}-pt-head`}>{headerPoint} {headerPoint !== 1 ? 'pts' : 'pt'}</TableCell>
            );
        }

        return (
            <>
                {firstChoiceDrawStatsHeaders}
                <TableCell>2nd</TableCell>
                <TableCell>3rd</TableCell>
            </>
        )

    }

    const generateTableHead = () => {
        return (
            <TableHead>
                <TableRow sx={{backgroundColor: '#34495e'}}>
                    <TableCell>Unit</TableCell>
                    <TableCell>Draw Code</TableCell>
                    {generateDrawStatsTableHead()}
                    <TableCell>M/F</TableCell>
                    <TableCell>Hunters</TableCell>
                    <TableCell>Success</TableCell>
                </TableRow>
            </TableHead>
        );
    }

    const getSuccessStats = (gender, successStats) => {
        const hunters = successStats.hunters;
        const males = successStats.malesKilled;
        const females = successStats.femalesKilled;

        switch(gender) {
            case 'either':
                return `${(males + females / hunters * 100)}%`;
            case 'male':
                return `${(males / hunters * 100)}%`;
            case 'female':
                return `${(females / hunters * 100)}%`;
            default:
                return 'N/A';
        }
    }

    const generateTableRows = () => {
        let maxFirstChoiceLength = 0;
        const getMaxLength = mockUnits.map(unit => {
            if (unit.drawStats.firstChoice.length > maxFirstChoiceLength) {
                maxFirstChoiceLength = unit.drawStats.firstChoice.length;
            }
        });

        return (
            <TableBody>
                {
                    mockUnits.map(unit => {
                        const firstChoiceArr = [];
                        const unitFirstChoiceLen = unit.drawStats.firstChoice.length;
                        let columnIndex = unitFirstChoiceLen - maxFirstChoiceLength;

                        for (let i = 0; i < maxFirstChoiceLength; i++) {
                            if (unit.drawStats.firstChoice[columnIndex]) {
                                firstChoiceArr.push(
                                    <TableCell key={`${unit.code}-${maxFirstChoiceLength - i}-pt`}>{`${unit.drawStats.firstChoice[columnIndex].successRatio * 100}%`}</TableCell>
                                )
                            } else {
                                firstChoiceArr.push(
                                    <TableCell key={`${unit.code}-${maxFirstChoiceLength - i}-pt`}></TableCell>
                                )
                            }
                            columnIndex++;
                        }

                        return (
                            <TableRow key={`${unit.code}-row`}>
                                <TableCell key={`${unit.code}-units`}>{unit.unit.join(', ')}</TableCell>
                                <TableCell key={`${unit.code}-${unit.code}-code`}>{unit.code}</TableCell>
                                {firstChoiceArr}
                                <TableCell key={`${unit.code}-second-choice`}>{`${unit.drawStats.secondChoice.successRatio * 100}%`}</TableCell>
                                <TableCell key={`${unit.code}-third-choice`}>{`${unit.drawStats.thirdChoice.successRatio * 100}%`}</TableCell>
                                <TableCell key={`${unit.code}-mf-ratio`}>{`${unit.populationStats.maleFemaleRatio * 100}%`}</TableCell>
                                <TableCell key={`${unit.code}-hunters`}>{unit.harvestStats.hunters}</TableCell>
                                <TableCell key={`${unit.code}-success`}>{getSuccessStats(unit.sex, unit.harvestStats)}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        );
    }

    return (
        <TableContainer>
            <Table stickyHeader aria-label="sticky table">
                {generateTableHead()}
                {generateTableRows()}
            </Table>
        </TableContainer>
    );
}