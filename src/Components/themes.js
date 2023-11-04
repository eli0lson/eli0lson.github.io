import { createTheme } from '@mui/material';

const theme = createTheme({      
    typography: {
        fontFamily: 'Courier New',
        textTransform: 'none',
        fontSize: 19,
    },
    box: {
        display: "flex",
        justifyContent: "space-around"
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    height: "2.2em",
                    color: "black",
                    backgroundColor: "#cee8ff",
                    borderColor: "#5f9cd2",
                    ":hover": { 
                        backgroundColor: "#5f9cd2",
                        color: "white",
                        borderColor: "white"
                    }
                }
            },
            defaultProps: {
                disableRipple: true
            }      
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "10vh",
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: "#413c63",
                    alignItems: "center"
                }
            }
        }
    }
});

export default theme;