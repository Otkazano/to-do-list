import { IconButton, Menu, MenuItem } from '@mui/material';
import React, { ReactNode, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface MenuMoreOptionsProps {
  children: ReactNode;
}

const MenuMoreOptions: React.FC<MenuMoreOptionsProps> = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {React.Children.map(children, child => (
          <MenuItem onClick={handleClose}>{child}</MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuMoreOptions;
