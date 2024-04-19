import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';

interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <IconButton aria-label="delete" onClick={onClick}>
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteButton;
