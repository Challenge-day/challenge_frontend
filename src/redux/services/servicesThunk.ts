import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { IReferralData, ISignUpData } from "../../axios/interface";

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
>("generate_referral_url", async (id, { rejectWithValue }) => {
  try {
    const response = await axios.post(`/api/generate_referral_url/${id}`);
    const data = response.data;
    await navigator.clipboard.writeText(data.referral_url);
    return data;
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

export const sendReferralInfo = createAsyncThunk<
  string,
  IReferralData,
  {
    rejectValue: string;
  }
>("api/referral", async (data: IReferralData, { rejectWithValue }) => {
  try {
    const response = await axios.put(`/api/referral`, data);
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
