import { createTheme } from "@mui/material";

const darkMode = false;

const theme = createTheme({
    palette: {
        primary: {
            main: "#f44336",
            light: "#e57373",
        },
        mode: darkMode ? 'dark' : 'light',
        secondary: {
            main: "#15c630",
        },
        otherColor: {
            default: "#999",
        },
    },
});

export { theme, darkMode };
