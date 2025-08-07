import React from 'react';
import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Typography,
 } from '@mui/material';

const Dropdown = ({
    label = '',
    options = [],
    selectedValue = '',
    placeholder = ''
}) => {

    return (
        <Box p={2} fullWidth>
            {/* <Typography variant="h6">{label}</Typography> */}
            {/* <Typography>{selectedValue || placeholder}</Typography> */}
            <FormControl fullWidth>
                <InputLabel>{label}</InputLabel> 
                <Select label={'Colorado'}>
                    <MenuItem value="" disabled>Select a state</MenuItem>
                    {options.forEach(option => {
                        console.log(option)
                        return <MenuItem key={option} value={option}>{option}</MenuItem>
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}

export default Dropdown;



// const Dropdown = ({
//     label,
//     options = [],
//     selectedValue = '',
//     placeholder = '',
//     onChange, // expect parent to pass this
//   }) => {
//     const labelId = `${label.replace(/\s+/g, '-').toLowerCase()}-label`;
  
//     return (
//       <Box p={2} sx={{ width: '100%' }}>
//         <Typography variant="h6">{label}</Typography>
//         <Typography>{selectedValue || placeholder}</Typography>
  
//         <FormControl fullWidth>
//           <InputLabel id={labelId}>{label}</InputLabel>
//           <Select
//             labelId={labelId}
//             label={label}
//             value={selectedValue}
//             onChange={onChange}
//             displayEmpty
//             renderValue={(val) => (val ? val : placeholder)}
//           >
//             {/* Optional placeholder item */}
//             <MenuItem value="" disabled>
//               {placeholder || `Select ${label}`}
//             </MenuItem>
  
//             {options.map((option) => (
//               <MenuItem key={option} value={option}>
//                 {option}
//               </MenuItem>
//             ))}
//           </Select>
//         </FormControl>
//       </Box>
//     );
//   };