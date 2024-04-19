import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';

interface EditButtonProps {
  onClick: () => void;
}

const EditButton: React.FC<EditButtonProps> = ({ onClick }) => {
  return (
    <IconButton aria-label="edit" onClick={onClick}>
      <EditIcon />
    </IconButton>
  );
};

export default EditButton;
