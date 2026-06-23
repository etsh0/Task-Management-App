import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './slices/userSlice';
import { projectsReducer } from './slices/ProjectsSlice';
import { taskDetailsReducer } from './slices/taskDetailsSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    projects: projectsReducer,
    taskDetails: taskDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
