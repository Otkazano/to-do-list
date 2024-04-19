import React, { useEffect, useState } from 'react';
import { getAllTaskItems } from '../shared/api/api';
import TaskItem from '../features/TaskItem';
import { Typography } from '@mui/material';

interface Task {
  id: number;
  title: string;
  status: 'new' | 'inProgress' | 'done';
}

const ToDoList: React.FC = () => {
  const [allTasksItems, setAllTasksItems] = useState<Task[]>([]);

  useEffect(() => {
    setAllTasksItems(getAllTaskItems());
  }, []);

  return (
    <>
      {allTasksItems.length === 0 ? (
        <Typography align="center" variant="h5" paragraph={true} sx={{ margin: 5 }}>
          Создайте свою первую задачу!
        </Typography>
      ) : (
        allTasksItems.map(item => <TaskItem item={item} key={item.id} />)
      )}
    </>
  );
};

export default ToDoList;
