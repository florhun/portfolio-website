// src/pages/About.jsx
import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

const About = () => {
    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            <Box>
                <Typography variant="body1" paragraph>
                    I’m <strong>Orhun Yeğenağa</strong>, a passionate and versatile multidisciplinary designer specializing in <strong>Digital Game Design</strong>. With hands-on experience in the production of hyper-casual, hybrid casual, and blockchain games, I bring a unique blend of technical proficiency, design sensibility, and team leadership to the game development process.
                </Typography>
                <Typography variant="body1" paragraph>
                    My career includes roles at <strong>Teek Games</strong> and <strong>MakeMake</strong>, where I led cross-functional teams and managed end-to-end production cycles for various mobile game projects. I was responsible for defining feature roadmaps, aligning design and development pipelines, maintaining publisher communication, and optimizing outcomes through agile methodologies. One of my proudest achievements was the successful launch of <em>Mega Harvester</em>, a hybrid-casual simulation game which I helped develop from concept to release.
                </Typography>
                <Typography variant="body1" paragraph>
                    Previously, I also worked as a Unity Developer and Game Designer at VRLab Academy and Root Games Co., focusing on prototyping, user experience, and interactive systems. I am proficient in Unity3D and experienced with project management tools like ClickUp and Asana for sprint planning, roadmap creation, and team coordination. I’m also skilled in tools such as Adobe Photoshop and Premiere Pro.
                </Typography>
                <Typography variant="body1" paragraph>
                    I hold a <strong>Bachelor’s degree in Digital Game Design</strong> from Istanbul Bilgi University, where I built a strong foundation in game systems, storytelling, and production workflows. My academic and professional journey reflects a constant pursuit of meaningful, player-focused experiences.
                </Typography>
                <Typography variant="body1" paragraph>
                    Outside of game development, I’ve contributed to cultural and social initiatives. I’ve worked as a freelance production staff member for events organized by İKSV (Istanbul Foundation for Culture and Arts)—including the Istanbul Film, Theatre, and Music Festivals—and volunteered with the Istanbul LGBTİ+ Pride Week committee to support community-based and human rights projects.
                </Typography>
                <Typography variant="body1" paragraph>
                    I am a native Turkish speaker and fluent in English, with strong written and verbal communication skills. I’m open to new opportunities where I can continue to grow as a <strong>Game Designer / Game Producer</strong>, collaborate with dynamic teams, and help shape engaging digital experiences.
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