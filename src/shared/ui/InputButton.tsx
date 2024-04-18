import React from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';
import LoadingButton from '@mui/lab/LoadingButton';

interface InputButtonProps {
  text: string;
  disabled: boolean;
  loading: boolean;
  loadingText: string;
  onClick: () => void;
}

const InputButton: React.FC<InputButtonProps> = ({
  text,
  disabled,
  loading,
  loadingText,
  onClick,
}) => {
  return (
    <LoadingButton
      loading={loading}
      disabled={disabled}
      loadingPosition="end"
      endIcon={<AddBoxIcon />}
      variant="contained"
      fullWidth
      onClick={onClick}
    >
      {loading ? loadingText : text}
    </LoadingButton>
  );
};

export default InputButton;
