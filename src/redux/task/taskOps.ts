import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://challenge-d3v-api.azurewebsites.net/";

export const fetchTaskThunk = createAsyncThunk("task/fetchThunk", async (_, thunkAPI) => {
  try {
    const { data } = await axios.get("status");
    console.log("Data from backend:", data);
    return data;
  } catch (error: any) {
    console.error("Error fetching data:", error);
    return thunkAPI.rejectWithValue(error.message);
  }
});
