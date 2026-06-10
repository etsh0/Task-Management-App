import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import config from '../../config/env';
import { getAccessToken } from '../../features/auth/Login/cookie';
import type { Project } from '../../features/projects/type';

interface projectsState {
  projects: Project[];
  loading: boolean;
  error: string | null;
  selectedProject: Project | null;
}

export type addProjectPayload = {
  name: string;
  description?: string;
};

type UpdateProjectPayload = {
  project_id: string;
  data: {
    name?: string;
    description?: string;
  };
};

const initialState: projectsState = {
  projects: [],
  loading: false,
  error: null,
  selectedProject: null,
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

      return data;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      return rejectWithValue('NETWORK_ERROR');
    }
  },
);

export const addProject = createAsyncThunk(
  'projects/addProject',
  async (payload: addProjectPayload) => {
    const token = getAccessToken();
    const res = await fetch(config.apiUrl + '/rest/v1/projects', {
      method: 'POST',
      headers: {
        apiKey: config.anonKey,
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      throw new Error('Failed to create project');
    }

    return await res.json();
  },
);

export const updateProject = createAsyncThunk(
  'project/updateProject',
  async (payload: UpdateProjectPayload) => {
    const token = getAccessToken();
    const res = await fetch(
      config.apiUrl + `/rest/v1/projects?id=eq.${payload.project_id}`,
      {
        method: 'PATCH',
        headers: {
          apiKey: config.anonKey,
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload.data),
      },
    );

    if (!res.ok) {
      throw new Error('Failed to update project');
    }

    const data = await res.json();
    return data[0];
  },
);

export const ProjectsSlice = createSlice({
  name: 'Projects',
  initialState,
  reducers: {
    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },
    clearSelectedProject: (state) => {
      state.selectedProject = null;
    },
  },
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
      })
      .addCase(addProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProject.fulfilled, (state, action) => {
        state.loading = false;
        state.projects.push(action.payload);
      })
      .addCase(addProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Unknown error';
      })
      .addCase(updateProject.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        state.projects = state.projects.map((project) =>
          project.id === action.payload.project_id ? action.payload : project,
        );
      })
      .addCase(updateProject.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'FAILED_TO_UPDATE';
      });
  },
});

export const projectsReducer = ProjectsSlice.reducer;
export const { setSelectedProject, clearSelectedProject } =
  ProjectsSlice.actions;
