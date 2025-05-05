// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "'Atkinson Hyperlegible Mono, Doto, Montserrat', sans-serif",
        h5: {
            fontFamily: 'Atkinson Hyperlegible Mono',
        },
        h1: {
            fontFamily: 'Doto',
        }
    },
    palette: {
        primary: {
            main: "#1976d2",  // Customize as desired
        },
        secondary: {
            main: "#dc004e",
        },
    },
});
export default theme;