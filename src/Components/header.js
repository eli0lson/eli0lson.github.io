import * as React from 'react';

import { 
  Typography,
  Button, 
  AppBar,
  ThemeProvider,
 } from '@mui/material';

import { Box } from '@mui/system';
import theme from './themes'

import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

const SPOTIFY_LINK = "https://open.spotify.com/artist/0kXiWZgWKpdl8lYsZKelUW?si=vXt8P_t4RkG3iBlcp6f6Sw";
const APPLE_MUSIC_LINK = "https://music.apple.com/us/artist/eli-olson/1509498872";

const Header = () => {
  return (
    <Box>
      <ThemeProvider theme={theme} >
          <AppBar position="relative" elevation={3}>
              <Box sx={{ width: "20%", justifyContent: "center", display: "flex"}}>
                <Typography sx={{ 
                  fontSize: "29px"
                  }}>
                  eli olson .com
                </Typography>
              </Box>

              <Box sx={{ width: "25%", display: "flex", justifyContent: "space-around" }}>
                <Button
                  variant="outlined"
                  href={SPOTIFY_LINK}
                  target="_blank">
                  <Typography>
                    spotify
                  </Typography>
                </Button>
                <Button
                  variant="outlined"
                  href={APPLE_MUSIC_LINK}
                  target="_blank">
                    apple music
                </Button>
              </Box>

          </AppBar>
        </ThemeProvider>
      </Box>
  );
}

export default Header;