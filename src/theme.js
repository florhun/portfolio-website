// src/theme.js
import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
    createTheme({
        palette: {
            mode,
            primary: {
                main: "#1976d2",
            },
            secondary: {
                main: "#dc004e",
            },
            background: {
                default: mode === "light" ? "#ffffff" : "#121212",
                paper: mode === "light" ? "#ffffff" : "#1a1a1a",
            },
        },
        typography: {
            fontFamily: "Atkinson Hyperlegible Mono, Doto, Noto Sans, Montserrat, sans-serif",
            h5: {
                fontFamily: "Noto Sans",
            },
            h1: {
                fontFamily: "Doto",
            },
            body1: {
                fontFamily: "Noto Sans",
            },
        },
    });

export default getTheme;
