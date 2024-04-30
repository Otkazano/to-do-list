import React from 'react';
import DeleteButton from '../shared/ui/DeleteButton';
import { Card, CardActions, Container, Typography } from '@mui/material';
import EditButton from '../shared/ui/EditButton';
import MenuMoreOptions from '../shared/ui/MenuMoreOptions';
import StatusCheckBox from '../shared/ui/StatusCheckbox';
import { useDispatch } from 'react-redux';
import { updateTaskStatusInStore } from '../shared/redux/slices/taskSlice';
import { updateTaskStatus } from '../shared/api/api';

interface Task {
  id: number;
  title: string;
  status: 'new' | 'inProgress' | 'done';
}

interface TaskItemProps {
  item: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const setNewStatus = (newAlignment: 'new' | 'inProgress' | 'done') => {
    updateTaskStatus(item.id, newAlignment);
    dispatch(updateTaskStatusInStore({ id: item.id, status: newAlignment }));
  };
  return (
    <Container maxWidth="xs">
      <Card variant="outlined" sx={{ margin: 1, padding: 2 }}>
        <Typography component="p" variant="h6">
          {item.title}
        </Typography>
        <CardActions>
          <StatusCheckBox initialAlignment={item.status} onClick={setNewStatus} />
          <MenuMoreOptions>
            <EditButton onClick={() => {}} />
            <DeleteButton onClick={() => {}} />
          </MenuMoreOptions>
        </CardActions>
      </Card>
    </Container>
  );
};

export default TaskItem;
