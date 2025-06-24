import React, { useState } from 'react';
import { Button, ThemeProvider } from '@mui/material';

import ToggleButton from './toggleButton.tsx'; 

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
            <ThemeProvider theme={theme}>
                <div className='links code'>
                    <div className='toggle'>
                        <ToggleButton
                            setExpand={setExpandCode}
                            expand={expandCode}
                            label={'my code'}
                        />
                    </div>
                    <div className='code-links'>
                        <Button
                            className='link'
                            variant="outlined"
                            target="_blank"
                            onClick={() => window.open("https://olsynth-six.vercel.app/", "_blank")}
                            sx={{ 
                                ...musicButtonStyles, 
                                opacity: expandCode ? 1 : 0,
                                pointerEvents: expandCode ? 'auto' : 'none'
                            }}>
                            olsynth
                        </Button>
                        <Button
                            className='link'
                            variant="outlined"
                            target="_blank"
                            onClick={() => window.open("https://github.com/eli0lson", "_blank")}
                            sx={{ 
                                ...musicButtonStyles, 
                                opacity: expandCode ? 1 : 0,
                                pointerEvents: expandCode ? 'auto' : 'none'
                            }}>
                            github
                        </Button>
                    </div>
                </div>
                <div className='links'>
                    <div className='toggle'>
                        <ToggleButton
                            id='musicButton'
                            expand={expandMusic}
                            setExpand={setExpandMusic}
                            label='my music'
                        /> 
                    </div>
                    <div className='music-links'>
                        <Button
                            className='link'
                            variant="outlined"
                            href={SPOTIFY_LINK}
                            target="_blank"
                            sx={{ 
                                ...musicButtonStyles, 
                                opacity: expandMusic ? 1 : 0,
                                pointerEvents: expandMusic ? 'auto' : 'none'
                            }}>
                            spotify
                        </Button>
                        <Button
                            className='link'
                            variant="outlined"
                            href={APPLE_MUSIC_LINK}
                            target="_blank"
                            sx={{ 
                                ...musicButtonStyles, 
                                opacity: expandMusic ? 1 : 0,
                                pointerEvents: expandMusic ? 'auto' : 'none'     
                            }}>
                            apple music
                        </Button>
                    </div>
                </div>
            </ThemeProvider>
        </div>
    )
}

export default Body;