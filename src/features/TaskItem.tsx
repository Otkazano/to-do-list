import React from 'react';
import DeleteButton from '../shared/ui/DeleteButton';
import { Card, CardActions, Container, Typography } from '@mui/material';
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

const TaskItem: React.FC<TaskItemProps> = ({ item }) => {
  return (
    <Container maxWidth="xs">
      <Card variant="outlined" sx={{ margin: 1, padding: 2 }}>
        <Typography component="p" variant="h6">
          {item.title}
        </Typography>
        <CardActions>
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
