import { createAsyncThunk } from '@reduxjs/toolkit';
import axios,  { AxiosError } from 'axios';

axios.defaults.baseURL = 'https://challenge-d3v-api.azurewebsites.net/';

interface FetchContactsError {
    message: string;
}

export const generateReferal = createAsyncThunk(
    'referal/generate',
    async (id: number, thunkApi) => {
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
            return thunkApi.rejectWithValue({ message: errorMessage });
        }
    }
);

export const getReferal = createAsyncThunk(
    'referal/get',
    async (id: number, thunkApi) => {
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
            return thunkApi.rejectWithValue({ message: errorMessage });
        }
    }
);