import { Container, CssBaseline, Typography } from '@mui/material';
import React from 'react';
import NewTaskInput from '../features/NewTaskInput';
import { ThemeProvider } from '@mui/material/styles';
import baseTheme from '../shared/theme/baseTheme.ts';
import ToDoList from '../widgets/ToDoList.tsx';
import store from '../shared/redux/store.ts';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={baseTheme}>
        <CssBaseline />
        <Container maxWidth="xl">
          <Typography component="h1" variant="h2">
            To Do list
          </Typography>
          <NewTaskInput />
          <ToDoList />
        </Container>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
