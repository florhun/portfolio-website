import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const MachinationsEmbed = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" gutterBottom>
        Machinations Simulation
      </Typography>
      <Paper elevation={3} sx={{ height: '80vh', overflow: 'hidden' }}>
        <iframe
          src="https://my.machinations.io/d/publicver-plantoid---mvp/49c83b8225fe11f0abac028ecffc1261"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            backgroundColor: 'transparent',
          }}
          title="Machinations Diagram"
          allowFullScreen
        />
      </Paper>
    </Box>
  );
};

export default MachinationsEmbed;