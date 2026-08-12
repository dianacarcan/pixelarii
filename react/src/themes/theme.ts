import {createTheme} from '@mui/material/styles'
import '@fontsource/playfair-display/400.css'
import '@fontsource/inter/700.css'
import '@fontsource/inter/400.css'
import '@fontsource/playfair-display/700.css'

const theme = createTheme({
    palette: {
        primary: {
            main: "#1B1B4B",
            contrastText: "#F7F4EA", 
        },
        background: {
            default: "#F7F4EA",
            paper: "white",
        },
    },
    typography: {
        fontFamily: '"Inter", sans-serif',

        h1: {
            fontFamily: '"Playfair Display", serif',
        },
        h2: {
            fontFamily: '"Playfair Display", serif',
        },
        h3: {
            fontFamily: '"Playfair Display", serif',
        },
        h4: {
            fontFamily: '"Playfair Display", serif',
        },
        h5: {
            fontFamily: '"Playfair Display", serif',
        },
        h6: {
            fontFamily: '"Playfair Display", serif',
        },
    },
})

export default theme