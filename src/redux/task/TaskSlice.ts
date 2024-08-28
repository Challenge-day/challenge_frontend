import { createSlice } from "@reduxjs/toolkit";
import { fetchTaskThunk } from "./taskOps";

const initialState = {
  items: [] as Array<{ title: string; description: string; status: string }>,
  loading: false,
  error: null as string | null,
};

const slice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTaskThunk.fulfilled, (state, action) => {
        console.log("Fulfilled action payload:", action.payload);

        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchTaskThunk.pending, (state) => {
        console.log("Loading...");

        state.loading = true;
      })
      .addCase(fetchTaskThunk.rejected, (state, action) => {
        console.error("Error action payload:", action.payload);

        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const taskReducer = slice.reducer;
