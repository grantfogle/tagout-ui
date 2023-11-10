import * as React from 'react';
import { 
    Container,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    Paper,
} from '@mui/material';
import { PrefPtTable } from './prefPtTable/PrefPtTable';

export const MultiUnitTable = () => {
    // logic that goes through the table data and generates the table head
    // how many 1st choice points do we need?

    // will need a table for otc display
    // will need a table for preference point display
    // switch case for otc vs preference point (vs future random vs other...)?

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
 
    return (
        <Container>
            <Paper sx={{ width: '100%', marginTop: '2em' }}>
                <PrefPtTable/>
            </Paper>
        </Container>
    )
}