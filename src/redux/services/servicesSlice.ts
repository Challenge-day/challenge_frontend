import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import ServicesInterface from "./servicesInterfaces";

const initialState : ServicesInterface = {
    error: null,
    isLoading: false,
    openModal: false,
    modalContent: "",
    currentPage: 1,
};

const serviceSlice = createSlice({
    name: "service",
    initialState,
    selectors:{
        selectError: state => state.error,
        selectIsLoading: state => state.isLoading,
        selectOpenModal: state => state.openModal,
        selectModalContent: state => state.modalContent,
        selectCurrentPage: state => state.currentPage,
    },
    reducers: {
        setModalStatus: (state, action : PayloadAction<boolean>) => {
            state.openModal = action.payload;
        },
        setModalContent: (state, action:PayloadAction<string>) => {
            state.modalContent = action.payload;
        },
        setCurrentPage: (state, action:PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder;
    },
});

export const {
    setModalStatus,
    setModalContent,
    setCurrentPage,
} = serviceSlice.actions;

export const {
    selectError, selectIsLoading, selectOpenModal,selectModalContent, selectCurrentPage
}=serviceSlice.selectors;
export const serviceReducer = serviceSlice.reducer;