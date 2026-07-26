// src/components/PortfolioItem.jsx
import React from "react";
import { Box, Typography, Chip } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const CATEGORY_LABELS = {
    mobile_games: "Mobile",
    pc_games: "PC",
    physical_games: "Physical",
};

const PortfolioItem = ({ project, id }) => {
    const primaryCategory = project.category?.[0];

    return (
        <Box
            component={RouterLink}
            to={`/projects/${id}`}
            sx={{
                display: "block",
                width: "100%",
                textDecoration: "none",
                color: "inherit",
                border: "1px solid rgba(0,0,0,0.1)",
                borderRadius: "12px",
                overflow: "hidden",
                bgcolor: "background.paper",
                transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
                "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: "rgba(0,0,0,0.25)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                },
            }}
        >
            <Box sx={{ aspectRatio: "4 / 3", overflow: "hidden" }}>
                <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                    }}
                />
            </Box>
            <Box sx={{ p: 1.5 }}>
                <Typography
                    sx={{
                        fontFamily: "Noto Sans",
                        fontWeight: 600,
                        fontSize: "1.05rem",
                        mb: 0.5,
                    }}
                >
                    {project.title}
                </Typography>
                {primaryCategory && (
                    <Chip
                        label={CATEGORY_LABELS[primaryCategory] || primaryCategory}
                        size="small"
                        sx={{
                            fontFamily: "Noto Sans",
                            fontSize: "0.75rem",
                            bgcolor: "rgba(0,0,0,0.06)",
                        }}
                    />
                )}
            </Box>
        </Box>
    );
};

export default PortfolioItem;
