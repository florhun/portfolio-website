// src/pages/Experience.jsx
import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

const Experience = () => {
    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            {/* Teek Games */}
            <Box sx={{ mt: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Product Manager at Teek Games (2024 - Present)
                </Typography>
                <Typography variant="body1" paragraph>
                    At Teek Games, I work as a Product Manager for a casual mobile title. I drive the product roadmap, facilitate cross-functional team alignment, and contribute to live ops and feature design. I also help improve game economy systems and player engagement through market research, analytics, and hypothesis-driven iterations.
                </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* MakeMake */}
            <Box sx={{ mt: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Product Manager / Game Producer at MakeMake (2022 - 2024)
                </Typography>
                <Typography variant="body1" paragraph>
                    I led feature development and project timelines for casual and hyper-casual mobile games. I managed internal teams of designers and developers, coordinated sprints, and optimized production pipelines using Agile methodologies and tools like Jira and ClickUp. I also contributed to game and level design efforts, leveraging player data to shape iterative improvements.
                </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* VRLab Academy */}
            <Box sx={{ mt: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Junior Unity Developer at VRLab Academy (2021)
                </Typography>
                <Typography variant="body1" paragraph>
                    At VRLab Academy, I supported the development of interactive educational simulations in Unity. I worked on scripting core interactions, UI development, and basic VR integrations. I also assisted with optimizing app performance and integrating Unity assets into VR pipelines.
                </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Root Games Co. */}
            <Box sx={{ mt: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Game Design Intern at Root Games Co. (2020)
                </Typography>
                <Typography variant="body1" paragraph>
                    During my internship at Root Games Co., I contributed to game design documentation, helped prototype mechanics in Unity, and collaborated with designers to refine gameplay loops. I gained hands-on experience with the design pipeline in a professional game development environment.
                </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Apollo Digital & Architecture */}
            <Box sx={{ mt: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Design Intern at Apollo Digital & Architecture (2019)
                </Typography>
                <Typography variant="body1" paragraph>
                    I supported architectural design processes with concept modeling and presentation materials. I applied digital tools like 3ds Max and Adobe Creative Suite to visualize spatial ideas and communicated design solutions effectively within the team.
                </Typography>
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Education */}
            <Box sx={{ mt: 3 }}>
                <Typography variant="h4" gutterBottom>
                    Education
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Bachelor’s Degree in Digital Game Design</strong> – Istanbul Bilgi University (2017–2022)
                    Courses focused on game development, systems design, Unity, and C#. My education was complemented by hands-on team projects and internships, which built my foundation in game production and product thinking.
                </Typography>
            </Box>
        </Container>
    );
};

export default Experience;
