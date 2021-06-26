import { createMuiTheme } from '@material-ui/core';

/** Override some default styles and colors */
export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*, *:before, *:after': {
          boxSizing: 'border-box',
        },
        html: {
          height: '100%',
        },
        body: {
          height: '100%',
          margin: 0,
          padding: 0,
          scrollBehavior: 'smooth',
          backgroundColor: '#eceef9',
        },
        '#root': {
          display: 'flex',
          flexDirection: 'column',
          maxWidth: 1920,
          width: '100%',
          height: '100%',
          margin: '0 auto',
          padding: 24,
        }
      },
    },
  },
  palette: {
    secondary: {
      main: '#ff9800'
    }
  }
});
