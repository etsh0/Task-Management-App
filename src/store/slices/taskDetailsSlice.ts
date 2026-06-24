import { createSlice } from '@reduxjs/toolkit';

interface TaskDetailsState {
  selectedTaskId: string | null;
  projectId: string | null;
}

const initialState: TaskDetailsState = {
  selectedTaskId: null,
  projectId: null,
};

export const taskDetailsSlice = createSlice({
  name: 'taskDetails',
  initialState: initialState,
  reducers: {
    // open modal
    openTaskPopup: (state, action) => {
      state.selectedTaskId = action.payload.selectedTaskId;
      state.projectId = action.payload.projectId;
    },
    // close modal
    closeTaskPopup: (state) => {
      state.projectId = null;
      state.selectedTaskId = null;
    },
  },
});

export const taskDetailsReducer = taskDetailsSlice.reducer;
export const { openTaskPopup, closeTaskPopup } = taskDetailsSlice.actions;
