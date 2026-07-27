// src/components/Navbar.jsx
import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { FaLinkedin, FaGithub, FaBars, FaSun, FaMoon } from "react-icons/fa";
import { useColorMode } from "../context/ThemeContext";

const Navbar = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const { mode, toggleColorMode } = useColorMode();

    const [drawerOpen, setDrawerOpen] = useState(false);
    const handleDrawerToggle = () => {
        setDrawerOpen((prev) => !prev);
    };

    // Outline matches the page background so text stays legible in both modes
    const outlineColor = theme.palette.background.default;
    const textOutline = `-1px -1px 0 ${outlineColor}, 1px -1px 0 ${outlineColor}, -1px 1px 0 ${outlineColor}, 1px 1px 0 ${outlineColor}`;

    const iconOutline = {
        filter: `drop-shadow(1px 1px 1px ${outlineColor}) drop-shadow(-1px -1px 1px ${outlineColor}) drop-shadow(-1px 1px 1px ${outlineColor}) drop-shadow(1px -1px 1px ${outlineColor})`,
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", pt: 0 }}>
            <Typography variant="h1" sx={{ my: 0, fontWeight: "bold" }}>

            </Typography>
            <List>
                {[
                    { label: "Portfolio", path: "/" },
                    { label: "About", path: "/about" },
                    { label: "Experience", path: "/experience" },
                ].map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            component={RouterLink}
                            to={item.path}
                            sx={{ textAlign: "left" }}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="fixed"
                color="transparent"
                elevation={0}
                sx={{
                    backdropFilter: "blur(3px)",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
            >
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    {isMobile ? (
                        <>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2 }}
                            >
                                <FaBars size="1.8rem" style={iconOutline} />
                            </IconButton>
                            <Typography
                                component={RouterLink}
                                to="/"
                                sx={{
                                    flexGrow: 1,
                                    textDecoration: "none",
                                    color: "inherit",
                                    fontWeight: "bold",
                                    fontSize: {sm: "1rem", md:"1.8rem" },
                                    textShadow: textOutline,
                                }}
                            >
                                Orhun Yeğenağa
                            </Typography>
                        </>
                    ) : (
                        <Box sx={{ display: "flex", alignItems: "bottom", gap: 2 }}>
                            <Typography
                            variant="h5"
                                component={RouterLink}
                                to="/"
                                sx={{
                                    textDecoration: "none",
                                    color: "text.primary",
                                    fontWeight: "600",
                                    fontVariationSettings: '"wdth" 80',
                                    fontSize: "2rem",
                                    textShadow: textOutline,
                                }}
                            >
                                Orhun Yeğenağa
                            </Typography>
                            <Button
                                component={RouterLink}
                                to="/"
                                color="inherit"
                                sx={{
                                    textTransform: "none",
                                    fontSize: "1.4rem",
                                    textShadow: textOutline,
                                }}
                            >
                                Portfolio
                            </Button>
                            <Button
                                component={RouterLink}
                                to="/about"
                                color="inherit"
                                sx={{
                                    textTransform: "none",
                                    fontSize: "1.4rem",
                                    textShadow: textOutline,
                                }}
                            >
                                About
                            </Button>
                            <Button
                                component={RouterLink}
                                to="/experience"
                                color="inherit"
                                sx={{
                                    textTransform: "none",
                                    fontSize: "1.4rem",
                                    textShadow: textOutline,
                                }}
                            >
                                Experience
                            </Button>
                        </Box>
                    )}

                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                        <IconButton
                            onClick={toggleColorMode}
                            color="inherit"
                            aria-label={mode === "light" ? "switch to dark mode" : "switch to light mode"}
                        >
                            {mode === "light" ? (
                                <FaMoon size="1.4rem" style={iconOutline} />
                            ) : (
                                <FaSun size="1.4rem" style={iconOutline} />
                            )}
                        </IconButton>
                        <IconButton
                            component="a"
                            href="https://github.com/florhun"
                            color="inherit"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaGithub size="2rem" style={iconOutline} />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="https://www.linkedin.com/in/orhunygng/"
                            color="inherit"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedin size="2rem" style={iconOutline} />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </>
    );
};

export default Navbar;
