// src/pages/Portfolio.jsx
import React, { useMemo, useState } from 'react';
import { Container, Grid } from '@mui/material';
import PortfolioItem from '../components/PortfolioItem';
import CategoryFilter from '../components/CategoryFilter';
import { contentData } from '../data/contentData';

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = useMemo(() => {
        const set = new Set();
        contentData.forEach((project) => project.category?.forEach((c) => set.add(c)));
        return Array.from(set);
    }, []);

    const filteredProjects = useMemo(() => {
        return contentData
            .map((project, index) => ({ project, index }))
            .filter(
                ({ project }) =>
                    activeCategory === 'all' || project.category?.includes(activeCategory)
            );
    }, [activeCategory]);

    return (
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <CategoryFilter
                categories={categories}
                active={activeCategory}
                onChange={setActiveCategory}
            />
            <Grid container spacing={2} justifyContent="center">
                {filteredProjects.map(({ project, index }) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <PortfolioItem project={project} id={index} />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Portfolio;
