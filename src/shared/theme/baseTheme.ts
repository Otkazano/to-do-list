import { createTheme, Theme } from '@mui/material';

const baseTheme: Theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
            'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: beige;
        }
      `,
    },
  },
});

export default baseTheme;
