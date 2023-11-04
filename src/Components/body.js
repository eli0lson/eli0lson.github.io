import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import { Button, ThemeProvider, Grid } from '@mui/material';
import { Box } from '@mui/system';

import theme from './themes';

// import './body.css'

const Body = () => {

    const [gone, setGone] = useState(false);

    const className = () => {
        if (gone) {
            return ' gone';
        } else {
            return '';
        }
    }

    return (
    <div className='body'>
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: '90vh', backgroundColor: "#faeffc" }}
            >
            <ThemeProvider theme={theme}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                        variant="outlined"
                        href="#"
                        onClick={() => setGone(!gone)}
                        sx={{
                            opacity: gone ? 0 : 1,
                            transition: "opacity 0.5s ease-in, background-color 0.2s ease-in",
                            }}>
                        if u click me i'll disappear :/
                    </Button>
                </Box>
            </ThemeProvider>
        </Grid>
    </div>
    )
}

export default Body;