import { createTheme, Theme } from '@mui/material';
import { grey } from '@mui/material/colors';

const baseTheme: Theme = createTheme({
  palette: {
    primary: {
      light: grey[400],
      main: grey[600],
      dark: grey[800],
      contrastText: 'white',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
            'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: Pink;
        }
      `,
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'space-between',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgb(255, 255, 255, .9)',
        },
      },
    },
  },
});

export default baseTheme;
