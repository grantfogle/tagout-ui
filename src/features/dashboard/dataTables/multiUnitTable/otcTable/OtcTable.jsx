import React from 'react';
import {
    Table,
    TableContainer,
    TableBody,
    TableHead,
    TableRow,
    TableCell
} from '@mui/material';


export const OtcTable = () => {

    const mockOtcUnits = [
        { 
            state: 'CO',
            code: 'EE001O1AOTC',
            type: 'OTC',
            unit: ['1'], 
            season: '01', 
            resident: 'resident',
            sex: 'either',
            method: 'archery',
            harvestStats: {
                males: 5,
                females: 10,
                total: 15,
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
            code: 'EE002O1AOTC', 
            type: 'OTC',
            unit: ['2'], 
            season: '01', 
            resident: 'resident',
            sex: 'either',
            method: 'archery',
            harvestStats: {
                males: 5,
                females: 10,
                total: 15,
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

    const generateOtcRows = () => {
        return mockOtcUnits.map((unit, index) => {
            return (
                <TableRow key={index}>
                    <TableCell key={`${unit.unit}-otc`}>{unit.unit}</TableCell>
                    <TableCell key={`${unit.unit}-draw-type`}>OTC</TableCell>
                    <TableCell key={`${unit.unit}-mf-ratio`}>{`${unit.populationStats.maleFemaleRatio * 100}%`}</TableCell>
                    <TableCell key={`${unit.code}-success-ratio`}>{`${unit.harvestStats.successRatio * 100}%`}</TableCell>
                    <TableCell key={`${unit.unit}-total-harvest`}>{unit.harvestStats.total}</TableCell>
                    <TableCell key={`${unit.unit}-hunters`}>{unit.harvestStats.hunters}</TableCell>
                </TableRow>
            )
        })
    }

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Unit</TableCell>
                        <TableCell>Draw Type</TableCell>
                        <TableCell>Males/Female Ratio</TableCell>
                        <TableCell>Success Ratio</TableCell>
                        <TableCell>Total Harvested</TableCell>
                        <TableCell>Hunters</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {generateOtcRows()}
                </TableBody>
            </Table>
        </TableContainer>
    );
}