import * as React from 'react';

import { 
  Typography,
  AppBar,
  ThemeProvider,
 } from '@mui/material';

import { Box } from '@mui/system';
import theme from './themes'

import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';

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
{/* 
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
              </Box> */}

          </AppBar>
        </ThemeProvider>
      </Box>
  );
}

export default Header;