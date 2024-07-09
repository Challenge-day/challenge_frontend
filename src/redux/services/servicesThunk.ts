import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { ISignUpData } from "../../axios/interface";

axios.defaults.baseURL = "https://challenge-d3v-api.azurewebsites.net/";

interface FetchContactsError {
  message: string;
}

export const generateReferal = createAsyncThunk<
  string,
  number,
  {
    rejectValue: string;
  }
>("referal/generate", async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/api/generate_referral_url/${id}`);
    return response.data;
  } catch (e) {
    let errorMessage: string;
    if (axios.isAxiosError(e)) {
      const axiosError = e as AxiosError<FetchContactsError>;
      errorMessage = axiosError.response?.data?.message || axiosError.message;
    } else {
      errorMessage = (e as Error).message;
    }
    return rejectWithValue(errorMessage);
  }
});

export const getReferal = createAsyncThunk<
  string,
  number,
  {
    rejectValue: string;
  }
>("referal/get", async (id: number, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/api/referral/${id}`);
    return response.data;
  } catch (e) {
    let errorMessage: string;
    if (axios.isAxiosError(e)) {
      const axiosError = e as AxiosError<FetchContactsError>;
      errorMessage = axiosError.response?.data?.message || axiosError.message;
    } else {
      errorMessage = (e as Error).message;
    }
    return rejectWithValue(errorMessage);
  }
});

export const createUser = createAsyncThunk<
  string,
  ISignUpData,
  {
    rejectValue: string;
  }
>("users", async (data, { rejectWithValue }) => {
  try {
    const response = await axios.post(`/api/users`, data);
    return response.data;
  } catch (e) {
    let errorMessage: string;
    if (axios.isAxiosError(e)) {
      const axiosError = e as AxiosError<FetchContactsError>;
      errorMessage = axiosError.response?.data?.message || axiosError.message;
    } else {
      errorMessage = (e as Error).message;
    }
    return rejectWithValue(errorMessage);
  }
});
