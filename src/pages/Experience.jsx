// src/pages/Experience.jsx
import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

const Experience = () => {
    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            {/* Teek Games */}
            <Box sx={{ mt: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Product Manager at Teek Games (2024 - Present)
                </Typography>
                <Typography variant="body1" paragraph>
                    At Teek Games, I work as a Product Manager for hypercasual mobile game titles. I drive the product roadmap, facilitate team alignment, and contribute to feature design. I also help creating market content for products such as creatives, visuals and sounds.
                </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* MakeMake */}
            <Box sx={{ mt: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Product Manager / Game Producer at MakeMake (2022 - 2024)
                </Typography>
                <Typography variant="body1" paragraph>
                    I led feature development and project timelines for casual and hyper-casual mobile games. I managed internal and external teams of designers and developers, coordinated sprints, and optimized production pipelines using Agile methodologies and tools like Jira and ClickUp. I also contributed to game and level design efforts, leveraging player data to shape iterative improvements.
                </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* VRLab Academy */}
            <Box sx={{ mt: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Junior Unity Developer at VRLab Academy (2021)
                </Typography>
                <Typography variant="body1" paragraph>
                    At VRLab Academy, I supported the development of interactive educational simulations in Unity. I worked on scripting core interactions, UI development, and basic user data integrations.
                </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Root Games Co. */}
            <Box sx={{ mt: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Game Design Intern at Root Games Co. (2020)
                </Typography>
                <Typography variant="body1" paragraph>
                    During my internship at Root Games Co., I contributed to game design documentation, helped prototype mechanics in Unity, and collaborated with designers to refine gameplay loops. I gained hands-on experience with the design pipeline in a professional game development environment.
                </Typography>
            </Box>

            <Divider sx={{ my: 2 }} />

            {/* Apollo Digital & Architecture */}
            <Box sx={{ mt: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Design Intern at Apollo Digital & Architecture (2019)
                </Typography>
                <Typography variant="body1" paragraph>
                    I had the chance to gain experience in post-process effects using Unreal Engine during the Bristol Hotel VR experience project.
                </Typography>
            </Box>

            <Divider sx={{ my: 3 }} />

            {/* Education */}
            <Box sx={{ mt: 3 }}>
                <Typography variant="h5" gutterBottom>
                    Education
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Bachelor’s Degree in Digital Game Design</strong> – Istanbul Bilgi University (2015–2020)
                    Courses focused on game development, systems design, Unity, and C#. My education was complemented by hands-on team projects and internships, which built my foundation in game production and product thinking.
                </Typography>
            </Box>
        </Container>
    );
};

export default Experience;
