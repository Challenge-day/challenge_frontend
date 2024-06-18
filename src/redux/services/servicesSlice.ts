import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IServicesInterface from "./servicesInterfaces";

const initialState: IServicesInterface = {
  error: null,
  isLoading: false,
  openModal: false,
  modalContent: "",
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  selectors: {
    selectError: (state) => state.error,
    selectIsLoading: (state) => state.isLoading,
    selectOpenModal: (state) => state.openModal,
    selectModalContent: (state) => state.modalContent,
  },
  reducers: {
    setModalStatus: (state, action: PayloadAction<boolean>) => {
      state.openModal = action.payload;
    },
    setModalContent: (state, action: PayloadAction<string>) => {
      state.modalContent = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder;
  },
});

export const { setModalStatus, setModalContent } = serviceSlice.actions;

export const { selectError, selectIsLoading, selectOpenModal, selectModalContent } = serviceSlice.selectors;

export const serviceReducer = serviceSlice.reducer;
