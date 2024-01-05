import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1303,
            xl: 1920,
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                root: {
                    maxWidth: '1303px',
                },
            },
        },
    },
    typography: {
        fontFamily: ['Poppins', 'Nunito', 'Inter', 'sans-serif'],
        color: '#000',
        fontStyle: 'normal',
        fontWeight: 400,
    },
    palette: {
        primary: {
            main: '#FFBA07',
            buttonText: '#763D16',
            light: 'rgba(0, 0, 0, 0.50)',
        },
        secondary: {
            main: '#D00000',
            dark: '#6D070F',
            darker: '#370717',
        },
    },
})
