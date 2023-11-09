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

export const MultiUnitTable = () => {
    // logic that goes through the table data and generates the table head
    // how many 1st choice points do we need?

    // will need a table for otc display
    // will need a table for preference point display
    // switch case for otc vs preference point (vs future random vs other...)?

    /* PREFERENCE POINT TABLE
        unitcode    units   first choice    second choice third choice    hunters success   population stats
        will need to create dynamic columns that fill in for first choice draw stats
            * iterate through all units in draw stats table
            * get max length of first choice array
            * generate columns based on max length
            * generate empty columns for first choice items that are shorter than the max length array
            * can i also make the columns collapsible?
            * also make the columns scrollable from left to right
            * and make columns sortable
    */

    /* OTC TABLE
        unit    hunter success  population stats
        a much simpler table
    */

    /* DATA COLLECTION
        will need to get all hunt codes and units and seasons


        1. Draw stats
            Crawl 2022 draw stats pdf
        2. Population Stats
        3. Harvest Stats
        4. Unit Stats
            Crawl through pdf, strip out all hunt codes and units
    */

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
        return (
            <TableHead>
                <TableRow>
                    <TableCell>Draw Code</TableCell>
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