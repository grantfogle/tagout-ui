import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#27ae60',
        },
        text: {
            primary: '#2c3e50'
        },
    },
    typography: {},
    components: {
        MuiTypography: {
            styleOverrides: {
                h5: {
                    color: '#2c3e50'
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundColor:'#27ae60',
                    color: '#fff'
                },
            }
        }
    }
})