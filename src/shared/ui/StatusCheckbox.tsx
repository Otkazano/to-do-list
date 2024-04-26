import React from 'react';

interface StatusCheckBoxProps {
  onClick: () => void;
}

const StatusCheckBox: React.FC<StatusCheckBoxProps> = ({ onClick }) => {
  return <button type="button" onClick={onClick}></button>;
};

export default StatusCheckBox;
