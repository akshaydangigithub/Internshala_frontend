import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employe: null,
  jobs: null,
  internships: null,
  errors: [],
  isAuthenticate: false,
};

export const employeReducer = createSlice({
  name: "employe",
  initialState,
  reducers: {
    addemploye: (state, action) => {
      state.employe = action.payload;
      state.isAuthenticate = true;
    },
    addJobs: (state, action) => {
      state.jobs = action.payload;
    },
    addInternships: (state, action) => {
      state.internships = action.payload;
    },
    removeemploye: (state, action) => {
      state.employe = null;
      state.isAuthenticate = false;
    },
    iserror: (state, action) => {
      state.errors.push(action.payload);
    },
    removeerror: (state, action) => {
      state.errors = [];
    },
  },
});

export const {
  addemploye,
  removeemploye,
  iserror,
  removeerror,
  addJobs,
  addInternships,
} = employeReducer.actions;

export default employeReducer.reducer;
