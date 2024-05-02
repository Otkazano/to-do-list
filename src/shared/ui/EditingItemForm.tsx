import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';

interface EditingItemFormProps {
  previousTitle: string;
  onSubmit: (newTitle: string) => void;
}

const EditingItemForm: React.FC<EditingItemFormProps> = ({ previousTitle, onSubmit }) => {
  const [newTitle, setNewTitle] = useState<string>(previousTitle);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(event.target.value);
  };

  const handleSubmitForm = () => {
    onSubmit(newTitle);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSubmitForm();
    }
  };

  return (
    <>
      <TextField
        fullWidth
        label={previousTitle}
        aria-label={`'введите новое название для задачи' ${previousTitle}`}
        value={newTitle}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        margin="normal"
      />
      <Button
        variant="contained"
        fullWidth
        onClick={handleSubmitForm}
        aria-label={`'сохранить новое название для задачи' ${previousTitle}`}
      >
        Сохранить
      </Button>
    </>
  );
};

export default EditingItemForm;
