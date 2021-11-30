import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    modalIsVisible: false,
    title:'',
    message:'',
};

const reducers = {
    toggleHandler(state){
        state.modalIsVisible = !state.modalIsVisible;
    },

    messageHandler (state, action){
       const op = action.payload.operation;

        switch(op){
            case 'update':
                state.title = "Update Message";
                state.message = "You have successfully update the diary!";
                break;
            case 'create':
                state.title = "Create Message";
                state.message = "You have successfully create a new diary!";
                break;
            case 'delete':
                state.title = "Delete Message";
                state.message = "You have successfully delete the diary!";
                break;
            default:
                state.title = '';
                state.message = '';
        }

    }
};

const modalSlice = createSlice({
    name: "modal",
    initialState: initialState,
    reducers: reducers,
});

export const modalActions = modalSlice.actions;

export default modalSlice;