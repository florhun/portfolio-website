// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ColorModeProvider } from "./context/ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ColorModeProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ColorModeProvider>
);
