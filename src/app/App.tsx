import { Container, CssBaseline } from '@mui/material';
import React from 'react';
import NewTaskInput from '../features/NewTaskInput';
import { ThemeProvider } from '@mui/material/styles';
import baseTheme from '../shared/theme/baseTheme.ts';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={baseTheme}>
        <CssBaseline />
        <Container maxWidth="xl">
          <h1>To Do list</h1>
          <NewTaskInput />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
