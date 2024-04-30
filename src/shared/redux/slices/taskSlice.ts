import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Task {
  id: number;
  title: string;
  status: 'new' | 'inProgress' | 'done';
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Task>) {
      state.tasks.push(action.payload);
    },
    deleteTask(state, action: PayloadAction<number>) {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    updateTaskStatusInStore(
      state,
      action: PayloadAction<{ id: number; status: 'new' | 'inProgress' | 'done' }>,
    ) {
      const { id, status } = action.payload;
      const taskToUpdate = state.tasks.find(task => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.status = status;
      }
    },
    updateTaskTitle(state, action: PayloadAction<{ id: number; title: string }>) {
      const { id, title } = action.payload;
      const taskToUpdate = state.tasks.find(task => task.id === id);
      if (taskToUpdate) {
        taskToUpdate.title = title;
      }
    },
    setAllTasksItems(state, action: PayloadAction<Task[]>) {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, deleteTask, updateTaskStatusInStore, updateTaskTitle, setAllTasksItems } =
  taskSlice.actions;
export default taskSlice.reducer;
