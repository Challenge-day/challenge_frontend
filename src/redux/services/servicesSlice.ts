import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IServicesInterface from "./servicesInterfaces";
import { generateReferal, getReferal } from "./servicesThunk";

const initialState: IServicesInterface = {
  error: null,
  isLoading: false,
  openModal: false,
  modalContent: "",
  referal: "",
};

const handlePending = (state: IServicesInterface) => {
  state.isLoading = true;
};

const handleRejected = (state: IServicesInterface, action: PayloadAction<null | string>) => {
  state.isLoading = false;
  state.error = action.payload;
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
    builder
      .addCase(generateReferal.pending, handlePending)
      .addCase(generateReferal.fulfilled, (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = null;
        state.referal = action.payload;
      })
      .addCase(generateReferal.rejected, handleRejected);
      builder
      .addCase(getReferal.pending, handlePending)
      .addCase(getReferal.fulfilled, (state) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getReferal.rejected, handleRejected);
  },
});

export const { setModalStatus, setModalContent } = serviceSlice.actions;

export const { selectError, selectIsLoading, selectOpenModal, selectModalContent } = serviceSlice.selectors;

export const serviceReducer = serviceSlice.reducer;
