import React, { useState } from 'react';
import DeleteButton from '../shared/ui/DeleteButton';
import { Card, CardActions, Container, Typography } from '@mui/material';
import EditButton from '../shared/ui/EditButton';
import MenuMoreOptions from '../shared/ui/MenuMoreOptions';
import StatusCheckBox from '../shared/ui/StatusCheckbox';
import { useDispatch } from 'react-redux';
import {
  deleteTask,
  updateTaskStatusInStore,
  updateTaskTitleInStore,
} from '../shared/redux/slices/taskSlice';
import { deleteTaskInApi, updateTaskStatus, updateTaskTitle } from '../shared/api/api';
import { Task } from '@mui/icons-material';
import EditingItemForm from '../shared/ui/EditingItemForm';

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
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const dispatch = useDispatch();
  const onSetNewStatus = (newAlignment: 'new' | 'inProgress' | 'done') => {
    updateTaskStatus(item.id, newAlignment);
    dispatch(updateTaskStatusInStore({ id: item.id, status: newAlignment }));
  };
  const onSetNewTitle = (newTitle: string) => {
    updateTaskTitle(item.id, newTitle);
    dispatch(updateTaskTitleInStore({ id: item.id, title: newTitle }));
  };
  const onDeleteItem = () => {
    deleteTaskInApi(item.id);
    dispatch(deleteTask(item.id));
  };
  const onSubmitEdition = (newTitle: string) => {
    if (newTitle === item.title) {
      setIsEditing(false);
    } else {
      onSetNewTitle(newTitle);
      setIsEditing(false);
    }
  };
  return (
    <Container maxWidth="xs">
      <Card variant="outlined" sx={{ margin: 1, padding: 2 }}>
        {isEditing ? (
          <EditingItemForm previousTitle={item.title} onSubmit={onSubmitEdition} />
        ) : (
          <>
            <Typography component="p" variant="h6">
              {item.number}. {item.title}
            </Typography>
            <CardActions>
              <StatusCheckBox initialAlignment={item.status} onClick={onSetNewStatus} />
              <MenuMoreOptions>
                <EditButton
                  onClick={() => {
                    setIsEditing(true);
                  }}
                />
                <DeleteButton onClick={onDeleteItem} />
              </MenuMoreOptions>
            </CardActions>
          </>
        )}
      </Card>
    </Container>
  );
};

export default TaskItem;
