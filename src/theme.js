// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "Atkinson Hyperlegible Mono, Doto, Noto Sans, Montserrat, sans-serif",
        h5: {
            fontFamily: 'Noto Sans',
        },
        h1: {
            fontFamily: 'Doto',
        },
        body1: {
            fontFamily: "Noto Sans",
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