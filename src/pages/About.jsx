// src/pages/About.jsx
import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const About = () => {
    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            <Box>
                <Typography variant="h4" component="h1" gutterBottom>
                    Hi, I’m Orhun Yeğenağa.
                </Typography>
                <Typography variant="h6" color="text.secondary" paragraph>
                    <strong>Product Manager & Game Designer</strong>
                </Typography>

                <Typography variant="body1" paragraph>
                    I am a multidisciplinary game developer with over five years of experience shaping engaging mobile titles. I specialize in bridging the gap between creative design and data-driven production, transforming raw concepts into scalable, player-focused experiences.
                </Typography>

                <Typography variant="body1" paragraph>
                    My expertise spans the mobile gaming spectrum—from hybrid-casual and puzzle to FPS and blockchain games. As a Product and Project Manager, I have led cross-functional teams at studios like Teek Games and MakeMake. I manage end-to-end production cycles, align design with development pipelines, and optimize products through agile methodologies to ensure we hit our milestones and publisher goals.
                </Typography>

                <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
                    What I Do Best
                </Typography>
                <Typography variant="body1" component="div">
                    <ul>
                        <li><strong>Production & Strategy:</strong> Defining feature roadmaps, maintaining clear publisher communication, and coordinating agile sprints using tools like ClickUp and Asana.</li>
                        <li><strong>Monetization & UX Optimization:</strong> Analyzing user journeys to reduce early-session friction and structuring sustainable monetization models. I actively benchmark market trends and UI updates using platforms like Sensor Tower to keep core loops competitive.</li>
                        <li><strong>Game Design & Prototyping:</strong> Crafting compelling mechanics and interactive systems. I built my technical foundation as a Unity Developer, supported by a Bachelor’s degree in Digital Game Design from Istanbul Bilgi University.</li>
                    </ul>
                </Typography>

                <Typography variant="h5" component="h2" gutterBottom sx={{ mt: 3 }}>
                    Beyond the Screen
                </Typography>

                <Typography variant="body1" paragraph>
                    My drive for creating meaningful experiences extends beyond game development. I have contributed to cultural initiatives as freelance production staff for <strong>İKSV</strong> (Istanbul Foundation for Culture and Arts) across their film, theatre, and music festivals. I also proudly volunteered with the <strong>Istanbul LGBTİ+ Pride Week</strong> committee between 2016-2019 to support community-based human rights projects.
                </Typography>

                <Typography variant="body1" paragraph>
                    I am always open to new opportunities to collaborate with dynamic teams and shape the next generation of digital experiences. <strong>Let’s build something great together.</strong>
                </Typography>

                <Box sx={{ mt: 3 }}>
                    <Typography variant="body1">
                        Contact:{' '}
                        <Link href="mailto:orhunyegenaga@gmail.com" underline="hover">
                            orhunyegenaga@gmail.com
                        </Link>
                    </Typography>
                </Box>
            </Box>
        </Container>
    );
};

export default About;