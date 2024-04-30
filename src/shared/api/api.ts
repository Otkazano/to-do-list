interface Task {
  id: number;
  title: string;
  status: 'new' | 'inProgress' | 'done';
}

export function getAllTaskItems(): Task[] {
  const allTasksItemsString = localStorage.getItem('allTasks');
  let allTasksItems: Task[] = [];

  if (allTasksItemsString) {
    try {
      allTasksItems = JSON.parse(allTasksItemsString);
    } catch (error) {
      console.error('Error parsing stored tasks:', error);
      return [];
    }
  }

  return allTasksItems;
}

export function setNewTaskItem(newTask: Task): void {
  const previousTasks = getAllTaskItems();
  const updatedTasks = [...previousTasks, newTask];
  const updatedTasksItemsString = JSON.stringify(updatedTasks);

  localStorage.setItem('allTasks', updatedTasksItemsString);
}

export function updateTaskTitle(id: number, newTitle: string): void {
  const allTasks = getAllTaskItems();
  const updatedTasks = allTasks.map(task => {
    if (task.id === id) {
      return { ...task, title: newTitle };
    }
    return task;
  });
  const updatedTasksItemsString = JSON.stringify(updatedTasks);
  localStorage.setItem('allTasks', updatedTasksItemsString);
}

export function updateTaskStatus(id: number, newStatus: 'new' | 'inProgress' | 'done'): void {
  const allTasks = getAllTaskItems();
  const updatedTasks = allTasks.map(task => {
    if (task.id === id) {
      return { ...task, status: newStatus };
    }
    return task;
  });
  const updatedTasksItemsString = JSON.stringify(updatedTasks);
  localStorage.setItem('allTasks', updatedTasksItemsString);
}

export function deleteTaskInApi(id: number): void {
  const allTasks = getAllTaskItems();
  const updatedTasks = allTasks.filter(task => task.id !== id);
  const updatedTasksItemsString = JSON.stringify(updatedTasks);
  localStorage.setItem('allTasks', updatedTasksItemsString);
}
