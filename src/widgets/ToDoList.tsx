import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Grid } from '@mui/material';
import { RootState } from '../shared/redux/store';
import { setAllTasksItems } from '../shared/redux/slices/taskSlice';
import { getAllTaskItems } from '../shared/api/api';
import TaskItem from '../features/TaskItem';

interface Task {
  id: number;
  title: string;
  status: 'new' | 'inProgress' | 'done';
}

const ToDoList: React.FC = () => {
  const dispatch = useDispatch();
  const allTasksItems = useSelector((state: RootState) => state.tasks.tasks);

  useEffect(() => {
    dispatch(setAllTasksItems(getAllTaskItems()));
  }, [dispatch]);

  const sortByStatus = (tasks: Task[]) => {
    const statusOrder = {
      new: 1,
      inProgress: 2,
      done: 3,
    };

    const sortedTasks: Task[] = [];
    Object.keys(statusOrder).forEach(status => {
      const tasksWithStatus = tasks.filter(task => task.status === status);
      sortedTasks.push(...tasksWithStatus);
    });

    return sortedTasks;
  };

  const sortedTasks = sortByStatus(allTasksItems);

  const groupedTasks: { [key: string]: Task[] } = {};
  sortedTasks.forEach(task => {
    if (!groupedTasks[task.status]) {
      groupedTasks[task.status] = [];
    }
    groupedTasks[task.status].push(task);
  });

  const statuses = ['new', 'inProgress', 'done'];

  return (
    <>
      {allTasksItems.length === 0 ? (
        <Typography align="center" variant="h5" paragraph={true} sx={{ margin: 5 }}>
          Создайте свою первую задачу!
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {statuses.map(status => (
            <Grid item xs={12} sm={6} md={4} key={status}>
              <Typography variant="h4" align="center" sx={{ margin: 2 }}>
                {status === 'new'
                  ? 'Новые'
                  : status === 'inProgress'
                    ? 'В процессе'
                    : 'Выполненные'}
              </Typography>
              {groupedTasks[status] ? (
                groupedTasks[status].map(item => <TaskItem item={item} key={item.id} />)
              ) : (
                <Typography variant="body2" align="center">
                  Нет задач
                </Typography>
              )}
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default ToDoList;
