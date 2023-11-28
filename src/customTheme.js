// customTheme.js or customTheme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Your custom theme configurations go here
  palette: {
    mode: 'light',
    primary: {
      main: '#3e8e83', // Your primary color
    },
    secondary: {
      main: '#ff4081', // Your secondary color
    },
  },
  // other theme configurations...
});

export default theme;
