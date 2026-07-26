// src/components/CategoryFilter.jsx
import React from "react";
import { Box, Chip } from "@mui/material";

const CATEGORY_LABELS = {
    all: "All work",
    mobile_games: "Mobile games",
    pc_games: "PC games",
    physical_games: "Physical",
};

const CategoryFilter = ({ categories, active, onChange }) => {
    const options = ["all", ...categories];

    return (
        <Box
            sx={{
                display: "flex",
                gap: 1,
                flexWrap: "wrap",
                mb: 3,
            }}
        >
            {options.map((cat) => {
                const isActive = active === cat;
                return (
                    <Chip
                        key={cat}
                        label={CATEGORY_LABELS[cat] || cat}
                        onClick={() => onChange(cat)}
                        sx={{
                            fontFamily: "Noto Sans",
                            fontWeight: isActive ? 600 : 400,
                            bgcolor: isActive ? "black" : "transparent",
                            color: isActive ? "white" : "text.secondary",
                            border: "1px solid",
                            borderColor: isActive ? "black" : "rgba(0,0,0,0.2)",
                            transition: "background-color 0.15s ease, color 0.15s ease",
                            "&:hover": {
                                bgcolor: isActive ? "black" : "rgba(0,0,0,0.05)",
                            },
                        }}
                    />
                );
            })}
        </Box>
    );
};

export default CategoryFilter;
