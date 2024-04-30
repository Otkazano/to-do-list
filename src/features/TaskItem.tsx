import React from 'react';
import DeleteButton from '../shared/ui/DeleteButton';
import { Card, CardActions, Container, Typography } from '@mui/material';
import EditButton from '../shared/ui/EditButton';
import MenuMoreOptions from '../shared/ui/MenuMoreOptions';
import StatusCheckBox from '../shared/ui/StatusCheckbox';
import { useDispatch } from 'react-redux';
import { deleteTask, updateTaskStatusInStore } from '../shared/redux/slices/taskSlice';
import { deleteTaskInApi, updateTaskStatus } from '../shared/api/api';
import { Task } from '@mui/icons-material';

interface Task {
  id: number;
  title: string;
  status: 'new' | 'inProgress' | 'done';
  number?: number;
}

interface TaskItemProps {
  item: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ item }) => {
  const dispatch = useDispatch();
  const onSetNewStatus = (newAlignment: 'new' | 'inProgress' | 'done') => {
    updateTaskStatus(item.id, newAlignment);
    dispatch(updateTaskStatusInStore({ id: item.id, status: newAlignment }));
  };
  const onDeleteItem = () => {
    deleteTaskInApi(item.id);
    dispatch(deleteTask(item.id));
  };
  return (
    <Container maxWidth="xs">
      <Card variant="outlined" sx={{ margin: 1, padding: 2 }}>
        <Typography component="p" variant="h6">
          {item.number}. {item.title}
        </Typography>
        <CardActions>
          <StatusCheckBox initialAlignment={item.status} onClick={onSetNewStatus} />
          <MenuMoreOptions>
            <EditButton onClick={() => {}} />
            <DeleteButton onClick={onDeleteItem} />
          </MenuMoreOptions>
        </CardActions>
      </Card>
    </Container>
  );
};

export default TaskItem;
