import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DonutSmallOutlinedIcon from '@mui/icons-material/DonutSmallOutlined';
import DonutSmallSharpIcon from '@mui/icons-material/DonutSmallSharp';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';

interface StatusCheckBoxProps {
  initialAlignment: 'new' | 'inProgress' | 'done';
  onClick: (newAlignment: 'new' | 'inProgress' | 'done') => void;
}

const StatusCheckBox: React.FC<StatusCheckBoxProps> = ({ initialAlignment, onClick }) => {
  const [alignment, setAlignment] = React.useState<'new' | 'inProgress' | 'done'>(initialAlignment);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: 'new' | 'inProgress' | 'done',
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      onClick(newAlignment);
    }
    console.log(event);
  };

  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="new" aria-label="задача готова к выполнению">
          {alignment === 'new' ? <NoteAddRoundedIcon /> : <NoteAddOutlinedIcon />}
        </ToggleButton>
        <ToggleButton value="inProgress" aria-label="задача в работе">
          {alignment === 'inProgress' ? <DonutSmallSharpIcon /> : <DonutSmallOutlinedIcon />}
        </ToggleButton>
        <ToggleButton value="done" aria-label="задача была выполнена">
          {alignment === 'done' ? <CheckCircleRoundedIcon /> : <CheckCircleOutlineIcon />}
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default StatusCheckBox;
