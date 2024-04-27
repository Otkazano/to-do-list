import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';
import CachedIcon from '@mui/icons-material/Cached';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import React from 'react';

const StatusCheckBox: React.FC = () => {
  const [alignment, setAlignment] = React.useState('new');

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
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
        <ToggleButton value="done" aria-label="задача выполнена">
          <CheckCircleOutlineIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default StatusCheckBox;
