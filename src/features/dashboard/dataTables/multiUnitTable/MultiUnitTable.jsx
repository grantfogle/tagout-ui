import * as React from 'react';
import { 
    Container,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    Paper,
} from '@mui/material'
import { arrayRemove } from 'firebase/firestore';

export const MultiUnitTable = () => {
    // need to figure out how to create dynamic columns
    // population stats
    // loop through draw stats and get max length
    // generate table head
    // can i get column index
    // 
    const mockUnits = [
        { 
            state: 'CO',
            code: 'EE001O1R', 
            unit: '001', 
            season: '01', 
            resident: 'resident',
            sex: 'either',
            method: 'rifle',
            drawStats: [
                { firstChoice: [
                    { points: 5, applicants: 8, success: 8, successRatio: 1 },
                    { points: 4, applicants: 8, success: 8, successRatio: 1 },
                    { points: 3, applicants: 8, success: 8, successRatio: 1 },
                    { points: 2, applicants: 8, success: 8, successRatio: 1 },
                    { points: 1, applicants: 10, success: 10, successRatio: 1 },
                    { points: 0, applicants: 100, success: 20, successRatio: .2 }
                ] },
                { secondChoice: [{applicants: 10, success: 10, successRatio: 1}] },
                { thirdChoice: [{applicants: 10, success: 10, successRatio: 1}] },
            ],
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
    ]

    const generateDrawStatsTableHead = () => {
        // get first choice stats
        const mockFirstChoiceLength = mockUnits[0].drawStats[0].firstChoice.length;
        const mockFirstChoiceOptions = mockUnits[0].drawStats[0].firstChoice.map((point, index) => {
            return (
                <TableCell key={index}>{point.points} {point.points !== 1 ? 'pts' : 'pt'}</TableCell>
            )
        })
        // will through through first choice array
        // second choice
        // third choice
        // we will show percentages, hover will show success/applicants
        return (
            <>
                {mockFirstChoiceOptions}
                <TableCell>2nd</TableCell>
                <TableCell>3rd</TableCell>
            </>
        )

    }

    const generateTableHead = () => {
        // mock table data is where?
        return (
            <TableHead>
                <TableRow>
                    <TableCell>Unit</TableCell>
                    {generateDrawStatsTableHead()}
                    <TableCell>M/F</TableCell>
                    <TableCell>Hunters</TableCell>
                    <TableCell>Success</TableCell>
                </TableRow>
            </TableHead>
        );
    }
 
    return (
        <Container>
            <Paper sx={{ width: '100%', marginTop: '2em' }}>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        {generateTableHead()}
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    )
}