import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import InputButton from '../shared/ui/InputButton';
import { TextField } from '@mui/material';

const NewTaskInput: React.FC = () => {
  const [taskText, setTaskText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };

  const handleCreateTask = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTaskText('');
    }, 2000);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleCreateTask();
    }
  };

  return (
    <>
      <TextField
        fullWidth
        id="outlined-basic"
        label="Напишите свою новую задачу"
        variant="outlined"
        margin="normal"
        value={taskText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        disabled={loading}
      />
      <InputButton
        disabled={!taskText}
        loading={loading}
        text="Создать новую задачу"
        loadingText="Новая задача создается"
        onClick={handleCreateTask}
      />
    </>
  );
};

export default NewTaskInput;
