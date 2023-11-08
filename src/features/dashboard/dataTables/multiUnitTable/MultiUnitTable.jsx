import * as React from 'react';
import { 
    Box,
    Container,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Table,
    TableContainer,
    TableHead,
    TableRow,
    TableCell,
    Paper,
    TextField,
    Typography,
    Toolbar, 
    AppBar} from '@mui/material'

export const MultiUnitTable = () => {
    return (
        <Container>
            <Typography variant='h1'>MultiUnitTable</Typography>
                <Paper sx={{ width: '100%', marginTop: '2em' }}>
                    <TableContainer>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Hunt Code</TableCell>
                                    <TableCell>Units</TableCell>
                                    <TableCell>Draw Stats</TableCell>
                                    {/* Dynamic <TableCell>1st Choice</TableCell> */}
                                    {/* <TableCell>2nd Choice</TableCell>
                                    <TableCell>3rd Choice</TableCell> */}
                                    <TableCell>Harvest Stats</TableCell>
                                    {/* total killed (either, male, female), total hunters */}
                                    <TableCell>Population Stats</TableCell>
                                    {/* Male::Female Ratio */}
                                    {/* Male::Female Ratio */}
                                </TableRow>
                            </TableHead>
                        </Table>
                    </TableContainer>
        </Paper>
        </Container>
    )
}