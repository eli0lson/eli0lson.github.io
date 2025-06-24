import { createTheme } from '@mui/material';

const theme = createTheme({      
    typography: {
        fontFamily: 'Courier new',
        // textTransform: 'none',
        fontSize: 25,
        fontWeight: 1000
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
                    color: "black"
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
                    flexDirection: "row",
                    minHeight: "10vh",
                    backgroundColor: "#413c63",
                    alignItems: "center"
                }
            }
        }
    }
});

export default theme;