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

  const sortByStatus = (tasks: Task[]) => {
    const statusOrder = {
      new: 1,
      inProgress: 2,
      done: 3,
    };

    return tasks.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
  };

  const sortedTasks = sortByStatus(allTasksItems);

  const listOfToDos = (
    <>
      {sortedTasks.map(item => (
        <TaskItem item={item} key={item.id} />
      ))}
    </>
  );

  return (
    <>
      {allTasksItems.length === 0 ? (
        <Typography align="center" variant="h5" paragraph={true} sx={{ margin: 5 }}>
          Создайте свою первую задачу!
        </Typography>
      ) : (
        <>{listOfToDos}</>
      )}
    </>
  );
};

export default ToDoList;
