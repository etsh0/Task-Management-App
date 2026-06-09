import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import config from '../../config/env';
import { getAccessToken } from '../../features/auth/Login/cookie';
import type { Project } from '../../features/projects/type';

interface projectsState {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

const initialState: projectsState = {
  projects: [],
  loading: false,
  error: null,
};

export const getAllProjects = createAsyncThunk(
  'projects',
  async (_, { rejectWithValue }) => {
    try {
      const token = getAccessToken();
      const res = await fetch(config.apiUrl + '/rest/v1/rpc/get_projects', {
        method: 'GET',
        headers: {
          apiKey: config.anonKey,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (res.status === 401) {
        return rejectWithValue('UNAUTHORIZED');
      }

      if (!res.ok) {
        return rejectWithValue('FAILED_TO_FETCH');
      }

      const data = await res.json();
      console.log(data);

      return data;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return rejectWithValue('NETWORK_ERROR');
    }
  },
);

export const ProjectsSlice = createSlice({
  name: 'Projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProjects.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(getAllProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = (action.payload as string) || 'Unknown error';
      });
  },
});

export const projectsReducer = ProjectsSlice.reducer;
