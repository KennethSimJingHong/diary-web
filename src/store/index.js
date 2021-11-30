import {configureStore} from "@reduxjs/toolkit";
import diarySlice from "./diary-slice";
import modalSlice from "./modal-slice";

const store = configureStore({
    reducer:{diary: diarySlice.reducer, modal: modalSlice.reducer},
});

export default store;