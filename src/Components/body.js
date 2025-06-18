import React, { useState } from 'react';
import { Button, ThemeProvider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import theme from './themes';

import './body2.css';

const SPOTIFY_LINK = "https://open.spotify.com/artist/0kXiWZgWKpdl8lYsZKelUW?si=vXt8P_t4RkG3iBlcp6f6Sw";
const APPLE_MUSIC_LINK = "https://music.apple.com/us/artist/eli-olson/1509498872";

const Body = () => {

    const [expandCode, setExpandCode] = useState(false);
    const [expandMusic, setExpandMusic] = useState(false);

    const musicButtonStyles = {
        backgroundColor: "#cee8ff",
        borderColor: "#5f9cd2",
        ":hover": {
            backgroundColor: "#5f9cd2",
            color: "white",
            textDecoration: "underline"
        },
        transition: "opacity 0.5s ease-in, background-color 0.2s ease-in",
    }

    return (
        <div className='body'>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ 
                    minHeight: '90vh', 
                    backgroundColor: "#faeffc",
                 }}
            >
                <ThemeProvider theme={theme}>
                    <Box sx={{ display: "flex", flexDirection: "column", width: "78.2%"}}>
                        <Box 
                            className='body-box'
                            sx={{ 
                                display: "flex", 
                                flexDirection: "row", 
                                justifyContent: "center", 
                                alignItems: "center",
                                minWidth: "74rem",
                                marginLeft: "3.5rem",
                                flexWrap: "wrap"
                        }}>
                            <Typography>are you here to see</Typography>
                            <div class='links code'>
                                <div className='toggle'>
                                    <Button 
                                        className='toggle-button'
                                        variant="text"
                                        onClick={() => {
                                            setExpandCode(!expandCode)
                                        }}
                                        sx={{
                                            color: expandCode ? "#413c63" : "#426dd4",
                                            textDecoration: `${expandCode ? "underline" : "none"}`,
                                            ":hover": {
                                                background: "none",
                                                textDecoration: "underline"
                                            },
                                        }}>
                                        my code
                                    </Button>
                                </div>
                                <div className='code-links'>
                                    <Button
                                        className='link'
                                        variant="outlined"
                                        target="_blank"
                                        onClick={() => window.open("https://olsynth-six.vercel.app/", "_blank")}
                                        sx={{ ...musicButtonStyles, opacity: expandCode ? 1 : 0 }}>
                                        olsynth
                                    </Button>
                                    <Button
                                        className='link'
                                        variant="outlined"
                                        target="_blank"
                                        onClick={() => window.open("https://github.com/eli0lson", "_blank")}
                                        sx={{ ...musicButtonStyles, opacity: expandCode ? 1 : 0 }}>
                                        github
                                    </Button>
                                </div>
                            </div>
                            <Typography>or to listen to</Typography>
                            <div class='links'>
                                <div className='toggle'>
                                    <Button
                                        className='toggle-button'
                                        variant="text"
                                        onClick={() => {
                                            setExpandMusic(!expandMusic)
                                        }}
                                        sx={{
                                            color: expandMusic ? "#413c63" : "#426dd4",
                                            textDecoration: `${expandMusic ? "underline" : "none"}`,
                                            ":hover": {
                                                background: "none",
                                                textDecoration: "underline"
                                            }
                                        }}>
                                        my music
                                    </Button>
                                    <Typography className='question'>?</Typography>
                                </div>
                                <div className='music-links'>
                                    <Button
                                        className='link'
                                        variant="outlined"
                                        href={SPOTIFY_LINK}
                                        target="_blank"
                                        sx={{ ...musicButtonStyles, opacity: expandMusic ? 1 : 0 }}>
                                        spotify
                                    </Button>
                                    <Button
                                        className='link'
                                        variant="outlined"
                                        href={APPLE_MUSIC_LINK}
                                        target="_blank"
                                        sx={{ ...musicButtonStyles, opacity: expandMusic ? 1 : 0 }}>
                                        apple music
                                    </Button>
                                </div>
                            </div>
                        </Box>
                    </Box>
                </ThemeProvider>
            </Grid>
        </div>
    )
}

export default Body;