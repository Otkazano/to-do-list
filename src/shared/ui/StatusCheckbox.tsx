import React from 'react';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CachedIcon from '@mui/icons-material/Cached';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

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
          <PanoramaFishEyeIcon />
        </ToggleButton>
        <ToggleButton value="inProgress" aria-label="задача в работе">
          <CachedIcon />
        </ToggleButton>
        <ToggleButton value="done" aria-label="задача была выполнена">
          <CheckCircleOutlineIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default StatusCheckBox;
