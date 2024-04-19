import React from 'react';
import DeleteButton from '../shared/ui/DeleteButton';
import { Card, CardActions } from '@mui/material';
import EditButton from '../shared/ui/EditButton';
import MenuMoreOptions from '../shared/ui/MenuMoreOptions';

interface Task {
  id: number;
  title: string;
  status: 'new' | 'inProgress' | 'done';
}

interface TaskItemProps {
  item: Task;
}

function TaskItem({ item }: TaskItemProps) {
  return (
    <>
      <Card variant="outlined" sx={{ margin: 5, padding: 3 }}>
        <p>{item.id}</p>
        <p>{item.title}</p>
        <p>{item.status}</p>
        <CardActions>
          <MenuMoreOptions>
            <EditButton onClick={() => {}} />
            <DeleteButton onClick={() => {}} />
          </MenuMoreOptions>
        </CardActions>
      </Card>
    </>
  );
}

export default TaskItem;
