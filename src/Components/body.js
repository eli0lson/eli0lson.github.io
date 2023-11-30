import React, { useState } from 'react';
import { Button, ThemeProvider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import theme from './themes';

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
        marginLeft: "1em",
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
                sx={{ minHeight: '90vh', backgroundColor: "#faeffc" }}
            >
                <ThemeProvider theme={theme}>
                    <Box sx={{ display: "flex", flexDirection: "column", width: "78.2%"}}>
                        <Box sx={{ 
                            display: "flex", 
                            flexDirection: "row", 
                            justifyContent: "center", 
                            alignItems: "center"
                            }}>
                            <Typography>are you here to see</Typography>
                            <Button
                                variant="text"
                                onClick={() => {
                                    setExpandCode(!expandCode)
                                }}
                                sx={{
                                    color: expandCode ? "#413c63" : "#426dd4",
                                    marginLeft: ".5em",
                                    marginRight: ".5em",
                                    textDecoration: `${expandCode ? "underline" : "none"}`,
                                    ":hover": {
                                        background: "none",
                                        textDecoration: "underline"
                                    }
                                }}>
                                my code
                            </Button>
                            <Typography>or to listen to</Typography>
                            <Button
                                variant="text"
                                onClick={() => {
                                    setExpandMusic(!expandMusic)
                                }}
                                sx={{
                                    color: expandMusic ? "#413c63" : "#426dd4",
                                    marginLeft: ".5em",
                                    marginRight: ".5em",
                                    textDecoration: `${expandMusic ? "underline" : "none"}`,
                                    ":hover": {
                                        background: "none",
                                        textDecoration: "underline"
                                    }
                                }}>
                                my music
                            </Button>
                        <Typography>?</Typography>
                        </Box>

                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", marginTop: "1em"}}>

                            <Box sx={{ marginRight: "10.9em" }}>
                                {/* <Button
                                    variant="outlined"
                                    target="_blank"
                                    sx={{ ...musicButtonStyles, opacity: expandCode ? 1 : 0 }}
                                    onClick={() => window.open("/../../public/Olson_Resume.pdf","_blank")}>
                                    <a href="/../../public/Olson_Resume.pdf" target="_blank">résumé</a>
                                </Button> */}
                                <Button
                                    variant="outlined"
                                    target="_blank"
                                    onClick={() => window.open("https://github.com/eli0lson", "_blank")}
                                    sx={{ ...musicButtonStyles, opacity: expandCode ? 1 : 0 }}>
                                    github
                                </Button>
                            </Box>

                            <Box sx={{ marginRight: "1.68em" }} >
                                <Button
                                    variant="outlined"
                                    href={SPOTIFY_LINK}
                                    target="_blank"
                                    sx={{ ...musicButtonStyles, opacity: expandMusic ? 1 : 0 }}>
                                    spotify
                                </Button>
                                <Button
                                    variant="outlined"
                                    href={APPLE_MUSIC_LINK}
                                    target="_blank"
                                    sx={{ ...musicButtonStyles, opacity: expandMusic ? 1 : 0 }}>
                                    apple music
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </ThemeProvider>
            </Grid>
        </div>
    )
}

export default Body;